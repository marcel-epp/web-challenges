import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

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
  {
    id: 4,
    room: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    room: "Garage",
    isOn: false,
  },
  {
    id: 6,
    room: "Porch",
    isOn: false,
  },
  {
    id: 7,
    room: "Garden",
    isOn: false,
  },
  {
    id: 8,
    room: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(initialLights);

  function handleToggle(roomId) {
    setIsOn(
      isOn.map((light) =>
        light.id === roomId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function turnAllLightsOn() {
    setIsOn(isOn.map((light) => ({ ...light, isOn: true })));
  }

  function turnAllLightsOff() {
    setIsOn(isOn.map((light) => ({ ...light, isOn: false })));
  }

  const lightsThatAreOn = isOn.filter((light) => light.isOn).length;

  //console.log(initialLights);
  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={isOn}
        toggleLight={handleToggle}
        lightsThatAreOn={lightsThatAreOn}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
