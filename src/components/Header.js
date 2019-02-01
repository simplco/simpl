import React from 'react';

const Header = () => {
        return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '15px',
            alignItems: 'center'
            }}>
            <h3
            style={{
                color: 'white',
                margin: '0px',
                fontSize: '38px'
                }}>my simpl</h3>
            <img
            style={{
                width: '27px',
                height: '27px',
            }} 
            src={require('../pic@2x.png')} 
            alt="pic"></img>
        </div>)
    }

export default Header;