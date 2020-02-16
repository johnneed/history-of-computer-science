// @flow

import React from "react";
import "./modal.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";


type PropsType = { children: React.Component };
export const Modal = ({ children }: PropsType): React$Element<any> => {
    const match = useRouteMatch("/");
    const isOpen = !match.isExact;

    return (
        <div className={ classNames("modal", (isOpen && "is-open")) }>
            <Link to={ "/" } className={ "global-header_toggle-nav" }>
                <FontAwesomeIcon icon={ faTimes }/>
            </Link>
            { children }
        </div>
    );

};