import React, {
    Component
}

from 'react';
import logo from './logo.svg';
import './App.css';
import FillBar from './fillBar.jsx'
import Table from './table.jsx'
import Button from './button.jsx'
import MainNav from './mainNav.jsx'

class App extends Component {
    render() {
        return ( 
            <div className="App">
                <div className="App-header">
                    <div>
                        <MainNav/>
                    </div>
                    <h2>
                        Ponto App
                    </h2>
                </div>
                <div>
                    <FillBar placeholder="Data"/>
                    <FillBar placeholder="Hora"/>
                    <Button buttonText="Send"/>
                    <Table />
                </div>
            </div>
        );
    }
}
export default App;