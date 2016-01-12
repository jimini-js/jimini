import React from 'react';
import Footer from './Footer.js';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>Jimini</h1>
        <div className='container'>
          {this.props.children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main;
