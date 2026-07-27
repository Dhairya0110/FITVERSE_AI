const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// Fix 1: Wrap finalizeOnboardingFlow in try-catch
const oldCode = `          // Finish Onboarding\r\n          finalizeOnboardingFlow();`;
const newCode = `          // Finish Onboarding\r\n          try {\r\n            finalizeOnboardingFlow();\r\n          } catch (err) {\r\n            console.error("Onboarding finalize error:", err);\r\n            alert("Error: " + err.message);\r\n          }`;

if (content.includes(oldCode)) {
  content = content.replace(oldCode, newCode);
  console.log('Fix 1 applied: try-catch around finalizeOnboardingFlow');
} else {
  console.log('Fix 1: Pattern not found, checking without \\r\\n...');
  const oldCode2 = `          // Finish Onboarding\n          finalizeOnboardingFlow();`;
  if (content.includes(oldCode2)) {
    content = content.replace(oldCode2, newCode.replace(/\r\n/g, '\n'));
    console.log('Fix 1 applied (LF): try-catch around finalizeOnboardingFlow');
  } else {
    console.log('Fix 1: Could not find pattern');
  }
}

// Fix 2: Fix broken SVG template interpolation in renderWeightSVGChart
// The \${...} should be ${...} for template literal interpolation
const svgFixes = [
  ['\\\\${gridLines}', '${gridLines}'],
  ['\\\\${areaPointsStr}', '${areaPointsStr}'],
  ['\\\\${pointsStr}', '${pointsStr}'],
  ['\\\\${markerTags}', '${markerTags}'],
  ['\\\\${textLabels}', '${textLabels}'],
];

let fixCount = 0;
for (const [old, newStr] of svgFixes) {
  if (content.includes(old)) {
    content = content.replace(old, newStr);
    fixCount++;
  }
}
console.log(`Fix 2: Fixed ${fixCount} broken SVG template interpolations`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('File saved successfully.');
