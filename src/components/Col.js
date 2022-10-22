import Flag from './Flag'

export default function   Col(i,props) {
    return(
            <div id={"col-"+i}> 
                   {Flag(1+5*(i-1),props)} 
                   {Flag(2+5*(i-1),props)} 
                   {Flag(3+5*(i-1),props)} 
                   {Flag(4+5*(i-1),props)}
                    {Flag(5+5*(i-1),props)}
                          
            </div>
            )
}