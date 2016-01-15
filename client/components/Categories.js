import React from 'react';
import $ from 'jquery';

class Categories extends React.Component {
  constructor(){
    super();
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(ref){
    let category = ref.target.textContent ? ref.target.textContent : ref.target.alt

    this.props.getCategoryRef(category);
    console.log("CATEGORY:", category);
  }

  render(){
    return(
      <div className='btn-group-vertical'role='group' aria-label='...'>
        <div className="btn-group btn-group-justified" aria-label="...">
          <div className="btn-group" role="group" ref='Books' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Books</div>
              <img src="../assets/books.png" width="50" height="50" alt='Books' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Clothing' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Clothing</div>
              <img src="../assets/clothing.png" width="50" height="50" alt='Clothing' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Electronics' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Electronics</div>
              <img src="../assets/electronics.png" width="50" height="50" alt='Electronics' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Handmade' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Handmade</div>
              <img src="../assets/handmade.png" width="50" height="50" alt='Handmade' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Health' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Health</div>
              <img src="../assets/health.png" width="50" height="50" alt='Health' />
            </button>
          </div>
        </div>
        <div className="btn-group btn-group-justified" aria-label="...">
          <div className="btn-group" role="group" ref='Home' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Home</div>
              <img src="../assets/home.png" width="50" height="50" alt='Home' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Money' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Money</div>
              <img src="../assets/money.png" width="50" height="50" alt='Money' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Outdoor' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Outdoor</div>
              <img src="../assets/outdoor.png" width="50" height="50" alt='Outdoor' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='Toys' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Toys</div>
              <img src="../assets/toys.png" width="50" height="50" alt='Toys' />
            </button>
          </div>
          <div className="btn-group" role="group" ref='VideosGames' onClick={this.setCategory}>
            <button type='button' className="btn btn-default">
              <div>Movies/Games</div>
              <img src="../assets/videosgames.png" width="50" height="50" alt='Movies/Games' />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;
