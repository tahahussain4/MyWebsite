var defaultColorPallet,add=function(t,e){return t+e},subtract=function(t,e){return t-e};function getComponentsAsArray(t){return[t.substring(1,3),t.substring(3,5),t.substring(5,7)]}function getOffsettedValue(t,e,o){var r=o(t,e);return r<0&&(r=0),r>255&&(r=255),r}function generateColorArray(t,e,o,r){for(var a=getComponentsAsArray(t),l=[],n=parseInt(a[0],16),u=parseInt(a[1],16),s=parseInt(a[2],16),d=0;d<e;d++)n=getOffsettedValue(n,o,r),u=getOffsettedValue(u,o,r),s=getOffsettedValue(s,o,r),l[d]="#"+getBase16Color(n)+getBase16Color(u)+getBase16Color(s);return l}function autoGenerateColor(){var t=Math.round(255*Math.random()),e=Math.round(255*Math.random()),o=Math.round(255*Math.random());return"#"+getBase16Color(t)+getBase16Color(e)+getBase16Color(o)}function autoGenerateLightColor(){var t=Math.round(50*Math.random()),e=Math.round(50*Math.random()),o=Math.round(50*Math.random());return"#"+getBase16Color(t)+getBase16Color(e)+getBase16Color(o)}function getBase16Color(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e}function getRandomColorPallette(t,e,o,r){return generateColorArray(t,e,o,r)}function getDefaultColorPalette(){if(void 0===defaultColorPallet){var t=this.add;defaultColorPallet=getRandomColorPallette(autoGenerateLightColor(),10,30,t)}return console.log("default color pallette "+defaultColorPallet),defaultColorPallet}let colorUtils={add:this.add,subtract:this.subtract,getRandomColorPallette:this.getRandomColorPallette,autoGenerateColor:this.autoGenerateColor,autoGenerateLightColor:this.autoGenerateLightColor,getDefaultColorPalette:this.getDefaultColorPalette};