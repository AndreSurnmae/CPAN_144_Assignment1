import React, { useState } from "react";
import GreetUser from "./GreetUser";

function ToggleMod() {
    const [mode, setMode] = useState(false);

    const lightMode = () => {
        setMode(false);
      };
    
      const darkMode = () => {
        setMode(true);
      };
      
      return (
        <div>
          {mode ? (
            <div className="darkMode">
              <button onClick={lightMode}>Light Mode</button>
              <GreetUser/>
            </div>
          ) : (
            <div className="lightMode">
              <button onClick={darkMode}>Dark Mode</button>
              <GreetUser/>
            </div>
          )}
        </div>
      ); 
}

export default ToggleMod;