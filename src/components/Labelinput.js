import React from 'react'
export default function Labeinput(props) {
  
    return (
      
          <div className="labelBlock">
         <legend > <h2 className="legend-label">Étiquette # {props.numb}</h2>
            <input 
            id={props.numb}
            type="text"
            onChange={props.change}

                placeholder="Nom de la liaison"
                name="linkname"

                />
                <br></br>
            <input 
             id={props.numb+30}
            type="text"
            placeholder="Extrémité A"
            name="extremite_a"
            onChange={props.change}
            /><br></br>
            <input 
             id={props.numb+60}
            type="text"
            placeholder="Extrémité B"
            name="extremite_b"
            onChange={props.change}
            />
            </legend>
          </div>
      
    )
  }
  
  