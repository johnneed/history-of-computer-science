// @flow

import React from "react";

type PropsType = { height: string, width: string, color: string, };
export const BottomCurveRight = ({ height, width, color }: PropsType): React$Element<any> => (
    <div className={ "bottom-curve" } style={ { width: width, height: height } }>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="80" height="80" viewBox="0 0 80 80">
            <path d="M 20 0 A 60 60 0 0 0 80 60"
                  fill="none"
                  stroke={ color }
                  stroke-width="40">
            </path>
        </svg>
    </div>
);