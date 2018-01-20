export default {
    '@global .step': {
        backgroundColor: 'whitesmoke'
    },
    
    ['@global #react-impressjs, body']: {
    },

    // '@global #react-impressjs ol, #react-impressjs ul': {
    //     listStyle: 'unset'
    // },
    
    /* #react-impressjs .markdown-body,
    #react-impressjs pre > code {
        font-size: 36px;
    } */
    
    /* Highlight.js used for coloring pre > code blocks. */
    '@global pre': {
        margin: '0.5em 0'
    },
    '@global pre > code': {
        /* font-size: 14px; */
        textShadow: '0 0 0 rgba(0, 0, 0, 0)'
    },
    
    /* Inline code, no Highlight.js */
    '@global code': {
        fontFamily: '"Cutive mono","Courier New", monospace'
    },
    
    '@global .step > *': {
        zoom: '65%'
    },
    
    '@global .step-0 > *': {
        zoom: '60%'
    },
    
    '@global .step-0 h1': {
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
    
    '@global .step-0 img': {
        height: '100px',
        width: '100%',
        verticalAlign: 'middle',
        margin: 0,
        padding: 0,
    },
};