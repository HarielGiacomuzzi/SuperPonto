import React from 'react';

export default class FillBar extends React.Component {

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

	<div className="row">
  		<div className="col-lg-6">
    			<div className="input-group">
	      		<input type="text" className="form-control" placeholder={this.props.placeholder} />
			</div>
	    	</div>
	</div>

    );
  }
}
