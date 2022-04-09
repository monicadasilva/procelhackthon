import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Poppins', sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body{
        -webkit-tap-highlight-color: transparent;
        /* background: #1d1c2a; */
        color: #070707;
        overflow-x: hidden;
    }
    html{
        /* background: #1d1c2a; */
    }
    :root{
        --primary-0:       #A3BFE4;
        --primary-1:       #0091C9;
        --primary-2:       #004B80;
        --secondary-0:     #4D4D4D;
        --secondary-1:     #000000;
        --secondary-2:     #292536;
    }
`;
