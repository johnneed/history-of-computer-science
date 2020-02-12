// @flow

import React, { useEffect } from "react";
import "./timeline.css";
import timelineAnimation from "../../libs/timeline-animation";

export const Timeline = () => {
    useEffect(() => {
        const start = new Date("1900/01/01");
        const end = new Date();
        timelineAnimation(start, end);
    }, []);

    return (<div className={ "chart" }/>);
};