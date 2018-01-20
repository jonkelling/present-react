import React from 'react';
import { Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text, MarkdownSlides } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import './Presentation.css';
import md from '../../presentation.md';

export default class Presentation2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            images: '',
        };
    }
    
    async componentDidMount() {
        setInterval(async () => {
            await this.reloadContent();
        }, 1000);
    }
    
    async reloadContent() {
        let content;
        if (!window.location.hostname.includes('github.io') && !window.location.href.includes('file:')) {
            const response = await fetch('/api/presentation');
            content = await response.text();
        }
        else {
            content = md;
        }
        const matches =
            content
            .split(/^(?=#\s)/m)
            .map(x => x.split(/(?:^(?=(?:```|#{2,}\s+)\w+)|[\r\n]^```$)/m));
        if (content === this.state.content) {
            return;
        }
        const images = [
            { id: 'react', url: require('../../public/react.png') },
            { id: 'redux', url: require('../../public/redux.png') },
            { id: 'redux-react', url: require('../../public/redux-react.png') },
            { id: 'most-popular-languages', url: require('../../public/most_popular_programming_languages.png') },
            { id: 'most-contributors', url: require('../../public/most_contributors.png') },
            { id: 'tech', url: require('../../public/tech.png') },
        ].map(x => `[${x.id}]: ${x.url}`)
        .join("\n");
        this.setState({
            content: `${images}\n\n${content}`.replace(/^---$/gm, `\n---\n\n${images}\n`),
            steps: matches,
            images
        });
    }

    render() {
        if (this.state.content === '') {
            return <div>Loading...</div>;
        }
        const baseTheme = createTheme({
            primary: "rgb(14, 39, 56)",
            secondary: "white",
            tertiary: 'white',
            quarternary: 'white'
        }, {

        });
        const theme = {
            ...baseTheme,
            screen: {
                ...baseTheme.screen,
                global: {
                    ...baseTheme.screen.global,
                    p: {
                        color: 'white !important'
                    },
                    h3: {
                        color: 'white'
                    },
                    h4: {
                        color: 'white'
                    },
                    h5: { color: 'white' },
                    h6: {color: 'white'},
                    a: {color: 'lightblue', 'text-decoration': 'none'}
                },
            },
        };

        return <Deck theme={theme} transition={['zoom', 'slide']} transitionDuration={600}>
            {MarkdownSlides`${this.state.content}`}
        </Deck>;
    }
}