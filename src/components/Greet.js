import react from'react'
//function Greet(){
    //return <h1>Hello Soujanya</h1>
//}
export const Greet = (props) =>{
    console.log(props)
return (<div>
    <h1>Hello {props.name} {props.heroname} </h1>

{props.children}
</div>
)

} 
export default Greet