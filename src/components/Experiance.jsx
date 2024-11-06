import { BoxGeometry, PlaneGeometry } from "three"; 

export const Experiance=()=>{
   
    return(
        <>
        <mesh>
        <meshNormalMaterial />
                <boxGeometry args={[1, 1, 1]} /> 
        </mesh>
        
        </>
    )
}