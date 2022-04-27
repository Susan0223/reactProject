import React, { Component } from "react";

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      imageVisibility: true,
      backgroundImagePath: require("https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Face_Emoji_large.png?v=1571606037")
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      
    }));
  }

  render() {
    return (
      <button style={{
          width: '500px', height: '500px'
      }}
        onClick={this.handleClick}>
        <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Face_Emoji_large.png?v=1571606037"></img>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Foo;