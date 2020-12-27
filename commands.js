
// Marcel Timm, RhinoDevel, 2020nov30

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';
    
    // Requirements:
    //
    var flagAffect = rhino6502doc.flagAffect;

    /** 6502 commands array.
     * 
     *  - Commands are ordered by mnemonic (also see mnemonics array),
     *    followed by address mode ID (where the address mode ID's first
     *    character equals the byte count).
     */
    rhino6502doc.commands = [
        {
            opCode: 105,
            mnemonic: 'ADC',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 101,
            mnemonic: 'ADC',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 117,
            mnemonic: 'ADC',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 97,
            mnemonic: 'ADC',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 113,
            mnemonic: 'ADC',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 109,
            mnemonic: 'ADC',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 125,
            mnemonic: 'ADC',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 121,
            mnemonic: 'ADC',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A + *addr + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 41,
            mnemonic: 'AND',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 37,
            mnemonic: 'AND',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 53,
            mnemonic: 'AND',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 33,
            mnemonic: 'AND',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 49,
            mnemonic: 'AND',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 45,
            mnemonic: 'AND',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 61,
            mnemonic: 'AND',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 57,
            mnemonic: 'AND',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A & *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 10,
            mnemonic: 'ASL',
            addrModeId: '12',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A << 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 6,
            mnemonic: 'ASL',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr << 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 22,
            mnemonic: 'ASL',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr << 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 14,
            mnemonic: 'ASL',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr << 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 30,
            mnemonic: 'ASL',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr << 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 144,
            mnemonic: 'BCC',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(C == 0)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 176,
            mnemonic: 'BCS',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(C == 1)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 240,
            mnemonic: 'BEQ',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(Z == 1)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 36,
            mnemonic: 'BIT',
            addrModeId: '23',
            n: flagAffect.bitSeven,
            v: flagAffect.bitSix,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 44,
            mnemonic: 'BIT',
            addrModeId: '31',
            n: flagAffect.bitSeven,
            v: flagAffect.bitSix,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 48,
            mnemonic: 'BMI',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(N == 1)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 208,
            mnemonic: 'BNE',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(Z == 0)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 16,
            mnemonic: 'BPL',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(N == 0)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 0,
            mnemonic: 'BRK',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.one,
            d: flagAffect.none,
            i: flagAffect.some,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 80,
            mnemonic: 'BVC',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(V == 0)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 112,
            mnemonic: 'BVS',
            addrModeId: '22',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: true,
            codeEquiv: 'if(V == 1)' + '<br>'
				+ '{' + '<br>'
				+ '&nbsp;&nbsp;&nbsp;&nbsp;PC = addr;' + '<br>'
				+ '}'
        },
        {
            opCode: 24,
            mnemonic: 'CLC',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.zero,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'C = 0;'
        },
        {
            opCode: 216,
            mnemonic: 'CLD',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.zero,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'D = 0;'
        },
        {
            opCode: 88,
            mnemonic: 'CLI',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.zero,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'I = 0;'
        },
        {
            opCode: 184,
            mnemonic: 'CLV',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.zero,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'V = 0;'
        },
        {
            opCode: 201,
            mnemonic: 'CMP',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 197,
            mnemonic: 'CMP',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 213,
            mnemonic: 'CMP',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 193,
            mnemonic: 'CMP',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 209,
            mnemonic: 'CMP',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 205,
            mnemonic: 'CMP',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 221,
            mnemonic: 'CMP',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 217,
            mnemonic: 'CMP',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 224,
            mnemonic: 'CPX',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 228,
            mnemonic: 'CPX',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 236,
            mnemonic: 'CPX',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 192,
            mnemonic: 'CPY',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 196,
            mnemonic: 'CPY',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 204,
            mnemonic: 'CPY',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 198,
            mnemonic: 'DEC',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr - 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 214,
            mnemonic: 'DEC',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr - 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 206,
            mnemonic: 'DEC',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr - 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 222,
            mnemonic: 'DEC',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr - 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 202,
            mnemonic: 'DEX',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = X - 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 136,
            mnemonic: 'DEY',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = Y - 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 73,
            mnemonic: 'EOR',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 69,
            mnemonic: 'EOR',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 85,
            mnemonic: 'EOR',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 65,
            mnemonic: 'EOR',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 81,
            mnemonic: 'EOR',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 77,
            mnemonic: 'EOR',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 93,
            mnemonic: 'EOR',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 89,
            mnemonic: 'EOR',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A ^ *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 230,
            mnemonic: 'INC',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr + 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 246,
            mnemonic: 'INC',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr + 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 238,
            mnemonic: 'INC',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr + 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 254,
            mnemonic: 'INC',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr + 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 232,
            mnemonic: 'INX',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = X + 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 200,
            mnemonic: 'INY',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = Y + 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 76,
            mnemonic: 'JMP',
            addrModeId: '31',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'PC = addr;'
        },
        {
            opCode: 108,
            mnemonic: 'JMP',
            addrModeId: '34',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'PC = addr;'
        },
        {
            opCode: 32,
            mnemonic: 'JSR',
            addrModeId: '31',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 169,
            mnemonic: 'LDA',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 165,
            mnemonic: 'LDA',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 181,
            mnemonic: 'LDA',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 161,
            mnemonic: 'LDA',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 177,
            mnemonic: 'LDA',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 173,
            mnemonic: 'LDA',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 189,
            mnemonic: 'LDA',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 185,
            mnemonic: 'LDA',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 162,
            mnemonic: 'LDX',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 166,
            mnemonic: 'LDX',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 182,
            mnemonic: 'LDX',
            addrModeId: '25',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 174,
            mnemonic: 'LDX',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 190,
            mnemonic: 'LDX',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'X = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 160,
            mnemonic: 'LDY',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 164,
            mnemonic: 'LDY',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 180,
            mnemonic: 'LDY',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 172,
            mnemonic: 'LDY',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 188,
            mnemonic: 'LDY',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 74,
            mnemonic: 'LSR',
            addrModeId: '12',
            n: flagAffect.zero,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A >> 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 70,
            mnemonic: 'LSR',
            addrModeId: '23',
            n: flagAffect.zero,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr >> 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 86,
            mnemonic: 'LSR',
            addrModeId: '24',
            n: flagAffect.zero,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr >> 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 78,
            mnemonic: 'LSR',
            addrModeId: '31',
            n: flagAffect.zero,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr >> 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 94,
            mnemonic: 'LSR',
            addrModeId: '32',
            n: flagAffect.zero,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = *addr >> 1;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 234,
            mnemonic: 'NOP',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: ''
        },
        {
            opCode: 9,
            mnemonic: 'ORA',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 5,
            mnemonic: 'ORA',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 21,
            mnemonic: 'ORA',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 1,
            mnemonic: 'ORA',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 17,
            mnemonic: 'ORA',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 13,
            mnemonic: 'ORA',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 29,
            mnemonic: 'ORA',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 25,
            mnemonic: 'ORA',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A | *addr;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 72,
            mnemonic: 'PHA',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 8,
            mnemonic: 'PHP',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 104,
            mnemonic: 'PLA',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 40,
            mnemonic: 'PLP',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.some,
            d: flagAffect.some,
            i: flagAffect.some,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 42,
            mnemonic: 'ROL',
            addrModeId: '12',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 38,
            mnemonic: 'ROL',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 54,
            mnemonic: 'ROL',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 46,
            mnemonic: 'ROL',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 62,
            mnemonic: 'ROL',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 106,
            mnemonic: 'ROR',
            addrModeId: '12',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 102,
            mnemonic: 'ROR',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 118,
            mnemonic: 'ROR',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 110,
            mnemonic: 'ROR',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 126,
            mnemonic: 'ROR',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 7,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 64,
            mnemonic: 'RTI',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.some,
            d: flagAffect.some,
            i: flagAffect.some,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 96,
            mnemonic: 'RTS',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 233,
            mnemonic: 'SBC',
            addrModeId: '21',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 229,
            mnemonic: 'SBC',
            addrModeId: '23',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 245,
            mnemonic: 'SBC',
            addrModeId: '24',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 225,
            mnemonic: 'SBC',
            addrModeId: '26',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 241,
            mnemonic: 'SBC',
            addrModeId: '27',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 5,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 237,
            mnemonic: 'SBC',
            addrModeId: '31',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 253,
            mnemonic: 'SBC',
            addrModeId: '32',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 249,
            mnemonic: 'SBC',
            addrModeId: '33',
            n: flagAffect.some,
            v: flagAffect.some,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.some,
            cycleCountMin: 4,
            cycleAddOnPageCross: true,
            cycleAddOnBranch: false,
            codeEquiv: 'A = A - *addr - 1 + C;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 56,
            mnemonic: 'SEC',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.one,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'C = 1;'
        },
        {
            opCode: 248,
            mnemonic: 'SED',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.one,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'D = 1;'
        },
        {
            opCode: 120,
            mnemonic: 'SEI',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.one,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'I = 1;'
        },
        {
            opCode: 133,
            mnemonic: 'STA',
            addrModeId: '23',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 149,
            mnemonic: 'STA',
            addrModeId: '24',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 129,
            mnemonic: 'STA',
            addrModeId: '26',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 145,
            mnemonic: 'STA',
            addrModeId: '27',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 6,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 141,
            mnemonic: 'STA',
            addrModeId: '31',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 157,
            mnemonic: 'STA',
            addrModeId: '32',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 153,
            mnemonic: 'STA',
            addrModeId: '33',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 5,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = A;'
        },
        {
            opCode: 134,
            mnemonic: 'STX',
            addrModeId: '23',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = X;'
        },
        {
            opCode: 150,
            mnemonic: 'STX',
            addrModeId: '25',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = X;'
        },
        {
            opCode: 142,
            mnemonic: 'STX',
            addrModeId: '31',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = X;'
        },
        {
            opCode: 132,
            mnemonic: 'STY',
            addrModeId: '23',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 3,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = Y;'
        },
        {
            opCode: 148,
            mnemonic: 'STY',
            addrModeId: '24',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = Y;'
        },
        {
            opCode: 140,
            mnemonic: 'STY',
            addrModeId: '31',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 4,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '*addr = Y;'
        },
        {
            opCode: 170,
            mnemonic: 'TAX',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'X = A;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 168,
            mnemonic: 'TAY',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'Y = A;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 186,
            mnemonic: 'TSX',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 138,
            mnemonic: 'TXA',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = X;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 154,
            mnemonic: 'TXS',
            addrModeId: '11',
            n: flagAffect.none,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.none,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: '' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        },
        {
            opCode: 152,
            mnemonic: 'TYA',
            addrModeId: '11',
            n: flagAffect.some,
            v: flagAffect.none,
            b: flagAffect.none,
            d: flagAffect.none,
            i: flagAffect.none,
            z: flagAffect.some,
            c: flagAffect.none,
            cycleCountMin: 2,
            cycleAddOnPageCross: false,
            cycleAddOnBranch: false,
            codeEquiv: 'A = Y;' + '<br>'
				+ '<br>'
				+ '<span style="color: green;">// This equivalent C code is not complete, yet..</span>'
        }
    ];
}());
