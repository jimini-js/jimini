import React from 'react';
import { Panel } from 'react-bootstrap';

class Footer extends React.Component {

  render(){

    const panelInstance = (
      <Panel>
        <footer className='footer'>
          <div className="col-md-12">
            <div className="footer-container">
              <span className="footer-elements">© Jimini 2016&nbsp;</span>
              <span className="footer-elements">Daisy Tsao&nbsp;</span>
              <span className="footer-elements">Carl Bernardo&nbsp;</span>
              <span className="footer-elements">Shin Adachi&nbsp;</span>
              <span className="footer-elements">Charles Meredith&nbsp;</span>
            </div>
          </div>
        </footer>
      </Panel>
    );

    return (
      <div>{panelInstance}</div>
    )
  }
}

export default Footer;
