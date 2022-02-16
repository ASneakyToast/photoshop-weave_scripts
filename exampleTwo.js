//
// Found on: https://www.kirupa.com/motiongraphics/scripting2.htm
//

let defaultRulerUnits = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

for ( a=1; a<3; a++ ) {
  let newDocRef = documents.add( 200, 200, 72.0, "My New Doc N#"+a, DocumentMode.RGB, DocumentFill.WHITE );
  newDocRef = null;
}

for ( a=1; a<3; a++ ) {
  activeDocument = documents[ documents.length-a ];
  let curDoc = activeDocument;
  let newLayer = curDoc.artlayers.add();
  newLayer.name = "Square Layer";
  
  let randomColor = new SolidColor;
    randomColor.rgb.red = Math.round( Math.random()*255 );
    randomColor.rgb.green = Math.round( Math.random()*255 );
    randomColor.rgb.blue = Math.round( Math.random()*255 );

  let selectionBounds = [[75,75],[125,75],[125,125],[75,125]];
  curDoc.selection.select( selectionBounds, SelectionType.REPLACE, 0, false );

  curDoc.selection.fill( randomColor );
  curDoc.selection.deselect();

  randomColor = null;

  for ( b=0; b<4; b++ ) {
    curDoc.layers[ 0 ].duplicate();
  }

  for ( b=0; b<5; b++ ) {
    curDoc.layers[ b ].rotate(( b+5 ) * 8 );
    curDoc.layers[ b ].opacity = 100-b*15;
  }
}

preferences.rulerUnits = defaultRulerUnits; // wow cleeeaan.
