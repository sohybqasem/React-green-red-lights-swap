import './App.css';
import Lights from './components/Lights'
import Swapbtn from './components/Button.style'
import { useState } from "react"
import styled from "styled-components"

function App() {
  const Posbtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
`;

  //declare a swich to turn light on and off
      const [tasks, setTasks] = useState(
            {
                on_off_light: "On"
            }          
     )

//activate this function when button clicked(which lights)
    const swap = () => {
      setTasks(tasks.on_off_light === "On" ?  {on_off_light:"Off"} : {on_off_light: "On"} )
         }

  return (
    <body >

    <Lights light_set_one={tasks.on_off_light}/>
    <Posbtn>
    <Swapbtn onClick={() => swap()}>Swap Lights</Swapbtn>
    </Posbtn>

    <style>{'html {  background-image: linear-gradient(to right top, 	#FFB6C1, white, 	#FFB6C1, 	#8A2BE2, 	white); width: 100%;height: 100%; }'}</style>
    
    </body>   
  );
}

export default App;
