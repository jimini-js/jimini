import React from 'react';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>Jimini</h1>
        <div className='container'>
          {this.props.children}
        </div>
        <h1>Footer Component</h1>
      </div>
    )
  }
}

export default Main;
