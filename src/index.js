import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import * as serviceWorker from "./serviceWorker";
import * as eventsData from "./data/events.json";
import * as storiesData from "./data/stories";
import TimeLineEvent from "./models/time-line-event";
import moment from "moment";
import * as R from "ramda";
import Story from "./models/story";
import "normalize.css";
import "./index.css";

const startYear = -300;
const endYear = moment(new Date()).year();

const events = R.mapObjIndexed((event, id) => TimeLineEvent.create(event, id))(eventsData.default);
const stories = R.mapObjIndexed((event, id) => Story.create(event, id))(storiesData.default);
ReactDOM.render(
    <App
        events={ events }
        stories={ stories }
        startYear={ startYear }
        endYear={ endYear }
    />,
    window.document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
