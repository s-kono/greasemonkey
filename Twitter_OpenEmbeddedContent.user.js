// ==UserScript==
// @name           Twitter_OpenEmbeddedContent
// @namespace      https://github.com/s-kono
// @description    Twitter OpenEmbeddedContent
// @version        0.20171015.5
// @updateURL      https://raw.githubusercontent.com/s-kono/Greasemonkey/master/Twitter_OpenEmbeddedContent.user.js
// @downloadURL    https://raw.githubusercontent.com/s-kono/Greasemonkey/master/Twitter_OpenEmbeddedContent.user.js
// @include        https://twitter.com/*
// @match          https://twitter.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

(function () {
    if ( location.href.match(/^https:\/\/twitter.com\/.*\/statuse?s?\//) ) {
        var ret;
        var flag = 0;
        ret = document.evaluate('//meta[@property="og:video:url"]', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for ( var i=0; i < ret.snapshotLength; i++ ) {
            flag = 1;
            window.open( ret.snapshotItem(i).getAttribute('content') );
        }
        if ( flag == 1 ) {
            return;
        }
        ret = document.evaluate('//meta[@property="og:image"]', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for ( var i=0; i < ret.snapshotLength; i++ ) {
            if ( ret.snapshotItem(i).getAttribute('content').match( /pbs.twimg.com\/profile_images\// ) ) {
                continue;
            }
            window.open( ret.snapshotItem(i).getAttribute('content') );
        }
    }
})();
