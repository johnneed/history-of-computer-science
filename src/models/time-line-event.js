// @flow

import { isValidDate } from "../libs/validators";
import uuid from "uuid";

export default class TimeLineEvent {
    created: Date;
    id: string;
    image: string;
    summary: string;
    tags: Array<string>;
    title: string;
    updated: Date;
    year: number;

    constructor(args: ?Object) {
        this.created = isValidDate(new Date(args.created))
            ? new Date(args.created)
            : null;
        this.id = typeof args.id === "string"
            ? args.id
            : uuid();
        this.image = typeof args.image === "string"
            ? args.image
            : "default.jpg";
        this.summary = typeof args.summary === "string"
            ? args.summary
            : null;
        this.title = typeof args.title === "string"
            ? args.title
            : null;
        this.tags = Array.isArray(args.tags) ? args.tags.filter(tag => typeof tag === "string") : [];
        this.updated = isValidDate(new Date(args.updated))
            ? new Date(args.updated)
            : null;
        this.year = typeof args.year === "number"
            ? args.year
            : null;
    }

    static create(args: ?Object, id?: string): TimeLineEvent {
        const _args = args || {};
        if (Boolean(id)) {
            _args.id = id;
        }
        return JSON.parse(JSON.stringify(new TimeLineEvent(_args)));
    }
}