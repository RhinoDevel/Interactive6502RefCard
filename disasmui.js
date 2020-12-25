
// Marcel Timm, RhinoDevel, 2020dec23

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

    var g = rhino6502doc, // Shortcut
        f = {}, 
        v = {};

	f.initTopEleContent = function()
    {
        v.topEle.textContent = 'Disassembler';
    };
    f.initTopEle = function(parentNode, flexOrder)
    {
        v.topEle = g.ele.createAndAppend('div', parentNode, flexOrder);

        v.topEle.style['font-weight'] = 'bold';

        f.initTopEleContent();
    };
	f.initBinaryInputEle = function(parentNode, flexOrder)
	{
		v.binaryInputEle = g.ele.createAndAppend(
			'input', parentNode, flexOrder);
			
		v.binaryInputEle.title = 'Select binary source file to load.';
			
		v.binaryInputEle.type = 'file';
	};
	f.initOffsetInputEle = function(parentNode, flexOrder)
	{
		v.offsetInputEle = g.ele.createAndAppend('input', parentNode, flexOrder);
		
		v.offsetInputEle.title = 'Enter byte offset of code in loaded binary.';
		v.offsetInputEle.placeholder = 'byte offset';
		v.offsetInputEle.style['text-align'] = 'right';
		v.offsetInputEle.style['padding-left'] = '0.2ch';
		v.offsetInputEle.style['width'] = '10ch';
		
		v.offsetInputEle.type = 'number';
	};
	
	f.initOffsetEleContent = function()
	{
		v.offsetTitleEle = g.ele.createAndAppend('div', v.offsetEle, 1);
		
		v.offsetTitleEle.textContent = 'Byte offset:';
		v.offsetTitleEle.style['padding-right'] = '0.2ch';
		
		f.initOffsetInputEle(v.offsetEle, 2);
	};
	f.initOffsetEle = function(parentNode, flexOrder)
	{
		v.offsetEle = g.ele.createAndAppend('div', parentNode, flexOrder, 'row'); 
		
		f.initOffsetEleContent();
	};
	
	f.initCodeEle = function(parentNode, flexOrder)
	{
		v.codeEle = g.ele.createAndAppend(
			'div', parentNode, flexOrder, 'column');
		
		v.codeEle.style.border = '1px solid black';
		v.codeEle.style.width = '38ch';
		v.codeEle.style.height = '48ch';
		v.codeEle.style['overflow-y'] = 'scroll';
	};

    f.initMainEleContent = function()
    {
		f.initTopEle(v.mainEle, 1);
		f.initBinaryInputEle(v.mainEle, 2);
		f.initOffsetEle(v.mainEle, 3);
		f.initCodeEle(v.mainEle, 4);
    };
    f.initMainEle = function(parentNode, flexOrder)
    {
        v.mainEle = g.ele.createAndAppend(
			'div', parentNode, flexOrder, 'column');
        
        f.initMainEleContent();
    };
	
	f.getEles = function()
	{
		return {
			binaryInput: v.binaryInputEle,
			offsetInput: v.offsetInputEle,
			code: v.codeEle
		};
	};
	
	f.initAndGetEles = function(parentNode, flexOrder)
	{
		f.initMainEle(parentNode, flexOrder);
		
		return f.getEles();
	};
	
	g.disAsmUiInitAndGetEles = f.initAndGetEles;
}());
