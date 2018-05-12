// ==UserScript==
// @name           LogTest_start
// @namespace      https://github.com/s-kono
// @description    LogTest start
// @version        0.20180513.1
// @updateURL      https://raw.githubusercontent.com/s-kono/Greasemonkey/master/LogTest_start.user.js
// @downloadURL    https://raw.githubusercontent.com/s-kono/Greasemonkey/master/LogTest_start.user.js
// @include        *
// @match          <all_urls>
// @grant          none
// @run-at         document-start
// ==/UserScript==

(function () {
    var name = "LogTest_start";

        console.log (name, ": 000");

    function DOM_ContentReady () {
        console.log (name, ": 200");
    }
    function FullLoad () {
        console.log (name, ": 201");
    }

    document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
    window.addEventListener ("load", FullLoad);

        console.log (name, ": 100");

        console.log (name, ": 101");
})();
