const topClass = '.spectacle';

export default {
    [`@global ${topClass} .step`]: {
        backgroundColor: 'whitesmoke'
    },
    
    [`@global #react-impressjs, body, ${topClass}`]: {
    },

    // '@global #react-impressjs ol, #react-impressjs ul': {
    //     listStyle: 'unset'
    // },
    
    /* #react-impressjs .markdown-body,
    #react-impressjs pre > code {
        font-size: 36px;
    } */
    
    /* Highlight.js used for coloring pre > code blocks. */
    [`@global ${topClass} pre`]: {
        margin: '0.5em 0',
        fontSize: '0.8em'
    },
    
    [`@global ${topClass} pre > code`]: {
        /* font-size: 14px; */
        textShadow: '0 0 0 rgba(0, 0, 0, 0)'
    },
    
    /* Inline code, no Highlight.js */
    [`@global ${topClass} code`]: {
        fontFamily: '"Cutive mono","Courier New", monospace'
    },
    
    [`@global ${topClass} .step > *`]: {
        zoom: '65%'
    },
    
    [`@global ${topClass} .step-0 > *`]: {
        zoom: '60%'
    },
    
    [`@global ${topClass} .step-0 h1`]: {
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
    
    [`@global ${topClass} .step-0 img`]: {
        height: '100px',
        width: '100%',
        verticalAlign: 'middle',
        margin: 0,
        padding: 0,
    },
};