import React, {useState} from 'react'

function Character({name, planet}) { // ❗ Add the props
  
  // ❗ Create a state to hold whether the homeworld is rendering or not
    
  const [toggle, setToggle] = useState(false)
    
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  return (

    // Use the same markup with the same attributes as in the mock 

    <div className = 'character-card' onClick ={() => setToggle(!toggle)} >
      <h3 className = 'character-name'>{name}</h3>
      {toggle ? <p>
       Planet: 
        <span className='character-planet'> {planet}</span>
      </p> : null}
      
    </div>
  )
}

export default Character
