import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react'
console.log(travelPlansData)

function TravelList() {
  const [ travel, setTravel ] = useState(travelPlansData)

  const clone = travel.slice(0)

  const handleDeleteTravels =(index) => {
    clone.splice(index, 1)
    setTravel(clone)
  }

   

  return (
      <div>
      
     {clone.map((elem, index) => 
      <div key={index} className ="container"> 
        <img src={elem.image} alt="picture" />
       <div className ="textStyle">  
       <h3>{elem.destination} {`(${elem.days} days)`}</h3> 
       <p><i>{elem.description}</i></p>
       <p>{`Price: ${elem.totalCost}€`}</p>
       <button onClick={() => handleDeleteTravels(index)}>Eliminar</button>  
       </div>
       <p>{elem.totalCost>= 1500 && "Premium"}</p>
       <p>{elem.totalCost<= 350 && "Gran oferta"}</p>
       <p>{elem.parts.some(elem => elem.name ==="All-Inclusive Package") && "Todo incluido" }</p>
       
       
      </div>

      
    )}
    
    
 
    </div>
 )

}

export default TravelList