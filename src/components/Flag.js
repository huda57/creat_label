
export default function Flag(j,props) {

  
  return(
      <div className="flag" id={"flag-"+j}>
         <div  id={"side-up-"+j} className="side-up" >{props.data[j]}<br></br>{props.data[j+30]}</div>
         <div  id={"side-down-"+j} className="side-down">{props.data[j+60]}</div>
    </div>
    )  
}