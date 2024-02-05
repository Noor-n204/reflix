import * as React from "react";
import Users from '../Users/Users'
import '../Landing/Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
        <h1 className="h1">WHO'S WATCHING ?</h1>
        <Users first={'Mona'} second={'jasmyne'} third={'Aura'} fourth={'Tina'}/>
    </div>
  );
}


export default Landing;