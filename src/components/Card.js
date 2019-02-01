import React from 'react';
// import Icon from '../icons/Icon';

const dataStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 344,
    height: 266,
    margin: '6px',
}

const loadStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#158585',
    color: 'white',
    borderRadius: 10,
    width: 344,
    height: 266,
    margin: '6px',
}

const Card = props => {
    let cardstyle = props.cardstyle;

    if (cardstyle === 'data') {
        cardstyle = dataStyle;
    } else {
        cardstyle = loadStyle;
    }
    return (
        <div>
            <div style={cardstyle} onClick={props.onAddChild}>
                <p
                style={{
                    fontWeight: 700,
                    fontSize: 11
                    }}
                >
                add
                </p>
                <p
                style={{
                    fontSize: 11
                }}
                >
                .item
                </p>
            </div>
        </div>
        )
}

export default Card