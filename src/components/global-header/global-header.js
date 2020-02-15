// @flow

import React from "react";
import "./global-header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const GlobalHeader = () => (
    <nav className={ "global-header" }>
        <ul className={ "global-header_ul" }>
            <li className={ "global-header_li" }>
                <Link className={ "global-header_link" } to="/">
                    <FontAwesomeIcon icon={ faHome }/>
                    <span>{ "Home" }</span>
                </Link>
            </li>
            <li className={ "global-header_li" }>
                <Link className={ "global-header_link" } to="/about">
                    <FontAwesomeIcon icon={ faInfoCircle }/>
                    <span>{ "About" }</span>
                </Link>
            </li>
        </ul>
    </nav>
);