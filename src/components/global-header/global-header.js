// @flow

import React from "react";
import "./global-header.css";
import { Link } from "react-router-dom";

export const GlobalHeader = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);