# Marcel's Lösungsweg mit abschauen bei Samuel 🙌

1. Zuerst holt man drei Sachen aus Light/index.js

```javascript
import { useState } from "react";
```

```javascript
const [isOn, setIsOn] = useState(false);
```

```javascript
function handleToggle() {
  setIsOn((isOn) => !isOn);
}
```

2. In der \_app.js fügt man die drei Sachen ein. Das import Statement geht ganz nach oben.

```javascript
// add this to the first line...
import { useState } from "react";
// imports tha are already here...
import GlobalStyle from "../styles";
import Layout from "../components/Layout";
// more code...
```

3. Die beiden anderen Sachen gehen in die Function.

```javascript
export default function App({ Component, pageProps }) {
  // the state
  const [isOn, setIsOn] = useState(false);
  // the function
  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }
  //more code...
}
```

4. Für den Anfang ändern wir die Funktion, so das nur ein Klick in der console erfasst wird.

```javascript
function handleToggle() {
  // console.log onclick button
  console.log("a button was clicked...");
  //   //setIsOn((isOn) => !isOn);
}
```

5. Jetzt erstellen wir in der \_app.js ein array mit einem object. Dort erfassen wir die ganzen Daten. Das können wir unter die imports setzen.

```javascript
const initialLights = [
  {
    id: 1,
    room: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    room: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    room: "Bedroom",
    isOn: false,
  },
  //... the rest of the lights...
];
```

6. In der \_app.js ändert man im state nun im State das "false" auf das erstellte array. Hier als Beispiel: initialLights

```javascript
const [isOn, setIsOn] = useState(initialLights);
```

7. In der \_app.js geben wir in dem return nun zwei props mit "lights={isOn}" "toggleLight={handleToggle}" Diese props kann man aus der "rooms.js" entnehmen. Da waren die Werte schon vorgegeben.

```javascript
<Layout>
  <GlobalStyle />
  <Component {...pageProps} lights={isOn} toggleLight={handleToggle} />
</Layout>
```

8. In der lights/index.js übergeben wir in der function auch lights, toggleLight und übergeben diese als prop weiter an die Light component. Um hier den code nicht zu wiederholen, mappen wir lights und holen uns die Infos heraus. Bitte darauf achten das in der function lights und togglelights jetzt destructured werden {}.

```javascript
export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.room}
            isOn={light.isOn}
            toggleLight={toggleLight}
            id={light.id}
          />
        </li>
      ))}
    </StyledLights>
  );
}
```

9. In der light/index.js übergeben wir die gemappten props aus lights in die Funktion: name, isOn, toggleLight, id. Und ändern das onClick Event auf toggleLight(id).

```javascript
export default function Light({ name, isOn, toggleLight, id }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        // handleToggle();
        toggleLight(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
```

10. Nach dem Speichern sollte die App jetzt erstmal funktionieren und der state sollte durchgereicht sein. Klickt man nun eine der Lampen an, erscheint in der console im Browser die Ausgabe die wir in der \_app.js als console log hinterlegt haben:

```javascript
a button was clicked...
```

11. Danach fügen wir in der \_app.js folgenden code in die handletoogle Funktion ein. Hier geht es darum zu schauen, ob die Lampen an oder aus ist. Dazu wird isOn gemapped und die id verglichen. Datauf folgt ein ternary operator der schaut welcher Zustand gerade iat. An oder aus. Und das Gegenteil wird dann gemacht.
    > **!Achtung**
    > Hier bitte Niklas oder Samuel fragen, vielleicht können die das besser erklären.

```javascript
function handleToggle(roomId) {
  setIsOn(
    isOn.map((light) =>
      light.id === roomId ? { ...light, isOn: !light.isOn } : light
    )
  );
}
```

12. Jetzt ist durchatmen angesagt! 🥳 Die App sollte jetzt erstmal genauso funktionieren wie vor dem ganzen Umbau... 😱

```javascript
Happy! Happy! Peng! Peng! Peng!
```

13. In der \_app.js erstellen wir nun eine neue Konstante mit einer filter Methode. Hier schauen wir wie lang das array ist wo Lichter die an sind drin stecken.

```javascript
const lightsThatAreOn = isOn.filter((light) => light.isOn).length;
```

14. Danach übergeben wir in der \_app.js die eben erstellte Konstante an die Component zum weiter reichen als prop.

```javascript
<Layout>
  <GlobalStyle />
  <Component
    {...pageProps}
    lights={isOn}
    toggleLight={handleToggle}
    // this one here
    lightsThatAreOn={lightsThatAreOn}
  />
</Layout>
```

15. In der Index.js (also die ganz oben liegt und Home rendert) übergeben wir nun destructured die Sachen und ersetzen im Code die ? durch die Lichter.

```javascript
export default function HomePage({ lightsThatAreOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsThatAreOn} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
```

16. Zweite Happy Zeit! 🥳 Die App zeigt nun in der Übersicht die Lampen an die Leuchten!

```javascript
for example: 3 light(s) are on.
```

17. Die erste Quickaction erstellen, alle Lampen an. In der \_app.js erstellen wir eine neue Funktion.

```javascript
function turnAllLightsOn() {
  setIsOn(isOn.map((light) => ({ ...light, isOn: true })));
}
```

18. Danach übergeben wir die Funktion wieder als prop an die Component.

```javascript
<Layout>
  <GlobalStyle />
  <Component
    {...pageProps}
    lights={isOn}
    toggleLight={handleToggle}
    lightsThatAreOn={lightsThatAreOn}
    // this one here
    turnAllLightsOn={turnAllLightsOn}
  />
</Layout>
```

19. Jetzt geht es in die action.js (die liegt ganz oben neben der index.js). Da übergeben wir der Funktion destructured ein Argument und der Quickactionscomponent weitere props.

```javascript
export default function Actions({ turnAllLightsOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions turnAllLightsOn={turnAllLightsOn} />
    </>
  );
}
```

20. Das wiederholen wir jetzt nochmal für die Components/Quickaction/index.js. Hier auch destrucured übergen und beim onclick event die Funktion aufrufen. Nun sollten alle Lichter in der Quickactions angehen! 🥳🥳🥳

```javascript
export default function QuickActions({ turnAllLightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          //console.log("Turn all lights on");
          turnAllLightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
```

21. Schritt 17-20 wiederholen wir jetzt nochmal für alle Lichter aus! Quick and dirty!

```javascript
// _app.js
function turnAllLightsOff() {
  setIsOn(isOn.map((light) => ({ ...light, isOn: false })));
}
// and...
<Layout>
  <GlobalStyle />
  <Component
    {...pageProps}
    lights={isOn}
    toggleLight={handleToggle}
    lightsThatAreOn={lightsThatAreOn}
    turnAllLightsOn={turnAllLightsOn}
    // this one here
    turnAllLightsOff={turnAllLightsOff}
  />
</Layout>;
```

```javascript
// actions.js
export default function Actions({ turnAllLightsOn, turnAllLightsOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </>
  );
}
```

```javascript
// quickactions.js
export default function QuickActions({ turnAllLightsOn, turnAllLightsOff }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          //console.log("Turn all lights off");
          turnAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          //console.log("Turn all lights on");
          turnAllLightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
```

22. Herum springen und sich freuen! Die Lichter sollten nun auch alle ausgehen!

```javascript
🥳 PARTY!!!
```

23. Bonus vielleicht später...

```javascript
😅😅😅
```

# React Global State: Lights

In this challenge you will automate the lights in your house… well, at least in your browser.

## Task

- Start the development server and make yourself familiar with the application.
- Notice that the lights are working as expected but the count of turned on lights on the home page (`/`) is not and the buttons on the `/actions` page are not working.

### Lifting State Up

- The count of turned on lights on the home page (`/`) is not working because the state is not shared between the components.
- To make the state of the `Light` components available to the `HomePage` component (`pages/index.js`), you need to lift the state up to the `App` component (`pages/_app.js`).
- In doing so, you will need to find a new way to represent the state of the lights. You can use an array of objects with a `name`, `isOn` and `id` property.
- Change `Light` component to receive at least `isOn`, `name`, `onToggle` as props and remove the internal state from the component.
- Change the `Lights` component to render the lights dynamically based on the array in state (`.map`). You'll need to pass the array down through props.
- Create a function to toggle the `isOn` property of a light based on its `id` and pass the handler function down to the `Light` components.
- In the `Lights` component pass down the `onToggle` prop to the `Light` component using an inline function to pass in the `id` of the light:

  ```js
  onToggle={() => toggleLight(light.id)}
  ```

  This of course depends on the name of the handle function you choose.

> 💡 Just pick any `id`s you want for the lights. `"1"`, `"2"`, `"3"`,… is probably the easiest.

> ✨ Your app should now work as it did before, but the state is now shared between the components.

### Counting the Lights

- The count of turned on lights on the home page (`/`) is still not working.
- Create a value derived from the state and use it to display the count of turned on lights on the home page (`/`).

> 💡 To derive a value from state you do **not** need state or effects.

### Creating the Quick Actions

- The buttons on the `/actions` page are also not yet functional.
- Create two handler functions to toggle all lights on and off.
- Pass them down to the `QuickActions` component and use them to toggle all lights on and off.
- Bonus: Make the `Button`s `disabled` if their action would not do anything:
  - "Turn all lights off" should be disabled if all lights are off
  - "Turn all lights on" should be disabled if all lights are on

### Bonus: Dimming the Background

- The `Layout` component accepts a `isDimmed` prop that can be used to dim the background.
- Set the `isDimmed` prop to `true` if all lights are turned off. 🌚

## Notes

- You'll have to touch the files inside `components` and `pages`. All the styles are already done, so you can focus on the functional parts.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
