import React, { FunctionComponent } from "react";
import logo from './../../assets/img/logo.png';

export const Logo: FunctionComponent = () => {
    return (
        <div>
            <img src={logo} alt="logo"/>
        </div>
    );
};
