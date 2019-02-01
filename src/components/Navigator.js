import React from 'react';
import IconUnselectedLoads from '../icons/IconUnselectedLoads';
import IconSelectedHome from '../icons/IconSelectedHome';
import IconUnselectedData from '../icons/IconUnselectedData';

const darkfill = {
    rectanglefill: "#fff",
    housefill: "#262626",
}

const lightfill = {
    rectanglefill: "#262626",
    housefill: "#fff",
}

class Navigator extends React.Component {
    render() {
        let iconfill = this.props.fill;
        let fillType = (iconfill === "dark") ? darkfill : lightfill;
        return (
            <div {...this.props}>
                <IconUnselectedLoads circfill={fillType.housfill}/>
                <IconSelectedHome rectfill={fillType.rectanglefill} housfill={fillType.housefill}/>
                <IconUnselectedData barfill={fillType.rectanglefill}/>
            </div>
        )
    }
};

export default Navigator;