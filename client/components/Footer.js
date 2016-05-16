import React from 'react';

class Footer extends React.Component {

  render(){
    return (
      <footer className="footer">
        <div className="col-md-12">
          <div className="footer-container">
            <span className="footer-elements">&copy; Jimini 2016&nbsp;</span>
              <a href="https://github.com/jimini-js/jimini" target="_blank"><i className="fa fa-github"></i></a>
            <span className="footer-elements">Daisy Tsao&nbsp;</span>
              <a href="https://github.com/madcurie" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
              <a href="https://www.linkedin.com/in/daisytsao" target="_blank"><i className="fa fa-linkedin"></i></a>
            <span className="footer-elements">Carl Bernardo&nbsp;</span>
              <a href="https://github.com/carlbernardo" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
              <a href="https://www.linkedin.com/in/carlbernardo" target="_blank"><i className="fa fa-linkedin"></i></a>
            <span className="footer-elements">Shin Adachi&nbsp;</span>
              <a href="https://github.com/shin064" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
              <a href="http://www.shinadachi.com" target="_blank"><i className="fa fa-linkedin"></i></a>
            <span className="footer-elements">Charles Meredith&nbsp;</span>
              <a href="https://github.com/chas3m" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
              <a href="https://www.linkedin.com/in/charlesmeredith1" target="_blank"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
