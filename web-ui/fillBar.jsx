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

	<div class="row">
  		<div class="col-lg-6">
    			<div class="input-group">
	      		<input type="text" class="form-control" placeholder={this.props.placeholder} />
			</div>
	    	</div>
	</div>

    );
  }
}