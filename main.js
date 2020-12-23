
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
    };

    f.onLoad = function()
    {
        f.initBody();

        rhino6502doc.refCardInit(
			{
				data: {
					addrModes: rhino6502doc.addrModes,
					mnemonics: rhino6502doc.mnemonics,
					commands: rhino6502doc.commands,
					flagAffect: rhino6502doc.flagAffect
				},
				ele: rhino6502doc.refCardUiInitAndGetEles(document.body, null),
				helpers: {
					obj: rhino6502doc.obj,
					ele: rhino6502doc.ele,
					num: rhino6502doc.num
				}
			});
    };

    window.addEventListener('load', f.onLoad);
}());
