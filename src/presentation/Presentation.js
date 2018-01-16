import React from "react";
import { Impress, Step } from 'react-impressjs';
// import 'react-impressjs/styles/impress-demo.css';
import 'react-impressjs/styles/react-impressjs.css';
import Slides from "./Slides";

export default class Presentation extends React.Component {
    render() {
        return <Impress>
            <Step>Testing</Step>
            <Step>Testing2</Step>
        </Impress>;
    }
}