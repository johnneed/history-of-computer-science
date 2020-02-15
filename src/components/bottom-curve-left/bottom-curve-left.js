// @flow

import React from "react";

type PropsType = { height: string, width: string, background: string, fill: string };
export const BottomCurveLeft = ({ height, width, background, fill }: PropsType): React$Element<any> => (
    <div className={ "bottom-curve" } style={ { width: width, height: height } }>
        <svg xmlns="http://www.w3.org/2000/svg" height={ "100%" } width={ "100%" }
             viewBox="0 0 100 100">
            <circle cx="0" cy="0" r="100" fill={ fill || "#AAA" }/>
            <circle cx="0" cy="0" r="50" fill={ background || "white" }/>
        </svg>
    </div>
);