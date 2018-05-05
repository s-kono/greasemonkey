// ==UserScript==
// @name           Instagram_OpenEmbeddedContent.user.js
// @namespace      https://github.com/s-kono
// @description    Instagram OpenEmbeddedContent
// @version        0.20171021.2
// @updateURL      https://raw.githubusercontent.com/s-kono/Greasemonkey/master/Instagram_OpenEmbeddedContent.user.js
// @downloadURL    https://raw.githubusercontent.com/s-kono/Greasemonkey/master/Instagram_OpenEmbeddedContent.user.js
// @include        https://www.instagram.com/p/*
// @match          https://www.instagram.com/p/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

(function () {
    var ret;
    ret = document.evaluate('//meta[@property="og:image"]', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for ( var i=0; i < ret.snapshotLength; i++ ) {
        window.open( ret.snapshotItem(i).getAttribute('content') );
    }
    ret = document.evaluate('//meta[@property="og:video"]', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for ( var i=0; i < ret.snapshotLength; i++ ) {
        window.open( ret.snapshotItem(i).getAttribute('content') );
    }
})();
