import React from 'react';

const bgBarStyle = {
    backgroundColor: '#B8C4BB0D',
    borderRadius: '10px',
    width: '19px',
    height: '282px',
};

const dataBarStyle = {
    width: '19px',
    height: '100px',
    borderRadius: '10px',
    backgroundColor: '#262626',
    position: 'absolute',
    bottom: '22px'
};

const dataLabelStyle = {

};

const graphLabelStyle = {
    fontSize: '11px',
};

const datacontainerstyle = {
    overflow: 'scroll',
    width: '375px',
    height: '306px',
    position: 'absolute',
    bottom: '62px'
}

const filterstyle = {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '375px',
    height: '60px',
    borderRadius: '25px 0px 0px 0px',
    fontSize: '11px',
    position: 'absolute',
    bottom: '368px'
}

const filterlabelstyle = {
}

const times = [
    '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
];

const days = [
    'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
]

const Bar = props => {
    let data = '100';
    let time = props.time;
    
    return (
        <div>
            <div style={bgBarStyle}>
                <div style={dataBarStyle}></div>
            </div>
            <p style={graphLabelStyle}>{time}</p>
        </div>
    )
}

const Data = props =>{
    
    return (
        <div style={{
            backgroundColor: 'white',
            width: '1000px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            }}>
                {times.map((time) => 
                    <Bar key={time} time={time} />
                )}
        </div>
    )
}

const Filters = () => {
    return (
        <div style={filterstyle}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}><div style={{fontWeight: '700'}}>osml</div><div>.battery</div></div>
            <div style={filterlabelstyle}>days</div>
            <div style={filterlabelstyle}>wk.s</div>
            <div style={filterlabelstyle}>mo.s</div>
            <div style={filterlabelstyle}>kWh</div>
            <div style={filterlabelstyle}>$$$</div>
        </div>
    )
}

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayLoads: false,
            displayMain: false,
            displayData: true,
        };
    }

    handleRouteChange = route => {
        var currentroute = route;
        switch (currentroute) {
            case "loads":
            this.setState({
                displayLoads: true,
                displayMain: false,
                displayData: false,
            });
            break;

            case "main":
            this.setState({
                displayLoads: false,
                displayMain: true,
                displayData: false,
            });
            break;

            case "data":
            this.setState({
                displayLoads: false,
                displayMain: false,
                displayData: true,
            });
            break;
        }
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Filters />
                <div style={datacontainerstyle}>
                    <Data />        
                </div>
            </div>
    
        )
    }
}

export default Graph;