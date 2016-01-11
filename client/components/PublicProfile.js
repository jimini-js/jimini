import React from 'react';

class PublicProfile extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Public Profile Page</h1>
        <p>{this.props.params.username}</p>
      </div>
    )
  }
}

export default PublicProfile;
