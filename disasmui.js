
// Marcel Timm, RhinoDevel, 2020dec23

/** To be run during page load to augment single global obj. with new property.
 */
(function() // IIFE
{
    'use strict';

    var g = rhino6502doc, // Shortcut
        f = {}, 
        v = {};

	f.initBinaryInputEle = function(parentNode, flexOrder)
	{
		v.binaryInputEle = g.ele.createAndAppend(
			'input', parentNode, flexOrder);
			
		v.binaryInputEle.title = 'Select binary source file to load.';
			
		v.binaryInputEle.type = 'file';
	};
	f.initOffsetEle = function(parentNode, flexOrder)
	{
		v.offsetEle = g.ele.createAndAppend('input', parentNode, flexOrder);
		
		v.offsetEle.title = 'Enter byte offset of code in loaded binary.';
		v.offsetEle.placeholder = 'byte offset';
		v.offsetEle.style['text-align'] = 'right';
		
		v.offsetEle.type = 'number';
	};
	
	f.initTopEleContent = function()
	{
		f.initBinaryInputEle(v.topEle, 1);
		f.initOffsetEle(v.topEle, 2);
	};
	f.initTopEle = function(parentNode, flexOrder)
	{
		v.topEle = g.ele.createAndAppend('div', parentNode, flexOrder, 'row'); 
		
		f.initTopEleContent();
	};
	
	f.initCodeEleContent = function()
	{
	};
	f.initCodeEle = function(parentNode, flexOrder)
	{
		v.codeEle = g.ele.createAndAppend(
			'div', parentNode, flexOrder, 'column');
		
		v.codeEle.style.border = '1px solid black';
		v.codeEle.style.width = '38ch';
		v.codeEle.style.height = '48ch';
		v.codeEle.style['overflow-y'] = 'scroll';
		
		f.initCodeEleContent();
	};

    f.initMainEleContent = function()
    {
		f.initTopEle(v.mainEle, 1);
		f.initCodeEle(v.mainEle, 2);
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
			offset: v.offsetEle,
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
