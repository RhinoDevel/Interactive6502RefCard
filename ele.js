
// Marcel Timm, RhinoDevel, 2020nov30

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

        // Requirements:
        //
    var num = rhino6502doc.num,

        f = {};

    f.createAndAppend = function(tagName, parentNode, flexOrder, flexDir)
    {
        var retVal = document.createElement(tagName);

        if(num.isInt(flexOrder))
        {
            retVal.style.order = String(flexOrder);
        }
        if(typeof flexDir === 'string')
        {
            retVal.style.display = 'flex';
            retVal.style['flex-direction'] = flexDir;
        }

        parentNode.appendChild(retVal);

        return retVal;
    };

    f.clearContent = function(node)
    {
        while(node.firstChild !== null)
        {
            node.removeChild(node.firstChild);
        }
    };

    rhino6502doc.ele = f;    
}());
