// ==UserScript==
// @name         slackStyling4Dark
// @namespace    https://github.com/s-kono
// @version      0.20190927.2
// @description  slack styling for Dark
// @updateURL    https://raw.githubusercontent.com/s-kono/Greasemonkey/master/slackStyling4Dark.user.js
// @downloadURL  https://raw.githubusercontent.com/s-kono/Greasemonkey/master/slackStyling4Dark.user.js
// @match        https://app.slack.com/client/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var css = `
blockquote.c-mrkdwn__quote {
    position: relative;
    margin: 2em 0;
    padding: 1em 1em 1em 2em;
    font-size: .9em;
    border-left: 4px solid #bbbbbb;
    border-radius: 2px;
    background: #660a0a;
    color: #bbaabb;
}
blockquote.c-mrkdwn__quote:after {
    position: absolute;
    bottom: 0;
    right: 15px;
    opacity: 0.3;
    color: #eeeeee;
    font-family: sans-serif;
    font-size: 6em;
    content: '”';
}
pre.c-mrkdwn__pre {
    background: #003311;
    color: #bbaabb;
}
code.c-mrkdwn__code {
    background: #ccaa00;
    color: #000000 !important;
    font-weight: bold;
}
div.c-message_attachment__body {
    padding: 1em 1em 1em 1.5em;
    border-left: 4px solid #999999;
    background: #0a0a33;
}
    `;
    var head = document.head;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
})();
