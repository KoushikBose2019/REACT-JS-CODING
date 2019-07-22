import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data1: 'Initial data...',
         data2:'submit'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data1:e.target.value});
      this.setState({data2:e.target.value});
   }
   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data1} 
               onChange = {this.updateState} />
               <input type="submit" value={this.state.data2} onChange={this.updateState}/>
            <h4>{this.state.data1}</h4>
            <h6>{this.state.data2}</h6>

         </div>
      );
   }
}
export default App;



