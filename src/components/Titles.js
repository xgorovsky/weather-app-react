import React from "react";
import DateTime from "./DateTime";

const Titles = () => (
    <div className="titles-wrapper">
        <h1 className="app-title">Weather finder</h1>
        <i className="fas fa-wind fa-rotate-90 fa-4x"></i>
        <p className="app-description">
            Find out current temperature, condtitions and more...
        </p>
        <div>
            <DateTime />
        </div>
    </div>
);

export default Titles;
