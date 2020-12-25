
// Marcel Timm, RhinoDevel, 2020dec23

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

	f.getBytesStr = function(index, length)
	{
		var retVal = '',
			i = 0;
		
		while(i < length && index + i < v.binary.length)
		{
			
			retVal += v.binary[index + i].toString(16).toUpperCase().padStart(
																		2, '0');
			
			++i;
			if(i === length)
			{
				break;
			}
			retVal += ' ';
		}
		
		return retVal;
	};
	
	f.getAddrModeStr = function(addrMode, index)
	{
		var retVal = null;
		
		switch(addrMode.id)
		{
			case '11': // Implied
			{
				retVal = '';
				break;
			}
			case '12': // Accumulator
			{
				retVal = 'A';
				break;
			}
			
			case '21': // # Immediate
			{
				retVal = '#' + '$' + f.getBytesStr(index, 1);
				break;
			}
			case '22': // Relative
			{
				retVal = '#' + '$' + f.getBytesStr(index, 1);
				break;
			}
			case '23': // Zero page
			{
				retVal = '$' + f.getBytesStr(index, 1);
				break;
			}
			case '24': // Zero page, X
			{
				retVal = '$' + f.getBytesStr(index, 1) + ',' + 'X';
				break;
			}
			case '25': // Zero page, Y
			{
				retVal = '$' + f.getBytesStr(index, 1) + ',' + 'Y';
				break;
			}
			case '26': // (Zero page, X)
			{
				retVal = '(' + '$' + f.getBytesStr(index, 1) + ',' + 'X' + ')';
				break;
			}
			case '27': // (Zero page), Y
			{
				retVal = '(' + '$' + f.getBytesStr(index, 1) + ')' + ',' + 'Y';
				break;
			}
			
			case '31': // Absolute
			{
				retVal = '$' + f.getBytesStr(index + 1, 1) 
								+ f.getBytesStr(index, 1);
				break;
			}
			case '32': // Absolute, X
			{
				retVal = '$' + f.getBytesStr(index + 1, 1) 
								+ f.getBytesStr(index, 1) + ',' + 'X';
				break;
			}
			case '33': // Absolute, Y
			{
				retVal = '$' + f.getBytesStr(index + 1, 1) 
								+ f.getBytesStr(index, 1) + ',' + 'Y';
				break;
			}
			case '34': // (Absolute)
			{
				retVal = '(' + '$' + f.getBytesStr(index + 1, 1) 
								+ f.getBytesStr(index, 1) + ')';
				break;
			}
			
			default:
			{
				retVal = 'ERROR';
				break;
			}
		}
		return retVal;
	};

    f.updateCode = function()
	{
		var i = -1,
		    cmd = null,
			addrMode = null,
			line = { bytes: null, code: null },
			lineCount = 0,
			lineEle = null,
			lineAddrEle = null,
			lineBytesEle = null,
			lineCodeEle = null,
			toAdd = 0,
			curSel = { lineEle: null, bgCol: '' };
		
		h.ele.clearContent(e.code);
		
		if(v.binary === null)
		{
			return;
		}
		
		i = v.offset;
		while(i < v.binary.length)
		{
			cmd = rhino6502doc.refCardTryGetCmd(v.binary[i]);
			
			if(cmd === null)
			{
				line.bytes = f.getBytesStr(i, 1);
				line.code = '???';
				toAdd = 1;
			}
			else
			{
				addrMode = rhino6502doc.refCardGetAddrMode(cmd);
			
				line.bytes = f.getBytesStr(i, addrMode.byteCount);

				line.code = cmd.mnemonic;
				line.code += ' ';

				if(i + addrMode.byteCount > v.binary.length)
				{
					line.code += 'INCOMPLETE'; 
				}
				else
				{
					line.code += f.getAddrModeStr(addrMode, i + 1);
				}
				
				toAdd = addrMode.byteCount;
			}
				
			lineEle = h.ele.createAndAppend('div', e.code, i + 1, 'row');
			lineEle.style['background-color'] = lineCount % 2 === 0
				? 'lightblue' : 'lightcyan';
			if(cmd !== null)
			{
				(function() // IIFE
				{
					var opCode = cmd.opCode;
					
					lineEle.addEventListener(
						'click',
						function()
						{
							if(rhino6502doc.refCardTryActivateCommand(opCode))
							{
								if(curSel.lineEle !== null)
								{
									curSel.lineEle.style['background-color'] =
										curSel.bgCol;
										
									if(curSel.lineEle === this)
									{
										curSel.lineEle = null;
										curSel.bgCol = '';
										return;
									}
								}
								
								curSel.lineEle = this;
								curSel.bgCol = this.style['background-color'];
									
								this.style['background-color'] = 'yellow';	
							}
						});
				}());
			}
			
			lineAddrEle = h.ele.createAndAppend('div', lineEle, 1);
			lineAddrEle.textContent = i.toString(16).toUpperCase().padStart(
				4, '0');
			lineAddrEle.style['border-right'] = '1px solid gray';
			lineAddrEle.style['padding-left'] = '0.4ch';
			lineAddrEle.style['padding-right'] = '0.2ch';
			lineAddrEle.style.width = '6ch';
			lineAddrEle.style['text-align'] = 'right';
	
			lineBytesEle = h.ele.createAndAppend('div', lineEle, 2);
			lineBytesEle.textContent = line.bytes;
			lineBytesEle.style['border-right'] = '1px solid gray';
			lineBytesEle.style['padding-left'] = '0.2ch';
			lineBytesEle.style['padding-right'] = '0.2ch';
			lineBytesEle.style.width = '10ch';
			
			lineCodeEle = h.ele.createAndAppend('div', lineEle, 3);
			lineCodeEle.textContent = line.code;
			lineCodeEle.style['padding-left'] = '0.2ch';
			lineCodeEle.style['padding-right'] = '0.4ch';
			lineCodeEle.style['flex'] = '1';
			
			i += toAdd;
			++lineCount;
		}
	};

	f.onBinaryLoad = function(dataUrl)
	{
		var arrBuf = dataUrl.target.result;
		
		v.binary = new Uint8Array(arrBuf);
		
		f.updateCode();
	};
	f.onBinaryChange = function()
	{
		var reader = new FileReader();
		
		v.binary = null;
		
		reader.onload = f.onBinaryLoad;
		
		reader.readAsArrayBuffer(this.files[0]);
	};
	f.initBinaryInput = function()
	{
		v.binary = null;
		
		e.binaryInput.addEventListener('change', f.onBinaryChange);
	};
	
	f.onOffsetChange = function()
	{
		var val = parseInt(e.offset.value, 10);
	
		if(!h.num.isInt(val) || val < 0)
		{
			val = 0;
		}
		
		if(val === v.offset)	
		{
			return;
		}
		v.offset = val;
		f.updateCode();
	};
	f.initOffset = function()
	{
		v.offset = 0;
		
		e.offset.value = v.offset;
		
		e.offset.addEventListener('input', f.onOffsetChange);
	};

    f.init = function(p)
    {
        d = p.data;
        e = p.ele;
        h = p.helpers;
		
		f.initBinaryInput();
		f.initOffset();
    };

    rhino6502doc.disAsmInit = f.init;
}());
