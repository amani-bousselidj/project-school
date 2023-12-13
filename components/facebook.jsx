import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    auth: false,
    name: '',
    picture: ''
  };

  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url
      });
    }
  };

  componentClicked = () => {
    console.log('Facebook btn clicked');
  };

  render() {
    return (
      <>
        <FacebookLogin
          appId="1936549923407306"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      </>
    );
  }
}
