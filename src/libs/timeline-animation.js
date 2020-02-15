// @flow

import * as d3 from "d3";
import moment from "moment";
import * as R from "ramda";

const getColor = R.curry((start, end, year) => {
    const endColor = parseInt("99", 16);
    const startYear = moment(start).year();
    const endYear = moment(end).year();
    const yearCount = (endYear - startYear);
    const ratio = yearCount / endColor;
    const decimalColor = Math.floor((year - startYear) / ratio);
    const redHex = (`00${ decimalColor.toString(16) }`).slice(-2);
    const greenHex = "00";
    const blueHex = "66";
    return `#${ redHex }${ greenHex }${ blueHex }`;
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


const timelineAnimation = (start, end, events) => {
    const yearColor = getColor(start, end);
    const chart = d3.select(".chart");

    chart
        .selectAll("div")
        .data(mapYears(start, end))
        .enter()
        .append("div")
        .style("background-color", yearColor)
        .attr("data-year", year => year)
        .text(year => year < 0 ? `${ year * -1 } BC` : year < 1000 ? `${ year } AD` : year);

    const myEvents = Object.entries(events).map(entry => ({ id: entry[0], ...entry[1] })).sort((a, b) => a.year - b.year);
    myEvents.forEach(event => {
        chart
            .select(`div[data-year='${ event.year }']`)
            .each(function () {
                    const container = window.document.createElement("div");
                    container.setAttribute("class", "event-container");

                    const link = window.document.createElement("div");
                    link.setAttribute("class", "event-link");

                    const avatar = window.document.createElement("div");
                    avatar.setAttribute("class", "event-avatar");
                    avatar.setAttribute("style", `background-image: url('${ event.image }')`);

                    const title = window.document.createElement("span");
                    title.setAttribute("class", "event-title");
                    title.append(window.document.createTextNode(event.title));

                    const summary = window.document.createElement("span");
                    summary.setAttribute("class", "event-summary");
                    summary.append(window.document.createTextNode(event.summary));

                    link.appendChild(avatar);
                    link.appendChild(title);
                    link.appendChild(summary);
                    container.appendChild(link);
                    this.parentNode.insertBefore(container, this.nextSibling);
                }
            );
    });
};


export default timelineAnimation;