
// TODO: Add (dynamic) sample in new DIV.

// TODO: Add description about equiv. code.

// TODO: Add missing equiv. code lines (e.g. for BIT, CMP, etc.).

// Marcel Timm, RhinoDevel, 2020dec01

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

    var f = {},
        v = {},
        d = null, // To hold data.
        e = null, // To hold UI elements.
        h = null; // Helper objects.

    f.getAddrModeColor = function(index, isEnabled, isSelected)
    {
        if(isSelected)
        {
            return 'yellow';
        }
        if(isEnabled)
        {
            return index % 2 === 0 ? 'lightblue' : 'lightcyan';
        }
        return 'lightgray';
    };

    f.getFlagTextContent = function(flagAffect)
    {
        switch(flagAffect)
        {
            case d.flagAffect.none:
            {
                return '-';
            }
            case d.flagAffect.zero:
            {
                return '0';
            }
            case d.flagAffect.one:
            {
                return '1';
            }
            case d.flagAffect.some:
            {
                return 'x';
            }
            case d.flagAffect.bitSix:
            {
                return '6';
            }
            case d.flagAffect.bitSeven:
            {
                return '7';
            }

            default:
            {
                throw 'Unsupported flag-affect value!';    
            }
        }
    }

    f.getPreviousMnemonic = function(mnemonic)
    {
        var mnemonicIndex = v.mnemonics.indexOf(mnemonic);
    
        if(mnemonicIndex === 0)
        {
            mnemonicIndex = v.mnemonics.length - 1;
        }
        else
        {
            --mnemonicIndex;
        }
        return v.mnemonics[mnemonicIndex];
    };
    f.getNextMnemonic = function(mnemonic)
    {
        var mnemonicIndex = 
                (v.mnemonics.indexOf(mnemonic) + 1) % v.mnemonics.length;

        return v.mnemonics[mnemonicIndex];
    };

    f.activateCommand = function(cmd)
    {
        var addrMode = d.addrModes.find(
                function(m)
                {
                    return m.id === cmd.addrModeId;
                });

        v.cmdIndex = d.commands.indexOf(cmd); // Kind of stupid..

        e.opCodeHex.value =
            cmd.opCode.toString(16).toUpperCase().padStart(2, '0');
        e.opCodeDec.value = String(cmd.opCode);

        e.mnemonicPrevious.textContent = f.getPreviousMnemonic(cmd.mnemonic);
        e.mnemonicInput.value = cmd.mnemonic;
        e.mnemonicNext.textContent = f.getNextMnemonic(cmd.mnemonic);

        if(h.obj.isObj(e.mnemonicTitle))
        {
            e.mnemonicTitle.textContent = 
                d.mnemonics[v.mnemonics.indexOf(cmd.mnemonic)].title;
        }

        e.addrMode.querySelector('input[id="' + cmd.addrModeId + '"]').checked
            = true;       
        v.addrModeDivs.forEach(
            function(divEle, indexOfDiv)
            {
                var labelEle = divEle.querySelector('label'),
                    radioEle = labelEle.querySelector('input');
                
                if(v.mnemonicToAddrModeIds[cmd.mnemonic].indexOf(radioEle.id)
                    === -1)
                {
                    labelEle.style['background-color'] = f.getAddrModeColor(
                        indexOfDiv, false, radioEle.checked/*false*/);
                    labelEle.style['color'] = 'gray';
                    radioEle.disabled = true;
                }
                else
                {
                    labelEle.style['background-color'] = f.getAddrModeColor(
                        indexOfDiv, true, radioEle.checked);
                    labelEle.style['color'] = '';
                    radioEle.disabled = false;
                }
            });

        e.cycleCountMin.textContent = String(cmd.cycleCountMin);
        
        e.cycleAddOnPageCross.textContent = cmd.cycleAddOnPageCross
            ? '+1'
            : '';
        e.cycleAddOnBranch.textContent = cmd.cycleAddOnBranch
            ? '+1'
            : '';

        e.n.textContent = f.getFlagTextContent(cmd.n);
        e.v.textContent = f.getFlagTextContent(cmd.v);
        e.b.textContent = f.getFlagTextContent(cmd.b);
        e.d.textContent = f.getFlagTextContent(cmd.d);
        e.i.textContent = f.getFlagTextContent(cmd.i);
        e.z.textContent = f.getFlagTextContent(cmd.z);
        e.c.textContent = f.getFlagTextContent(cmd.c);

        h.ele.clearContent(e.codeEquiv);
        if(addrMode.codeEquiv.length > 0)
        {
            h.ele.createAndAppend('div', e.codeEquiv).textContent =
                addrMode.codeEquiv;
        }
        if(cmd.codeEquiv.length > 0)
        {
            h.ele.createAndAppend('div', e.codeEquiv).textContent =
                cmd.codeEquiv;
        }
    };
    f.activateFirstCommand = function(mnemonic)
    {
        f.activateCommand(
            d.commands.find(
                function(c)
                {
                    return c.mnemonic === mnemonic;
                }));
    };
    f.activateCommandWithAddrMode = function(mnemonic, addrModeId)
    {
        f.activateCommand(
            d.commands.find(
                function(c)
                {
                    return c.mnemonic === mnemonic
                        && c.addrModeId === addrModeId;
                }));
    };

    f.activateCommandTryAddrMode = function(mnemonic, addrModeId)
    {
        if(v.mnemonicToAddrModeIds[mnemonic].indexOf(addrModeId) === -1)
        {
            f.activateFirstCommand(mnemonic);
            return;
        }
        f.activateCommandWithAddrMode(mnemonic, addrModeId);
    };

    f.tryActivateCommand = function(v)
    {
        var cmd = null;

        if(!h.num.isNum(v))
        {
            return;
        }
        if(v < 0 || v > 255)
        {
            return;
        }

        cmd = d.commands.find(
            function(c)
            {
                return c.opCode === v;
            });

        if(typeof cmd === 'undefined') // Happens for unsupported opcodes.
        {
            return;
        }
        f.activateCommand(cmd);
    };

    f.onUserSelectedAddrMode = function(addrMode)
    {
        f.activateCommand(
            d.commands.find(
                function(c)
                {
                    return c.mnemonic === d.commands[v.cmdIndex].mnemonic
                        && c.addrModeId === addrMode.id;
                }));
    };

    f.onUserModifiedOpCodeHex = function()
    {
        f.tryActivateCommand(parseInt(e.opCodeHex.value, 16));
    };
    f.onUserModifiedOpCodeDec = function()
    {
        f.tryActivateCommand(parseInt(e.opCodeDec.value, 10));
    };

    f.onUserModifiedMnemonic = function()
    {
        var val = e.mnemonicInput.value,
            mnemonicIndex = -1,
            cmd = null;

        if(val.length !== 3)
        {
            return; // For performance.

        }
        val = val.toUpperCase();

        mnemonicIndex = v.mnemonics.indexOf(val);
        if(mnemonicIndex === -1)
        {
            return; // Value does not equal a supported mnemonic.
        }

        f.activateCommandTryAddrMode(val, d.commands[v.cmdIndex].addrModeId);
    };
    f.onUserClickedPreviousMnemonic = function()
    {
        f.activateCommandTryAddrMode(
            f.getPreviousMnemonic(d.commands[v.cmdIndex].mnemonic),
            d.commands[v.cmdIndex].addrModeId);
    };
    f.onUserClickedNextMnemonic = function()
    {
        f.activateCommandTryAddrMode(
            f.getNextMnemonic(d.commands[v.cmdIndex].mnemonic),
            d.commands[v.cmdIndex].addrModeId);
    };

    f.initAddrModes = function()
    {
        v.addrModeDivs = []; // DIV elements, one for each addr. mode.

        d.addrModes.forEach(
            function(a, indexOfA)
            {
                var divEle = h.ele.createAndAppend('div', e.addrMode),
                    labelEle = h.ele.createAndAppend('label', divEle),
                    radioEle = h.ele.createAndAppend('input', labelEle);

                labelEle.style.display = 'block';
                labelEle.style['background-color'] = f.getAddrModeColor(
                    indexOfA, true);
                labelEle.appendChild(
                    document.createTextNode(
                        a.title
                            + (a.comment.length > 0 
                                ? (' [' + a.comment + ']') 
                                : '')
                    ));

                radioEle.type = 'radio';
                radioEle.id = a.id;
                radioEle.name = 'addrMode';
                radioEle.value = a.id;

                radioEle.addEventListener(
                    'change', 
                    function()
                    {
                        f.onUserSelectedAddrMode(a);
                    });

                divEle.title = 'E.g.: ' + a.example;

                v.addrModeDivs.push(divEle);
            });
    };

    f.initOpCode = function()
    {
        e.opCodeHex.addEventListener('input', f.onUserModifiedOpCodeHex);
        e.opCodeDec.addEventListener('input', f.onUserModifiedOpCodeDec);

        e.opCodeHex.addEventListener('focus', e.opCodeHex.select);
        e.opCodeDec.addEventListener('focus', e.opCodeDec.select);
    };

    f.initMnemonic = function()
    {
        e.mnemonicInput.addEventListener('input', f.onUserModifiedMnemonic);
        e.mnemonicInput.addEventListener('focus', e.mnemonicInput.select);

        v.mnemonicToAddrModeIds = {};
        v.mnemonics = [];
        d.commands.forEach(
            function(c)
            {
                if(!(c.mnemonic in v.mnemonicToAddrModeIds))
                {
                    v.mnemonicToAddrModeIds[c.mnemonic] = [];
                    v.mnemonics.push(c.mnemonic);
                }
                v.mnemonicToAddrModeIds[c.mnemonic].push(c.addrModeId);
            });

        e.mnemonicPrevious.addEventListener(
            'click', f.onUserClickedPreviousMnemonic);
        e.mnemonicNext.addEventListener(
            'click', f.onUserClickedNextMnemonic);
    };

    f.init = function(p)
    {
        d = p.data;
        e = p.ele;
        h = p.helpers;

        v.cmdIndex = -1; // To always hold index of currently selected command.

        e.bitFive.textContent = f.getFlagTextContent(d.flagAffect.one);

        f.initOpCode();
        f.initMnemonic();
        f.initAddrModes();

        f.activateCommand(d.commands[0]);
    };

    rhino6502doc.initController = f.init;
}());
