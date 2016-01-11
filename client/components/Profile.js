import React from 'react';

class Profile extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Logged In Profile Page</h1>
      </div>
    )
  }
}

export default Profile;
