// ==UserScript==
// @name           LogTest_end
// @namespace      https://github.com/s-kono
// @description    LogTest end
// @version        0.20180513.1
// @updateURL      https://raw.githubusercontent.com/s-kono/Greasemonkey/master/LogTest_end.user.js
// @downloadURL    https://raw.githubusercontent.com/s-kono/Greasemonkey/master/LogTest_end.user.js
// @include        *
// @match          <all_urls>
// @grant          none
// @run-at         document-end
// ==/UserScript==

(function () {
    var name = "LogTest_end";

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
