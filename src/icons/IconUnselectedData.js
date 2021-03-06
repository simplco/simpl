import React from 'react';

const IconUnselectedData = props => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55">
                <defs>
                    <filter id="Path_60" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
                    <feOffset input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="data_icon_unselected" data-name="data icon unselected" transform="translate(-261 -609)">
                    <g id="Group_19" data-name="Group 19" transform="translate(186 -3)" opacity="0.85">
                    <g transform="matrix(1, 0, 0, 1, 75, 612)" filter="url(#Path_60)">
                        <path id="Path_60-2" data-name="Path 60" d="M10,0H27A10,10,0,0,1,37,10V27A10,10,0,0,1,27,37H10A10,10,0,0,1,0,27V10A10,10,0,0,1,10,0Z" transform="translate(9 9)" fill="none"/>
                    </g>
                    <path id="Path_58" data-name="Path 58" d="M4,0A4,4,0,0,1,8,4V17H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z" transform="translate(89 636)" fill={props.barfill} opacity="0.6"/>
                    <path id="Path_57" data-name="Path 57" d="M4,0A4,4,0,0,1,8,4V27H0V4A4,4,0,0,1,4,0Z" transform="translate(98.5 626)" fill={props.barfill} opacity="0.8"/>
                    <path id="Path_56" data-name="Path 56" d="M4,0A4,4,0,0,1,8,4V19a4,4,0,0,1-4,4H0V4A4,4,0,0,1,4,0Z" transform="translate(108 630)" fill={props.barfill}/>
                    </g>
                </g>
            </svg>
        )
};

export default IconUnselectedData;
