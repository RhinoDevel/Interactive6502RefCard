
// Marcel Timm, RhinoDevel, 2020nov30

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';
    
    /** How a 6502 command affects a specific status register bit / flag.
     */
    rhino6502doc.flagAffect = {
        none: -1, // Does not affect the specific flag value.
        zero: 0, // Always sets the flag to zero.
        one: 1, // Always sets the flag to one.
        some: 2, // Affects the flag, but value is not known.
        bitSix: 6, // Set to bit 6 of (byte) value (BIT command, only).
        bitSeven: 7 // Set to bit 7 of (byte) value (BIT command, only).
    };
}());
