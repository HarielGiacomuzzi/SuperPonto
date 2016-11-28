// Default layout template
import React from 'react';
import ReactDOM from 'react-dom'
import FillBar from './fillBar.jsx';
import Table from './table.jsx';
import Button from './button.jsx';

var Default = React.createClass({

  render: function() {

    return(
      <html>
      <head>

        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <title>Super Ponto</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>

      </head>
      <body style={{fontFamily: ['Varela Round', 'sans-serif']}}>
        <div id="app">
            <FillBar placeholder='Data'/>
            <FillBar placeholder='Hora'/>
            <Button/>
            <Table />
	    </div>
      </body>
      </html>
    );
  }
});

module.exports = Default;
