import React from "react";

const name="koushik bose";
//const element=<h1>hello,{name}</h1>;

function formatname(user){
    return user.firstname+''+user.lastname;
}
const user={
    firstname:'koushik',
    lastname:'bose'
};
const element=(
    <h1>hello,{formatname(user)}</h1>
)
const image=<img src ={user.avatarUrl}></img>
//jsx is an expression too
//we can user jsx inside if, else,or for loop
function getGreeting(user){
    if(user){
        return  <h1>hello,{formatname(user)}</h1>
    }
    else{
    return <h1>hello stranger!!!!</h1>
}
}
// jsx child element
const element=(
    <div>
        <h1>Hello React.js!!!!</h1>
        <h2>Good to see you here!!!!</h2>
    </div>
);
//JSX Prevents Injection Attacks
const title=response.potentiallyMaliciousInput;
//this is safe
const element=<h1>{title}</h1>
//JSX Represents Objects
const element=(
<h1 classname="greeting">
    Hello,world!!!!
</h1>
);
const element=React.createElement(
    'h1',
    {classname:'greeting'},
    'hello,world!!!!'
);
//React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
// Note: this structure is simplified
const element={
type:'h1',
props:{
     classname:'greeting',
     children:'hello world!!!!'

}

};
const element=<h1>hello world!!!!</h1>
ReactDom.render(element,document.getElementById('root'))


