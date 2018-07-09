import React, { Component } from 'react';
import '../App.css';

class Inner extends Component{
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 inner'}>
                        <h2>I love books, like seriously, how can You live without them?!</h2>
                        <h3>Especially fantasy genre!</h3>
                        <h4>So here is my list of my favourite books!</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inner