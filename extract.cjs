const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
const contentPath = path.join(__dirname, 'src', 'data', 'content.js');

let appContent = fs.readFileSync(appPath, 'utf8');

// The content we want to extract is from "const content = {" down to "const stats = [...]"
// We know it's lines 6 to 868 approximately.
const lines = appContent.split('\n');

const startIndex = lines.findIndex(line => line.startsWith('const content = {'));
const endIndex = lines.findIndex(line => line.startsWith('function App() {'));

if (startIndex !== -1 && endIndex !== -1) {
  const dataLines = lines.slice(startIndex, endIndex);
  
  // modify 'const content' to 'export const content'
  dataLines[0] = dataLines[0].replace('const content', 'export const content');
  
  // modify 'const stats' to 'export const stats'
  for (let i = 0; i < dataLines.length; i++) {
    if (dataLines[i].startsWith('const stats = [')) {
      dataLines[i] = dataLines[i].replace('const stats', 'export const stats');
    }
  }
  
  fs.writeFileSync(contentPath, dataLines.join('\n'));
  console.log('Extracted content to src/data/content.js');
  
  // Now replace those lines in App.jsx with the import
  const newAppLines = [
    ...lines.slice(0, startIndex),
    "import { content, stats } from './data/content'",
    "",
    ...lines.slice(endIndex)
  ];
  
  fs.writeFileSync(appPath, newAppLines.join('\n'));
  console.log('Updated App.jsx with import');
} else {
  console.log('Could not find startIndex or endIndex');
}
