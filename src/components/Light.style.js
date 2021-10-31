import styled, { keyframes } from "styled-components"

//Change brightness to turn on or off the lights
const Light_on = keyframes`
    from { filter: brightness(0.3);}
    to { filter: brightness(0.99);}
`;
const Light_off = keyframes`
    from { filter: brightness(0.99);}
    to { filter: brightness(0.3);}
`;

//style and create our green and red colors
const Light = styled.div`
  width: 100px ;
  height: 100px ;
  position: absolute;

  top:  ${(props) => props.bottom}px;
  left: ${(props) => props.right}px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  box-shadow:  rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;

  animation : ${props => props.state === 'On' ? Light_on : Light_off};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export default Light
