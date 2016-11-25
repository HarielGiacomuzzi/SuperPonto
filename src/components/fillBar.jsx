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
	      			<span class="input-group-btn">
	        			<button class="btn btn-default" type="button">Go!</button>
	      			</span>
	      		<input type="text" class="form-control" placeholder="Search for..." />
			</div>
	    	</div>
	</div>

    );
  }
}
