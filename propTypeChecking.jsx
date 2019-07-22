import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component{
    render(){
        return (
          <div>
              <h1>"hello React.js!!!!"{this.props.name}</h1>
          </div>

        );
 
    }
}
Greeting.propType={
    name:PropTypes.number

};
export default Greeting;