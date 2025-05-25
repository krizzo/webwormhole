'use strict';
chrome.action.onClicked.addListener(() => {
	chrome.windows.create({
		type: "panel",
		url: chrome.runtime.getURL("index.html"),
		width: 600,
		height: 600,
	});
});
