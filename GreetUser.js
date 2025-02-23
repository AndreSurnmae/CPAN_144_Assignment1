import React, { useState } from 'react';

function GreetUser() {
    const [user, setUser] = useState({name: '', age: ''})

    const updateName = (newName) => {
        setUser((prevUser) => ({
          ...prevUser,
          name: newName,
        }));
      };

      const updateAge = (newAge) => {
        setUser((prevUser) => ({
          ...prevUser,
          age: newAge,
        }));
      };

      const messageContent = () => {
        if (user.name != '' && user.age != '') {
            return (
                <>
                <p>Hello, {user.name}!</p>
                <p>Your age is {user.age}!</p>
                </>
            )
        }
        return null;
      }

      return (
        <div className='mainContent'>
            <h4>User Input</h4>
          <input 
            type="text" 
            value={user.name} 
            className='leftMain'
            onChange={(e) => updateName(e.target.value)} 
            placeholder="Enter your name" 
          />
            <input 
            type="text" 
            value={user.age}
            className='rightMain' 
            onChange={(e) => updateAge(e.target.value)} 
            placeholder="Enter your age" 
          />
          {messageContent()}
        </div>
      ); 
}

export default GreetUser;