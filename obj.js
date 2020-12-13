
// Marcel Timm, RhinoDevel, 2020dec08

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

    var f = {};

    f.isObj = function(o)
    {
        return typeof o === 'object' && o !== null && !Array.isArray(o);
    };

    rhino6502doc.obj = f;    
}());
