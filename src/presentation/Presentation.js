import React from "react";
import { Impress, Step } from 'react-impressjs';
// import 'react-impressjs/styles/impress-demo.css';
import 'react-impressjs/styles/react-impressjs.css';
import './Presentation.css';
import Slides from "./Slides";

export default class Presentation extends React.Component {
    render() {
        const defaults = {
            width: 1024,
            height: 768,
            maxScale: 1,
            minScale: 0,
            perspective: 1000,
            transitionDuration: 1000
        };
        
        const defaultData = {
            x: 0,       // as data-x
            y: 1250,       // as data-y
            z: 0,       // as data-z
            rotateX: 0, // as data-rotate-x
            rotateY: 0, // as data-rotate-y
            rotateZ: 0, // as data-rotate and data-rotate-z
            scale: 1    // as data-scale
        };
        return <Impress progress={true} rootData={defaults}>
        {[
            (props) => <Step className="test1" {...props}>Testing</Step>,
            (props) => <Step className="test2" {...props}>Testing2</Step>,
            (props) => <Step className="test3" {...props}>Testing 3 more things</Step>,
            (props) => <Step className="test5" {...props}>
                
                    function() (
                        return stuff is cool;
                    )
            </Step>,
        ].map((x, i) => x({
            key: i,
            className: `step-${i}`,
            data: {
                ...defaultData,
                y: i*400
            }
        }))}
        </Impress>;
    }
}