/*const element=<h1>Hello,World!!!!</h1>
ReactDOM.Render(element,document.getElementById("root"));*/
import react from "React";

function tick(){
    const element=(
     <div>
        <h1>hello world!!!!</h1>
        <h2>it is {DateTime.Now().toLocaleDateString()}</h2>
     </div>
    );
    ReactDOM.render(element,document.getElementById("root"));
    }
    setInterval(tick,1000);
    
