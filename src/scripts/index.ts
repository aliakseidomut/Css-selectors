import '../../src/index.html'
import '../styles/index.scss'
import { Levels } from './levels';
import levelsData from '../levels-data.json'
import { Workbook } from './workbook'
import { HTMLViewer, CSSEditor } from './editor';

const workbook = new Workbook();
const levels = new Levels()
const htmlViewer = new HTMLViewer();
const cssEditor = new CSSEditor();

if(!localStorage.currentLevel) {
  localStorage.setItem('currentLevel', '1');
}

workbook.drawItems(levelsData[localStorage.currentLevel - 1].elements);

levels.drawLevelDescription(levelsData[localStorage.currentLevel - 1]);
levels.drawLevelsSection(levelsData);

htmlViewer.addLineNumbers('html-viewer');
htmlViewer.drawCodeExample(levelsData[localStorage.currentLevel - 1].elements);

cssEditor.drawEnterButton();
cssEditor.addLineNumbers('css-editor');
cssEditor.addInputEvent();