
// Marcel Timm, RhinoDevel, 2020dec04

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

    /** 6502 mnemonics array.
     * 
     *  - Ordered by mnemonic property (also see commands array).
     */
    rhino6502doc.mnemonics = [
        { mnemonic: 'ADC', title: 'Add content of memory and A with carry' },
        { mnemonic: 'AND', title: 'AND of content from memory and A' },
        { mnemonic: 'ASL', title: 'Shift content of memory or A left by 1 bit' },
        { mnemonic: 'BCC', title: 'Branch, if carry flag is 0' },
        { mnemonic: 'BCS', title: 'Branch, if carry flag is 1' },
        { mnemonic: 'BEQ', title: 'Branch, if zero flag is 1' },
        { mnemonic: 'BIT', title: 'Test bits from memory' },
        { mnemonic: 'BMI', title: 'Branch, if negative flag is 1' },
        { mnemonic: 'BNE', title: 'Branch, if zero flag is 0' },
        { mnemonic: 'BPL', title: 'Branch, if negative flag is 0' },
        { mnemonic: 'BRK', title: 'Break (force interrupt)' },
        { mnemonic: 'BVC', title: 'Branch, if overflow flag is 0' },
        { mnemonic: 'BVS', title: 'Branch, if overflow flag is 1' },
        { mnemonic: 'CLC', title: 'Clear carry flag' },
        { mnemonic: 'CLD', title: 'Clear decimal mode flag' },
        { mnemonic: 'CLI', title: 'Clear IRQ disable flag' },
        { mnemonic: 'CLV', title: 'Clear overflow flag' },
        { mnemonic: 'CMP', title: 'Compare content memory and A' },
        { mnemonic: 'CPX', title: 'Compare content of memory and X' },
        { mnemonic: 'CPY', title: 'Compare content of memory and Y' },
        { mnemonic: 'DEC', title: 'Decrement memory content' },
        { mnemonic: 'DEX', title: 'Decrement X content' },
        { mnemonic: 'DEY', title: 'Decrement Y content' },
        { mnemonic: 'EOR', title: 'Exclusive-OR of content from memory and A' },
        { mnemonic: 'INC', title: 'Increment memory content' },
        { mnemonic: 'INX', title: 'Increment X content' },
        { mnemonic: 'INY', title: 'Increment Y content' },
        { mnemonic: 'JMP', title: 'Jump to location in memory' },
        { mnemonic: 'JSR', title: 'Jump to location in memory, saving return address' },
        { mnemonic: 'LDA', title: 'Load from memory to A' },
        { mnemonic: 'LDX', title: 'Load from memory to X' },
        { mnemonic: 'LDY', title: 'Load from memory to Y' },
        { mnemonic: 'LSR', title: 'Shift content of memory or A right by 1 bit' },
        { mnemonic: 'NOP', title: 'No operation' },
        { mnemonic: 'ORA', title: '(Inclusive-)OR of content from memory and A' },
        { mnemonic: 'PHA', title: 'Push from A to stack' },
        { mnemonic: 'PHP', title: 'Push from PS to stack' },
        { mnemonic: 'PLA', title: 'Pull from stack to A' },
        { mnemonic: 'PLP', title: 'Pull from stack to PS' },
        { mnemonic: 'ROL', title: 'Rotate content of memory or A and carry flag left by 1 bit' },
        { mnemonic: 'ROR', title: 'Rotate content of memory or A and carry flag right by 1 bit' },
        { mnemonic: 'RTI', title: 'Return from IRQ service routine' },
        { mnemonic: 'RTS', title: 'Return from subroutine' },
        { mnemonic: 'SBC', title: 'Subtract memory content with borrow from A' },
        { mnemonic: 'SEC', title: 'Set carry flag' },
        { mnemonic: 'SED', title: 'Set decimal mode flag' },
        { mnemonic: 'SEI', title: 'Set IRQ disable flag' },
        { mnemonic: 'STA', title: 'Store A content in memory' },
        { mnemonic: 'STX', title: 'Store X content in memory' },
        { mnemonic: 'STY', title: 'Store Y content in memory' },
        { mnemonic: 'TAX', title: 'Transfer from A to X' },
        { mnemonic: 'TAY', title: 'Transfer from A to Y' },
        { mnemonic: 'TSX', title: 'Transfer from SP to X' },
        { mnemonic: 'TXA', title: 'Transfer from X to A' },
        { mnemonic: 'TXS', title: 'Transfer from X to SP' },
        { mnemonic: 'TYA', title: 'Transfer from Y to A' }
    ];
}());
