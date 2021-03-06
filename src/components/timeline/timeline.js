// @flow

import React from "react";
import "./timeline.css";
import * as R from "ramda";
import TimeLineEvent from "../../models/time-line-event";
import { Link } from "react-router-dom";
import BottomCurveLeft from "../bottom-curve-left";
import BottomCurveRight from "../bottom-curve-right";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowAltCircleLeft, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import TopCurve from "../top-curve";

const getColor = R.curry((startYear, endYear, year) => {
    const endColor = parseInt("FF", 16);
    const yearCount = (endYear - startYear);
    const ratio = yearCount / endColor;
    const decimalColor = Math.floor((year - startYear) / ratio);
    const redHex = (`00${ decimalColor.toString(16) }`).slice(-2);
    const greenHex = "00";
    const blueHex = "66";
    return `#${ redHex }${ greenHex }${ blueHex }`;
});


const mapYears = (startYear, endYear, events) => {
    const yearColor = getColor(startYear, endYear);
    const years = [];
    const timeLineEvents = Object.values(events).sort((a, b) => (a.year - b.year));
    const anchorLookup = timeLineEvents.reduce((acc, event, idx) => ({
        ...acc,
        [event.id]: {
            next: (timeLineEvents[idx + 1] || { id: null }).id,
            previous: (timeLineEvents[idx - 1] || { id: null }).id
        }
    }), {});
    for (let year = startYear; year <= endYear; year += 1) {
        const color = yearColor(year);
        years.push(
            <div
                key={ year }
                className={ "time-line_year" }
                style={ { background: color } }>
                <span>
                    { year < 0 ? `${ year * -1 } BC` : year < 1000 ? `${ year } AD` : year }
                </span>
            </div>
        );
        const eventsThisYear = timeLineEvents.filter(event => event.year === year);
        eventsThisYear.forEach(event => {
            years.push(
                <article id={ event.id } key={ event.id } className={ "time-line_event-article" }>
                    <div className={ "time-line_article-header" }>
                        <TopCurve strokeWidth={ 40 } color={ color }/>
                        <Link to={ `/articles/${ event.id }` } className={ "time-line_event-avatar-link" }>
                            <div className={ "time-line_event-avatar" }>
                                <div className={ "time-line_front" }
                                     style={ { backgroundImage: `url(${ event.image })` } }>
                                </div>
                                <div className={ "time-line_back" } style={ { backgroundColor: "red" } }>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={ "time-line_event-container" } style={ { borderColor: color } }>
                        <Link to={ `/articles/${ event.id }` }
                              className={ "time-line_event-link" }
                              style={ { borderColor: color } }>
                            <h3 className={ "time-line_event-title" }>{ event.title }</h3>
                            <p className={ "time-line_event-summary" }>{ event.summary }</p>
                        </Link>
                    </div>
                    <div className={ "time-line_article-footer" }>
                        <BottomCurveLeft height={ "8rem" } width={ "8rem" } color={ color }/>
                        <BottomCurveRight height={ "8rem" } width={ "8rem" } color={ color }/>
                    </div>
                    <div className={ "time-line_nav" }>
                        { anchorLookup[event.id].previous &&
                        (
                            <a className={ "time-line_previous-event" }
                               href={ `#${ anchorLookup[event.id].previous }` }>
                                <FontAwesomeIcon style={ { color: color } } icon={ faArrowAltCircleLeft }/>
                            </a>
                        )
                        }
                        { anchorLookup[event.id].next &&
                        (
                            <a className={ "time-line_next-event" } href={ `#${ anchorLookup[event.id].next }` }>
                                <FontAwesomeIcon style={ { color: color } } icon={ faArrowAltCircleRight }/>

                            </a>
                        )
                        }
                    </div>
                </article>
            );
        });
    }

    return years;
};

type PropsType = { startYear: number, endYear: number, events: { [string]: TimeLineEvent } };
export const Timeline = ({ startYear, endYear, events }: PropsType): React$Element<any> => {


    return (
        <div className={ "time-line_container" }>
            <div className={ "time-line" }>
                { mapYears(startYear, endYear, events) }
            </div>
        </div>
    );
};