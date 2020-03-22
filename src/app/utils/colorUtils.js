var add = function(number1,number2){
	return number1 + number2;
}

var subtract = function(number1,number2){
	return number1 - number2 ;
}

function getComponentsAsArray(hexColor){
	return [hexColor.substring(1,3),hexColor.substring(3,5),hexColor.substring(5,7)]
}

function getOffsettedValue(baseTenColor,offset,operationCallback){
	var offsettedValue = operationCallback(baseTenColor,offset);
  if(offsettedValue < 0){
  	offsettedValue = 0;
  }
  if(offsettedValue > 255 ){
  	offsettedValue = 255;
  }
  return offsettedValue;
}

function generateColorArray(initialHexColor, size,adjustmentIndex,operation){
	var rgbArray = getComponentsAsArray(initialHexColor);
  var returnRGBArray = []
  var redBaseTen = parseInt(rgbArray[0],16) ;
  var blueBaseTen = parseInt(rgbArray[1],16);
  var greenBaseTen = parseInt(rgbArray[2],16);
  for(var i=0;i<size;i++){  	
   		redBaseTen = getOffsettedValue(redBaseTen,adjustmentIndex,operation);
		  blueBaseTen = getOffsettedValue(blueBaseTen,adjustmentIndex,operation);
		  greenBaseTen = getOffsettedValue(greenBaseTen,adjustmentIndex,operation);
  		returnRGBArray[i] = "#"+getBase16Color(redBaseTen)+getBase16Color(blueBaseTen)+getBase16Color(greenBaseTen);
  }
  return returnRGBArray;
}

function autoGenerateColor(){
	var red = Math.round(Math.random() *255);
  var blue = Math.round(Math.random() * 255);
  var green = Math.round(Math.random() * 255);
  return "#"+getBase16Color(red)+getBase16Color(blue)+getBase16Color(green);
}

function autoGenerateLightColor(){
  var red = Math.round(Math.random() * 50);
  var blue = Math.round(Math.random() * 50);
  var green = Math.round(Math.random() * 50);
  return "#"+getBase16Color(red)+getBase16Color(blue)+getBase16Color(green);
}


function getBase16Color(baseTenColorCode){
  var hexColor = baseTenColorCode.toString(16)
  if(hexColor.length == 1){
    hexColor = "0"+hexColor;
  }
  return hexColor
}

function getRandomColorPallette(initialHexColor,size,adjustmentIndex,operation){
	return generateColorArray(initialHexColor,size,adjustmentIndex,operation)

}

var defaultColorPallet;   //global default pallette generated once

function getDefaultColorPalette(){
  if(typeof(defaultColorPallet) === 'undefined'){
    var sizeOfPallete = 10;
    var offsetBetweenEachShade = 30;
    var callbackToApplyOffset = this.add; 
    defaultColorPallet = getRandomColorPallette(autoGenerateLightColor(),sizeOfPallete,offsetBetweenEachShade,callbackToApplyOffset);
  }
  console.log("default color pallette " +defaultColorPallet)
  return defaultColorPallet;
}


let colorUtils = {
  add : this.add,
  subtract : this.subtract,
  getRandomColorPallette : this.getRandomColorPallette,
  autoGenerateColor : this.autoGenerateColor,
  autoGenerateLightColor :this.autoGenerateLightColor,
  getDefaultColorPalette : this.getDefaultColorPalette
} 



