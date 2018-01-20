import React from "react";
import PropTypes from "prop-types";
import { Impress } from 'react-impressjs';
import Step from './Step';
// import 'react-impressjs/styles/impress-demo.css';
import 'react-impressjs/styles/react-impressjs.css';
import '../../impress-extras/highlight/styles/github-gist.css'
import './Presentation.css';
import styles from './PresentationStyles';
import Slides from "./Slides";
import Markdown from 'react-markdown';
import Highlight from "react-highlight.js";
import injectSheet from 'react-jss';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const Fade = (props) => (
  <Transition in={props.in} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {props.children}
      </div>
    )}
  </Transition>
);

class Presentation extends React.Component {
    ImpressWithStyles = Impress;
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            steps: [],
            images: [
                    { id: 'react', url: require('../react.svg') },
                ].map(x => `[${x.id}]: ${x.url}`)
                .join("\n")
        };
    }
    
    async componentDidMount() {
        setInterval(async () => {
            await this.reloadContent();
        }, 1000);
    }

    componentWillReceiveProps(nextProps) {
        return;
    }
    
    async reloadContent() {
        const response = await fetch('/api/presentation');
        const content = await response.text();
        const matches =
            content
            .split(/^(?:---$)/m)
            .map(x => x.split(/(?:^(?=(?:```|#{2,}\s+)\w+)|[\r\n]^```$)/m));
        if (content === this.state.content) {
            return;
        }
        this.setState({
            content,
            steps: matches
        });
    }

    render() {
        const defaults = {
            width: 1024,
            height: 768,
            maxScale: 1000,
            minScale: 0,
            perspective: 1000,
            transitionDuration: 1000
        };
        
        const defaultData = {
            x: 0,       // as data-x
            y: 0,       // as data-y
            z: 0,       // as data-z
            rotateX: 0, // as data-rotate-x
            rotateY: 0, // as data-rotate-y
            rotateZ: 0, // as data-rotate and data-rotate-z
            scale: 1    // as data-scale
        };
        if (this.state.steps.length === 0) {
            return <div>Loading...</div>;
        }
        return <Impress progress={true} rootData={defaults} >
            {
                this.state.steps.map(
                    (stepContent, step) => {
                        let subTransitionCount = 0;
                        const splitForData = stepContent[0].split(/\{(\{.+?\})\}/m);
                        let data = {};
                        if (splitForData.length > 1) {
                            data = eval(`(${splitForData.splice(1, 1)[0]})`);
                            stepContent[0] = splitForData.join("");
                        }
                        return (
                            <Step
                                key={step+1}
                                id={`step-${step+1}`}
                                className={`step-${step}`}
                                data={{
                                    ...defaultData,
                                    x: step * 1200 * 1,
                                    ...data,
                                    // z: i*400,
                                    // y: i*200*((i+1)*106),
                                    // scale: ((i+1)*1),
                                    // rotateX: i*90,
                                    // rotateY: i*90,
                                    // rotateZ: i*90,
                                }}
                            >
                                {stepContent.map((x, i) => {
                                    if (/^```/.test(x)) {
                                        const [lang, code] = x.split(/^```(\w+)[\r\n]+/m, 3).slice(1);
                                        return <Highlight language={lang} key={i}>{code}</Highlight>;
                                    }
                                    const markdown = <Markdown key={i} source={`${x}\n\n${this.state.images}`} className="markdown-body" />;
                                    if (/^#{2,}\s\w+/m.test(x)) {
                                        return <Fade in={true}>{markdown}</Fade>;
                                    }
                                    return markdown;
                                })}
                            </Step>
                        );
                    }
                )
            }
        </Impress>;
    }
}

class PresentationContainer extends React.Component {
    componentWillMount() {
        this.setState({ testing: true });
    }
    render() {
        const PresentationWithStyles = injectSheet(styles)(Presentation);
        return <PresentationWithStyles {...this.props} />;
    }
}

export default PresentationContainer;

Presentation.propTypes = {
};