import React, { Component } from 'react';
import Close from '../images/close.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <a href={'/'}>Coming soon</a>
                <img src={Close} alt={'close'}/>
            </header>
        )
    }
}

export default Header;