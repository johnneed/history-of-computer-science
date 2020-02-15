// @flow

import React from "react";
import "./home.css";
import Timeline from "../timeline";
import type TimeLineEvent from "../../models/time-line-event";

type PropsType = { startYear: number, endYear: number, events: { [string]: TimeLineEvent } };

export const Home = ({ startYear, endYear, events }: PropsType): React$Element<any> => (
    <div className={ "default" }>
        <h1>{ "Home" }</h1>
        <Timeline startYear={ startYear } endYear={ endYear } events={ events }/>
    </div>
);