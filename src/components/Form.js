import React from 'react'
import Addlabel from "./AddLabel"
import Paper from './Paper'
import labelData from './labelData'

export default function Form() {

    const [isdisplay, setDisplay] = React.useState(true)
    function show() {
        setDisplay(!isdisplay)
    }
   
    const [data, setData] = React.useState(labelData)

    function updateData(event) {
         const index=event.target.id
         data[index]=event.target.value
      
        setData(data)
        console.log(index)

    }
    return(
        <div className="write">
           <div className="paper" >{!isdisplay && <Paper data={data} />}</div> 
           {isdisplay && <Addlabel handlechange={updateData}  />}
           {isdisplay && <div className="button-print"> <button onClick={show}>Imprimer</button></div>}
        
       

    </div>
        
    )
      
    
  }
  
  