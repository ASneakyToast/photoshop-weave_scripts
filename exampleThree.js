//
// Found: https://www.smashingmagazine.com/2013/07/introduction-to-photoshop-scripting/
// Description: Prime ps with an image on a singe layer and let it make a snowflake by copying & rotating
//



//
/* Example code without error handling 
//

let originalStem = app.activeDocument.activeLayer;

// let stemsAmount = prompt( "Processing ""+originalStem.name+""nHow many stems do you need?", 12 ); // Option 1, less specifics
let stemsAmount = prompt( "How many stems do you need?", 12, "Processing "+originalStem.name ); // Option 2, more specific
// originalStem.name is the layer name

let angle = 360 / stemsAmount;

for ( let i=1; i<stemsAmount; i++ ) {
  // Starts from 1 because we already have the first layer ( the og stem )

  // Create new stem and rotate it
  let newStem = originalStem.duplicate();
  newStem.rotate( angle * i, AnchorPosition.BOTTOMCENTER );
}



//
// With error handling
//

let originalStem = app.activeDocument.activeLayer;

let stemsAmount = prompt( "How many stems do you need?", 12, "Processing "+originalStem.name );

while ( isNaN( stemsAmount ) || stemsAmount <= 0 || stemsAmount > 100 ) {
  if ( stemsAmount == null ) break;

  alert( "Please enter number in range from 2 to 100" );
  let stemsAmount = prompt( "How many stems do you need?", 12, "Processing "+originalStem.name );
}
  
if ( stemsAmount != null ) {

  let angle = 360 / parseInt( stemsAmount );

  let stemsGroup = appactiveDocument.layerSets.add();
      stemsGroup.name = originalStem.name + " ("+stemsAmount+" stems)";
  originalStem.move( stemsGroup, ElementPlacement.INSIDE );

  for ( let i=1; i<stemsAmount; i++ ) {
    let newStem = originalStem.duplicate();
    newStem.rotate( angle * i, AnchorPosition.BOTTOMCENTER );
    newStem.name = originalStem.name + " " + ( i + 1 );
    newStem.move( stemsGroup, ElementPlacement.PLACEATEND );
  }

  // Need to target original layer since we started from it
  originalStem.name += " 1";
}
