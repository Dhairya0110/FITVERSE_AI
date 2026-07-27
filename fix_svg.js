const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// Look for the renderWeightSVGChart SVG template section and fix interpolation
// The issue is \${gridLines} should be ${gridLines} etc.
const fixes = [
  ['\\${gridLines}', '${gridLines}'],
  ['\\${areaPointsStr}', '${areaPointsStr}'],
  ['\\${pointsStr}', '${pointsStr}'],
  ['\\${markerTags}', '${markerTags}'],
  ['\\${textLabels}', '${textLabels}'],
];

let fixCount = 0;
for (const [oldStr, newStr] of fixes) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fixCount++;
    console.log(`Fixed: ${oldStr} -> ${newStr}`);
  } else {
    console.log(`Not found: ${oldStr}`);
  }
}

console.log(`Total fixes applied: ${fixCount}`);
if (fixCount > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('File saved.');
} else {
  console.log('No changes needed.');
}
