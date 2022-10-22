import React from 'react'

import Labeinput from './Labelinput'


export default function Addlabel(props) {
     /*add input */
     const [things, setThings] = React.useState([])
    
     function addItem() {
         
         const newThingText = things.length + 1
         setThings(prevState => [...prevState, newThingText])
     }
     
     const thingsElements = things.map(thing =>
             
         <Labeinput  change={props.handlechange} key={thing} numb={thing} />
          
          )
          
     /*end of add input */

return(
    <div className="input-total">      
    {thingsElements }
   
   {things.length <30 &&  <div className="button-add"> <button onClick={addItem}>Ajouter Étiquette</button> </div> }
   </div>


)
     

}