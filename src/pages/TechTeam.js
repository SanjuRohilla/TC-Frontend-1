import React from "react";
import TechTeamSec from "../sections/TechTeamSec";
import SpheresBackground from "./SpheresBackground";
const TechTeam = ()=>{
    return(
        // <TechTeamSec/>
        <div className='Homescrolled' style={{ position: 'relative' ,zIndex: '-5' ,opacity: "0.3" , background: 'transparent'}}>
      {/* Render Spheres in the background */}
      {/* <SpheresBackground /> */}
      <div style={{ position: 'relative' ,opacity: '1' ,zIndex: '5', background: 'black'}}> {/* Adjust z-index to be above the spheres */}
        <TechTeamSec />
      </div>
      
    </div>
    )
}

export default TechTeam;