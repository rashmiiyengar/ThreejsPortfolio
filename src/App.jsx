import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls,Html } from '@react-three/drei'
import { Experiance } from './components/Experiance'
import { Interface } from './components/Interface'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping={0.1}>
      <Scroll>
      <Experiance/>
      </Scroll>
      <Scroll html>
      <Interface/>
          
      </Scroll>
      </ScrollControls>
    </Canvas>
  </>
  )
}

export default App
