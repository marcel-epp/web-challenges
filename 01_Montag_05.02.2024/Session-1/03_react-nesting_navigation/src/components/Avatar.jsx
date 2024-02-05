import Image from "../utils/Image";
import avatar from "../img/logo.jpg";

function Avatar({ children }) {
  return (
    <>
      {children}
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image src={avatar} alt="avatar" />
      </button>
    </>
  );
}

export default Avatar;
