// @flow

import React from "react";
import "./top-curve.css";

type PropsType = { width: number, strokeWidth: string, color: string };
export const TopCurve = ({ width = 200, color = "#AAA", strokeWidth = 10 }: PropsType): React$Element<any> => (
    <div className={ "top-curve" }>
        <svg xmlns="http://www.w3.org/2000/svg" height={ width / 2 } width={ width }>
            <path
                d={ `M ${ strokeWidth / 2 } ${ width / 2 } A ${ (width / 2) - strokeWidth } ${ (width / 2) - strokeWidth } 0 0 1 ${ width - (strokeWidth / 2) } ${ (width / 2) }` }
                fill="none"
                stroke={ color }
                strokeWidth={ strokeWidth }
            />
        </svg>
    </div>
);