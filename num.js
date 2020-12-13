
// Marcel Timm, RhinoDevel, 2020dec02

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

    var f = {};

    f.isNum = function(val)
    {
        return typeof val === 'number' && !isNaN(val);
    };

    f.isInt = function(val)
    {
       return f.isNum(val) && parseInt(val, 10) === val;
    };

    rhino6502doc.num = f;    
}());
