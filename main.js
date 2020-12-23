
// Marcel Timm, RhinoDevel, 2020nov30

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var g = rhino6502doc, // Shortcut
        f = {}, 
        v = {};
		
    f.createCycleColumnEle = function(
        htmlContent, tooltip, parentNode, flexOrder)
    {
        var columnEle = g.ele.createAndAppend(
                'div', parentNode, flexOrder, 'column'),
            titleEle = g.ele.createAndAppend('div', columnEle, 1);

        columnEle.style.width = '2.8ch';
        columnEle.style['text-align'] = 'center';
        columnEle.style['background-color'] = 'palegreen';

        if(flexOrder !== 3)
        {
            columnEle.style['border-right'] = '1px solid green';
        }

        columnEle.title = tooltip;

        titleEle.innerHTML = htmlContent;
        titleEle.style['font-weight'] = 'bold';
        
        return g.ele.createAndAppend('div', columnEle, 2);
    };
    f.initCycleEleContent = function()
    {
        v.cycleCountMinEle = f.createCycleColumnEle(
            'Cy', 'Minimum cycle count.', v.cycleEle, 1);
        v.cycleAddOnPageCrossEle = f.createCycleColumnEle(
            'pg', 'Additional cycles on page cross.', v.cycleEle, 2);
        v.cycleAddOnBranchEle = f.createCycleColumnEle(
            'br', 'Additional cycles on branch taken.', v.cycleEle, 3);
    };
    f.initCycleEle = function(parentNode, flexOrder)
    {
        v.cycleEle = g.ele.createAndAppend('div', parentNode, flexOrder, 'row');

        v.cycleEle.style.border = '1px solid black';
        v.cycleEle.style['margin-right'] = '0.4ch';

        f.initCycleEleContent();
    };
	
	f.initByteCountEleContent = function()
    {
		var titleEle = g.ele.createAndAppend('div', v.byteCountEle, 1);

        titleEle.innerHTML = 'Bytes';
        titleEle.style['font-weight'] = 'bold';
        
        v.byteCountValEle = g.ele.createAndAppend('div', v.byteCountEle, 2);
    };
	f.initByteCountEle = function(parentNode, flexOrder)
	{
		v.byteCountEle = g.ele.createAndAppend(
			'div', parentNode, flexOrder, 'column');
			
		v.byteCountEle.style.border = '1px solid black';
        v.byteCountEle.style['margin-right'] = '0.4ch';
		v.byteCountEle.style.width = '5.1ch';
        v.byteCountEle.style['text-align'] = 'center';
        v.byteCountEle.style['background-color'] = 'springgreen';
        v.byteCountEle.title = 'Byte count.';

        f.initByteCountEleContent();
	}

    f.createFlagBitEle = function(
        htmlContent, tooltip, bgColor, parentNode, flexOrder)
    {
        var columnEle = g.ele.createAndAppend(
                'div', parentNode, flexOrder, 'column'),
            titleEle = g.ele.createAndAppend('div', columnEle, 1);

        columnEle.style.width = '1.5ch';
        columnEle.style['text-align'] = 'center';
        columnEle.style['background-color'] = bgColor;

        if(flexOrder !== 8)
        {
            columnEle.style['border-right'] = '1px solid limegreen';
        }

        columnEle.title = tooltip;

        titleEle.innerHTML = htmlContent;
        titleEle.style['font-weight'] = 'bold';
        
        return g.ele.createAndAppend('div', columnEle, 2);
    };
    f.initFlagsEleContent = function()
    {
        var bgColor = 'lawngreen', bgColorBitFive = 'green';

        v.nValEle = f.createFlagBitEle(
            'n', 'Negative flag.', bgColor, v.flagsEle, 1);
        v.vValEle = f.createFlagBitEle(
            'v', 'Overflow flag.', bgColor, v.flagsEle, 2);
        v.bitFiveValEle = f.createFlagBitEle(
            '&nbsp;', '(unused bit, hard-wired to 1)', bgColorBitFive, v.flagsEle, 3);
        v.bValEle = f.createFlagBitEle(
            'b', 'Break flag.', bgColor, v.flagsEle, 4);
        v.dValEle = f.createFlagBitEle(
            'd', 'Decimal mode flag.', bgColor, v.flagsEle, 5);
        v.iValEle = f.createFlagBitEle(
            'i', 'Interrupt disable flag.', bgColor, v.flagsEle, 6);
        v.zValEle = f.createFlagBitEle(
            'z', 'Zero flag.', bgColor, v.flagsEle, 7);
        v.cValEle = f.createFlagBitEle(
            'c', 'Carry flag.', bgColor, v.flagsEle, 8);
    };
    f.initFlagsEle = function(parentNode, flexOrder)
    {
        v.flagsEle = g.ele.createAndAppend('div', parentNode, flexOrder, 'row');

        v.flagsEle.style.border = '1px solid black';

        f.initFlagsEleContent();
    };

    f.initCodeEquivEle = function(parentNode, flexOrder)
    {
        v.codeEquivEle = g.ele.createAndAppend('div', parentNode, flexOrder);

        v.codeEquivEle.style.border = '1px solid black';
        v.codeEquivEle.style['background-color'] = 'moccasin';
        v.codeEquivEle.style.height = '100%';
        v.codeEquivEle.style['padding-left'] = '0.4ch';
        v.codeEquivEle.style['padding-right'] = '0.4ch';

        v.codeEquivEle.title = 'Equivalent C pseudo-code.';
    };

    f.initOpCodeHexEle = function()
    {
        v.opCodeHexEle = g.ele.createAndAppend('input', v.opCodeEle, 1);

        v.opCodeHexEle.style.width = '4.5ch';
        v.opCodeHexEle.style['text-align'] = 'right';
        v.opCodeHexEle.type = 'text';
        v.opCodeHexEle.placeholder = 'hex';
        v.opCodeHexEle.title = 'Enter opcode as hexadecimal value.';
    };
    f.initOpCodeSepEle = function()
    {
        v.opCodeSepEle = g.ele.createAndAppend('span', v.opCodeEle, 2);

        v.opCodeSepEle.style.width = '1.5ch';
        v.opCodeSepEle.style['text-align'] = 'center';
        v.opCodeSepEle.textContent = '/';
    };
    f.initOpCodeDecEle = function()
    {
        v.opCodeDecEle = g.ele.createAndAppend('input', v.opCodeEle, 3);

        v.opCodeDecEle.style.width = '4.5ch';
        v.opCodeDecEle.style['text-align'] = 'right';
        v.opCodeDecEle.type = 'text';
        v.opCodeDecEle.placeholder = 'dec';
        v.opCodeDecEle.title = 'Enter opcode as decimal value.';
    };

    f.initMnemonicPreviousEle = function(parentNode, flexOrder)
    {
        v.mnemonicPreviousEle = g.ele.createAndAppend(
            'button', parentNode, flexOrder);

        v.mnemonicPreviousEle.style.width = '4.5ch';
        v.mnemonicPreviousEle.style['text-align'] = 'center';
        v.mnemonicPreviousEle.style.padding = '0';
        v.mnemonicPreviousEle.style['margin-right'] = '0.2ch';
        v.mnemonicPreviousEle.title = 'Select previous mnemonic.';
    };
    f.initMnemonicInputEle = function(parentNode, flexOrder)
    {
        v.mnemonicInputEle = g.ele.createAndAppend(
            'input', parentNode, flexOrder);

        v.mnemonicInputEle.style.width = '4.5ch';
        v.mnemonicInputEle.style['text-align'] = 'center';
        v.mnemonicInputEle.style.padding = '0';
        v.mnemonicInputEle.style['margin-right'] = '0.2ch';
        v.mnemonicInputEle.style['font-weight'] = 'bold';
        v.mnemonicInputEle.type = 'text';
        v.mnemonicInputEle.placeholder = 'mne';
        v.mnemonicInputEle.title = 'Enter mnemonic.';
    };
    f.initMnemonicNextEle = function(parentNode, flexOrder)
    {
        v.mnemonicNextEle = g.ele.createAndAppend(
            'button', parentNode, flexOrder);

        v.mnemonicNextEle.style.width = '4.5ch';
        v.mnemonicNextEle.style['text-align'] = 'center';
        v.mnemonicNextEle.style.padding = '0';
        v.mnemonicNextEle.title = 'Select next mnemonic.';
    };
    f.initMnemonicTitleEle = function(parentNode, flexOrder)
    {
        v.mnemonicTitleEle = g.ele.createAndAppend(
            'span', parentNode, flexOrder);

        v.mnemonicTitleEle.style['font-weight'] = 'bold';
        v.mnemonicTitleEle.style['margin-bottom'] = '0.4ch';
    };

    f.initOpCodeEleContent = function()
    {
        f.initOpCodeHexEle();
        f.initOpCodeSepEle();
        f.initOpCodeDecEle();
    };
    f.initOpCodeEle = function(parentNode, flexOrder)
    {
        v.opCodeEle = g.ele.createAndAppend(
            'div', parentNode, flexOrder, 'row');

        f.initOpCodeEleContent();
    };

    f.initMnemonicEleContent = function(parentNode)
    {
        f.initMnemonicPreviousEle(parentNode, 1);
        f.initMnemonicInputEle(parentNode, 2);
        f.initMnemonicNextEle(parentNode, 3);
    };
    f.initMnemonicEle = function(parentNode, flexOrder)
    {
        v.mnemonicEle = g.ele.createAndAppend(
            'div', parentNode, flexOrder, 'row');

        f.initMnemonicEleContent(v.mnemonicEle);
    };

    f.initMiddleLeftTopEleContent = function()
    {
        f.initMnemonicEle(v.middleLeftTopEle, 1);
        f.initOpCodeEle(v.middleLeftTopEle, 2)
    };
    f.initMiddleLeftTopEle = function()
    {
        v.middleLeftTopEle = g.ele.createAndAppend(
            'div', v.middleLeftEle, 2, 'row');

        v.middleLeftTopEle.style['justify-content'] = 'space-between';
        v.middleLeftTopEle.style['margin-bottom'] = '0.4ch';

        f.initMiddleLeftTopEleContent();
    };

    f.initAddrModeEle = function()
    {
        v.addrModeEle = g.ele.createAndAppend('div', v.middleLeftEle, 2);

        v.addrModeEle.style.border = '1px solid black';
    };

    f.initTopEleContent = function()
    {
        v.topEle.textContent = 'RhinoDevel\'s Interactive 6502 Reference Card';
    };
    f.initTopEle = function()
    {
        v.topEle = g.ele.createAndAppend('div', v.mainEle, 1);

        v.topEle.style['font-weight'] = 'bold';

        f.initTopEleContent();
    };

    f.initMiddleLeftEleContent = function()
    {
        f.initMiddleLeftTopEle();
        f.initAddrModeEle();
    };
    f.initMiddleLeftEle = function()
    {
        v.middleLeftEle = g.ele.createAndAppend(
            'div', v.middleEle, 1, 'column');

        v.middleLeftEle.style['margin-right'] = '0.4ch';

        f.initMiddleLeftEleContent();
    };

    f.initMiddleRightTopEleContent = function()
    {
        f.initCycleEle(v.middleRightTopEle, 1);
		f.initByteCountEle(v.middleRightTopEle, 2);
        f.initFlagsEle(v.middleRightTopEle, 3);
    };
    f.initMiddleRightTopEle = function()
    {
        v.middleRightTopEle = g.ele.createAndAppend(
            'div', v.middleRightEle, 1, 'row');

        v.middleRightTopEle.style['justify-content'] = 'flex-end';
        v.middleRightTopEle.style['margin-bottom'] = '0.4ch';

        f.initMiddleRightTopEleContent();
    };

    f.initMiddleRightEleContent = function()
    {
        f.initMiddleRightTopEle();
        f.initMnemonicTitleEle(v.middleRightEle, 2);
        f.initCodeEquivEle(v.middleRightEle, 3);
    };
    f.initMiddleRightEle = function()
    {
        v.middleRightEle = g.ele.createAndAppend(
            'div', v.middleEle, 2, 'column');
        v.middleRightEle.style.width = '52ch';

        f.initMiddleRightEleContent();
    };

    f.initMiddleEleContent = function()
    {
        f.initMiddleLeftEle();
        f.initMiddleRightEle();
    };
    f.initMiddleEle = function()
    {
        v.middleEle = g.ele.createAndAppend('div', v.mainEle, 2, 'row');

        f.initMiddleEleContent();
    };

    f.initBottomEleContent = function()
    {
        v.bottomEle.innerHTML = 'By '
            + '<a target="_blank" href="'
                + 'https://photorhino.wordpress.com/contact-us/'
            + '" title="'
                + 'Send me a message!'
            + '">'
                + 'Marcel Timm'
            + '</a>'
            + ', 2020.'
            + ' Visit'
            + '&nbsp;'
            + '<a target="_blank" href="'
                + 'http://www.rhinodevel.com/'
            + '" title="'
                + 'Visit RhinoDevel&apos;s Blog!'
            + '">'
                + 'RhinoDevel.com'
            + '</a>.'
            + ' Follow&nbsp;me&nbsp;on'
            + '&nbsp;'
            + '<a target="_blank" href="'
                + 'http://www.github.com/RhinoDevel/'
            + '" title="'
                + 'Follow me on GitHub!'
            + '">'
                + 'GitHub'
            + '</a>.';
    };
    f.initBottomEle = function()
    {
        v.bottomEle = g.ele.createAndAppend('div', v.mainEle, 3);

        v.bottomEle.style['font-style'] = 'italic';
        v.bottomEle.style['font-size'] = 'smaller';

        f.initBottomEleContent();
    };

    f.initMainEleContent = function()
    {
        f.initTopEle();        
        f.initMiddleEle();
        f.initBottomEle();
    };
    f.initMainEle = function()
    {
        v.mainEle = g.ele.createAndAppend('div', document.body, null, 'column');
        
        f.initMainEleContent();
    };
    f.initBody = function()
    {
    };

    f.onLoad = function()
    {
        f.initBody();
        f.initMainEle();

        rhino6502doc.initRefCard({
            data: {
                addrModes: rhino6502doc.addrModes,
                mnemonics: rhino6502doc.mnemonics,
                commands: rhino6502doc.commands,
                flagAffect: rhino6502doc.flagAffect
            },
            ele: {
                cycleCountMin: v.cycleCountMinEle,
                cycleAddOnBranch: v.cycleAddOnBranchEle,
                cycleAddOnPageCross: v.cycleAddOnPageCrossEle,
				byteCount: v.byteCountValEle,
                n: v.nValEle,
                v: v.vValEle,
                bitFive: v.bitFiveValEle,
                b: v.bValEle,
                d: v.dValEle,
                i: v.iValEle,
                z: v.zValEle,
                c: v.cValEle,
                codeEquiv: v.codeEquivEle,
                opCodeHex: v.opCodeHexEle,
                opCodeDec: v.opCodeDecEle,
                mnemonicInput: v.mnemonicInputEle,
                mnemonicPrevious: v.mnemonicPreviousEle,
                mnemonicNext: v.mnemonicNextEle,
                mnemonicTitle: v.mnemonicTitleEle,
                addrMode: v.addrModeEle
            },
            helpers: {
                obj: rhino6502doc.obj,
                ele: rhino6502doc.ele,
                num: rhino6502doc.num
            }
        });
    };

    window.addEventListener('load', f.onLoad);
}());
