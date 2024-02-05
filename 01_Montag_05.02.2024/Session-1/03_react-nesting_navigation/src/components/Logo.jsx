import Image from "../utils/Image";
import logo from "../img/logo.jpg";

function Logo({ children }) {
  return (
    <>
      {children}
      <Image src={logo} alt="logo" />
    </>
  );
}

export default Logo;
