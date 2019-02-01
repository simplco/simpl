import React, {Component} from 'react';
import Card from '../components/Card';

const cardListStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    margin: '9px'

}

class CardList extends Component {
    render() {
        return (
            <div style={cardListStyle}>
                <Card cardstyle='data'/>
                <Card cardstyle='load'/>
            </div>
            )
    }
}

export default CardList
