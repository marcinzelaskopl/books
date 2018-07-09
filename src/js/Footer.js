import React, { Component } from 'react';
import '../App.css';
import ReactLogo from '../images/react.png';
import Linkedin from '../images/linkedin-logo.png';
import Github from '../images/github-logo.png';


class Footer extends Component{
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 footer'}>
                        <p>Created in React.js</p>
                        <img src={ReactLogo} alt={'React.js Logo'}/>
                        <p>Catch me on some social media</p>
                        <a target={'_blank'} href={'https://www.linkedin.com/in/marcinzelaskov'}><img className={'social'} src={Linkedin} alt={'Linkedin logo'}/></a>
                        <a target={'_blank'} href={'https://github.com/marcinzelaskopl'}><img className={'social'} src={Github} alt={'Github Logo'}/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer