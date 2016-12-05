import React from 'react';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data : [] }
  }

  componentDidMount() {
    fetch('localhost:9000/findByMail', {
        method: 'GET',
        headers: {
        'email' : 'as@asd.cmo'
        }
    })
    .then(result=> {
        this.setState({data:result.json()});
        console.log('then : ' + this.state.data)
    });
  }

  componentWillUnmount() {
  }

  _onChange() {
  }

  createTableRows(){
      console.log('date: ' + this.state.data)
      return (
        <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
      )
  }
    
  render() {
    return (

<table className="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Times</th>
    </tr>
  </thead>
  {this.createTableRows()}
</table>

    );
  }
}
