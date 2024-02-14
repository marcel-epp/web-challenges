import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root {
  --primary-color: #d5d1b9;
  --secondary-color: #242C31;
}
  body {
    color: var(--secondary-color);
    max-width: 600px;
    font-family: ${lora.style.fontFamily};
    margin: 45px auto;
  }
`;
