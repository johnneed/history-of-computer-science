// @flow

import React from "react";

type PropsType = { height: string, width: string, color: string };
export const BottomCurveLeft = ({ height, width, color }: PropsType): React$Element<any> => (
    <div className={ "bottom-curve" } style={ { width: width, height: height } }>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="80" height="80" viewBox="0 0 80 80">
            <circle
                cy="0"
                cx="0"
                r="60"
                fill="none"
                stroke={ color }
                stroke-width="40"/>
        </svg>
    </div>
);