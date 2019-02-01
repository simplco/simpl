import React from 'react';

const IconUnselectedLoads = props => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55">
                <defs>
                    <filter id="Path_61" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
                    <feOffset input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="loads_light" data-name="loads light" transform="translate(-57 -609)">
                    <g transform="matrix(1, 0, 0, 1, 57, 609)" filter="url(#Path_61)">
                    <path id="Path_61-2" data-name="Path 61" d="M10,0H27A10,10,0,0,1,37,10V27A10,10,0,0,1,27,37H10A10,10,0,0,1,0,27V10A10,10,0,0,1,10,0Z" transform="translate(9 9)" fill="none"/>
                    </g>
                    <g id="Group_32" data-name="Group 32" transform="translate(0 1)">
                    <path id="Path_51" data-name="Path 51" d="M4,0A4,4,0,1,1,0,4,4,4,0,0,1,4,0Z" transform="translate(89 636)" fill={props.circfill} opacity="0.6"/>
                    <path id="Path_55" data-name="Path 55" d="M6.5,0A6.5,6.5,0,1,1,0,6.5,6.5,6.5,0,0,1,6.5,0Z" transform="translate(73 635)" fill={props.circfill} opacity="0.8"/>
                    <path id="Path_54" data-name="Path 54" d="M9.5,0A9.5,9.5,0,1,1,0,9.5,9.5,9.5,0,0,1,9.5,0Z" transform="translate(74.976 624)" fill={props.circfill}/>
                    </g>
                </g>
            </svg>
        )
};

export default IconUnselectedLoads;