import React from 'react';

const IconSelectedHome = props => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55">
      <defs>
        <filter id="Path_59" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Symbol_25_1" data-name="Symbol 25 – 1" transform="translate(-159 -609)">
        <g transform="matrix(1, 0, 0, 1, 159, 609)" filter="url(#Path_59)">
          <path id="Path_59-2" data-name="Path 59" d="M10,0H27A10,10,0,0,1,37,10V27A10,10,0,0,1,27,37H10A10,10,0,0,1,0,27V10A10,10,0,0,1,10,0Z" transform="translate(9 9)" fill={props.rectfill}/>
        </g>
        <path id="Path_49" data-name="Path 49" d="M-783.889,1213h-5.975v-6.8a3.444,3.444,0,0,0-3.44-3.44,3.444,3.444,0,0,0-3.44,3.44v6.8h-5.613v-14.122H-806L-793.123,1186l12.877,12.877h-3.643V1213Z" transform="translate(980.001 -563)" fill={props.housfill}/>
      </g>
    </svg>
  )
};

export default IconSelectedHome;
        
