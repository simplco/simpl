import React from 'react';
import Header from '../components/Header';
// import CardList from './CardList';
import Navigator from '../components/Navigator';
import Graph from '../components/Graph';

const layoutStyle = {
    position: 'relative',
    height: '100vh',
}

const navStyle = {
    width: '375px',
    height: '62px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0px',
}
class Layout extends React.Component {
    onRouteChange = () => {
        <div>
            
        </div>
    }
    render() {
        return (
            <div style={layoutStyle}>
                <Header />
                {/* <CardList /> */}
                <Graph />
                <Navigator style={navStyle} fill="light"/>
            </div>
        );
    }
}

export default Layout;