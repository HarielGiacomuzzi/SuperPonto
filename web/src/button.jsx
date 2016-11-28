import React from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _onChange() {
  }
    
  render() {
    return (

<div className="btn-group">
  <button type="button" className="btn btn-danger">{this.props.buttonText}</button>
</div>

    );
  }
}
