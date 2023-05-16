
// ==UserScript==
// @name         自动收取每日Hoyolab奖品 Automatic collect prize in hoyolab
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Yihang Gong
// @match        https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311&*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hoyolab.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Adding event");
    console.log("Last fresh time:" + new Date())
    setTimeout(() => {
        StartScript();
    }, 20 * 1000);
})();

var leftSeconds = 3600;

function StartScript() {
    console.log("Automatic prize collection started");
    var icons = document.getElementsByClassName("components-pc-assets-__prize-list_---item---F852VZ");

    for(var i = 0; i < icons.length; i++) {
        const element = icons[i];
        if(element.children.length == 4) {
            continue;
        }
        element.click();
    }
    StartCountdown();
}

function StartCountdown() {
    leftSeconds--;
    console.log("Left seconds: " + leftSeconds);
    if(leftSeconds <= 0) {
        location.reload();
    }
    setTimeout(() => {
        StartCountdownCopy();
    }, 1000);
}

function StartCountdownCopy() {
    StartCountdown();
}
