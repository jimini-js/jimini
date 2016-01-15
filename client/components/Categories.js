import React from 'react';
import $ from 'jquery';

class Categories extends React.Component {
  constructor(){
    super();
    this.logCategory = this.logCategory.bind(this);
  }

  logCategory(ref){
    let category = ref.target.textContent ? ref.target.textContent : ref.target.alt

    console.log("CATEGORY:", category);
  }

  render(){
    return(
      <div className='btn-group-vertical' role='group' aria-label='...'>
        <div className="btn-group btn-group-justified" aria-label="...">
          <div className="btn-group" role="group" ref='Books' onClick={this.logCategory}>
            <button type='button' className="btn btn-default" onClick={this.props.getCategoryRef}>
              <div>Books
              <img src="../assets/books.png" width="50" height="50" alt='Books' />
              </div>
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default" ref='Clothing' onClick={this.props.getCategoryRef} onClick={this.logCategory}>
              <div>Clothing</div>
              <img src="../assets/clothing.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default" ref='Electronics' onClick={this.props.getCategoryRef} onClick={this.logCategory}>
              <div>Electronics</div>
              <img src="../assets/electronics.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Handmade</div>
              <img src="../assets/handmade.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Health</div>
              <img src="../assets/health.png" width="50" height="50" />
            </button>
          </div>
        </div>
        <div className="btn-group btn-group-justified" aria-label="...">
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Home</div>
              <img src="../assets/home.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Money</div>
              <img src="../assets/money.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Outdoor</div>
              <img src="../assets/outdoor.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Toys</div>
              <img src="../assets/toys.png" width="50" height="50" />
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type='button' className="btn btn-default">
              <div>Movies / Video Games</div>
              <img src="../assets/videosgames.png" width="50" height="50" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;
