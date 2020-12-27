
// Marcel Timm, RhinoDevel, 2020nov30

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';
    
    /** 6502 addressing modes array.
     * 
     *  - Entries are to-be-referenced by their "id" property.
     * 
     *  - Entries are ordered by ID, where the first character of the ID equals the
     *    byte count and inside these byte count "groups" the addressing modes are
     *    ordered in a way that (hopefully) logically makes sense.
     *    An entries position in such a "group" is represented by the second
     *    character of the ID.
     */
    rhino6502doc.addrModes = [
        // Addressing modes, where the commands have a length of one byte:
        //
        {
            id: '11',
            example: 'DEX',
            title: 'implied',
            byteCount: 1,
            comment: '',
            codeEquiv: ''
        },
        {
            id: '12',
            example: 'ASL A',
            title: 'accumulator',
            byteCount: 1,
            comment: '',
            codeEquiv: ''
        },

        // Addressing modes, where the commands have a length of two bytes:
        //
        {
            id: '21',
            example: 'CMP #$CC',
            title: '# immediate',
            byteCount: 2,
            comment: '',
            codeEquiv: 'addr = PC;'
        },
        {
            id: '22',
            example: 'BEQ #$0F',
            title: 'relative',
            byteCount: 2,
            comment: '',
            codeEquiv: 'addr = PC + 2 + *PC;'
        },
        {
            id: '23',
            example: 'DEC $3A',
            title: 'zero page',
            byteCount: 2,
            comment: '',
            codeEquiv: 'addr = *PC;'
        },
        {
            id: '24',
            example: 'LDA $14,X',
            title: 'zero page, X',
            byteCount: 2,
            comment: '',
            codeEquiv: 'addr = *PC + X;'
        },
        {
            id: '25',
            example: 'LDX $15,Y',
            title: 'zero page, Y',
            byteCount: 2,
            comment: '',
            codeEquiv: 'addr = *PC + Y;'
        },
        {
            id: '26',
            example: 'ORA ($C8,X)',
            title: '(zero page, X)',
            byteCount: 2,
            comment: '(pre-)indexed indirect',
            codeEquiv: 'addr = *(*PC + X);'
        },
        {
            id: '27',
            example: 'SBC ($6E),Y',
            title: '(zero page), Y',
            byteCount: 2,
            comment: 'indirect (post-)indexed',
            codeEquiv: 'addr = *(*PC) + Y;'
        },

        // Addressing modes, where the commands have a length of three bytes:
        //
        {
            id: '31',
            example: 'JSR $20FE',
            title: 'absolute',
            byteCount: 3,
            comment: '',
            codeEquiv: 'addr = *PC | *(PC + 1) << 8;'
        },
        {
            id: '32',
            example: 'INC $21D8,X',
            title: 'absolute, X',
            byteCount: 3,
            comment: '',
            codeEquiv: 'addr = (*PC | *(PC + 1) << 8) + X;'
        },
        {
            id: '33',
            example: 'LDX $21D6,Y',
            title: 'absolute, Y',
            byteCount: 3,
            comment: '',
            codeEquiv: 'addr = (*PC | *(PC + 1) << 8) + Y;'
        },
        {
            id: '34',
            example: 'JMP ($20C3)',
            title: '(absolute)',
            byteCount: 3,
            comment: 'absolute indirect',
            codeEquiv: 'addr = *(*PC | *(PC + 1) << 8);'
        }
    ];
}());
