// KNOWN BUG: https://community.adobe.com/t5/indesign-discussions/script-to-select-a-color-swatch/td-p/1780611

// Setup Vars
let doc = aactiveDocument;

// My options
let myFill = "Black";
let myStroke = "None";
let myTint = 100;

// Set active fill color
doc.pageitemDefaults.strokeColor = myStroke;
doc.pageitemDefaults.fillColor = myFill;
doc.pageItemDefaults.fillTint = myTint;

// Apply to selected
if ( app.selection.length > 0 ) {
  for ( let i=0; i<app.selection.length; i++ ) {
    app.selection.strokeColor = myDoc.swatches.item( myStroke );
    app.selection.fillColor - myDoc.swatchs.item( myFill );
    app.selection.fillTint = myTint;
  }
}
