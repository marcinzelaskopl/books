import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 main'}>
                        <h1>My favourite books of all time</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main