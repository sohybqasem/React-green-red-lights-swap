import Light from './Light.style'
import styled from "styled-components"

//Frame to hold the lights 
const Frame = styled.div`
  background: #222;
  margin-left: 100px;
  margin-right: 100px;
  float: ${(props) => props.side};
  width: 170px;
  height: 400px;
  border-radius: 40px;
  position: relative;
  border: solid 5px #333;
`;

//function ana parameeters to light and positon the lights
const Lights = ({light_set_one}) => { 
    return (
        <div>
         <Frame side= 'right'>
         <Light backgroundColor= "red"
                         bottom="270"
                         right="35"
                        state={light_set_one === "On" ?  "Off" : "On" }  
            />
            <Light backgroundColor= "green"
                         bottom="20"
                         right="35"
                        state={light_set_one} />
        </Frame>


        <Frame side='left'>
        <Light backgroundColor= "red"
                        bottom="270"
                        right="35"
                        state={light_set_one}   
            />
        <Light backgroundColor= "green"
                         bottom="20"
                         right="35"
                        state={light_set_one === "On" ?  "Off" : "On" } />
        </Frame>
        </div>
    )
}

export default Lights
