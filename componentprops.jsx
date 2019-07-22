import react from "React";
//olad javascript function
function welcome(props){
    return <h1>hello,{props.name}</h1>
}
//es6 class
class Welcome extends React.Component{
    render(){
        return(
<div>
    <h1>hello,{this.props.name}</h1>
</div>
        )
    }
} 