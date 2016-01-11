import React from 'react';

class PublicProfile extends React.Component {
  render(){
    return (
      <div>
        <h1>Public Profile Page: {this.props.params.username}</h1>
      </div>
    )
  }
}

export default PublicProfile;
