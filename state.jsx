import React from 'react';

class app extends React.Component {
    constructor(){
        super();

        this.state=
        {
            westbengal:"kolkata",
            orissa:"bhubonewar"
        }
    }
    render(){
        return(
          <div>
              <h1>{this.state.westbengal}</h1>
              <h2>{this.state.orissa}</h2>
          </div>
        );
    }


    }

export default  app; 