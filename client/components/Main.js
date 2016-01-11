import React from 'react';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>Jimini</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
