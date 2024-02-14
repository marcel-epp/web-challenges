import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const Flexcontainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <Flexcontainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $variant="isBlack" />
    </Flexcontainer>
  );
}
