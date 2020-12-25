
// Marcel Timm, RhinoDevel, 2020nov30

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var g = rhino6502doc, // Shortcut
        f = {}, 
        v = {};
		
    f.initBody = function()
    {
		v.mainEle = g.ele.createAndAppend('div', document.body, null, 'row');
    };

    f.onLoad = function()
    {
		var helpers = { obj: g.obj, ele: g.ele, num: g.num };
		
        f.initBody();

        g.refCardInit(
			{
				data: {
					addrModes: g.addrModes,
					mnemonics: g.mnemonics,
					commands: g.commands,
					flagAffect: g.flagAffect
				},
				ele: g.refCardUiInitAndGetEles(v.mainEle, 1),
				helpers: helpers
			});
			
		g.disAsmInit(
			{
				data: {},
				ele: g.disAsmUiInitAndGetEles(v.mainEle, 2),
				helpers: helpers
			});
    };

    window.addEventListener('load', f.onLoad);	
}());
