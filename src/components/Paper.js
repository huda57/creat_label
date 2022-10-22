import Col from './Col'

export default function Paper (props){
    return(
        <page>
        {Col(1,props)}
        {Col(2,props)}
        {Col(3,props)}
        {Col(4,props)}
        {Col(5,props)}
        {Col(6,props)}
        </page>
    )  
}
