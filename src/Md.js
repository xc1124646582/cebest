import React, { Component } from 'react';

class Md extends Component {
	constructor(){
		super();
		this.state={
			str:0
		}
	};
  render() {
    return (
      <div>
<p>md组建</p>
<p>{this.props.abc}</p>
      </div>
    );
  }
}

export default Md;