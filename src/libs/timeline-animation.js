// @flow
import * as d3 from "d3";
import moment from "moment";
import * as R from "ramda";

const getColor = R.curry((start, end, year) => {
    const endColor = parseInt("FF", 16);
    const startYear = moment(start).year();
    const endYear = moment(end).year();
    const yearCount = (endYear - startYear);
    const ratio = yearCount / endColor;
    const decimalColor = Math.floor((year - startYear) / ratio);
    const redHex = (`00${ decimalColor.toString(16) }`).slice(-2);
    const greenHex = "22"; (`00${ decimalColor.toString(16) }`).slice(-2);
    const blueHex = "77"; //(`00${ decimalColor.toString(16) }`).slice(-2);
    const hexColor = `#${ redHex }${ greenHex }${ blueHex }`;
    return hexColor;
});

const mapYears = (start, end) => {
    const years = [];
    const startYear = moment(start).year();
    const endYear = moment(end).year();
    for (let i = startYear; i <= endYear; i += 1) {
        years.push(i);
    }
    return years;
};


const timelineAnimation = (start, end) => {
    d3.select(".chart")
        .selectAll("div")
        .data(mapYears(start, end))
        .enter()
        .append("div")
        .style("background-color", getColor(start, end))
        .text(year => year);
};


export default timelineAnimation;