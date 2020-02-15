// @flow

import { isValidDate } from "../libs/validators";
import uuid from "uuid";

export default class Story {
    created: Date;
    id: string;
    updated: Date;
    headline: string;
    text: string;

    constructor(args: ?Object) {
        this.created = isValidDate(args.created)
            ? new Date(args.created)
            : null;
        this.id = typeof args.id === "string"
            ? args.id
            : uuid();
        this.headline = typeof args.headline === "string"
            ? args.headline
            : null;
        this.text = typeof args.summary === "string"
            ? args.text
            : null;
        this.updated = isValidDate(new Date(args.updated))
            ? new Date(args.updated)
            : null;
    }

    static create(args: ?Object, id?: string): Story {
        const _args = args || {};
        if (Boolean(id)) {
            _args.id = id;
        }
        return JSON.parse(JSON.stringify(new Story(_args)));
    }
}