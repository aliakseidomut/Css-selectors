import { WorkbookItem } from "./interfaces";
import { Levels } from "./levels";
import levelsData from '../levels-data.json'
import { Workbook } from "./workbook";

class Editor {
  public addLineNumbers(editorClass: string): void {
    const ol = document.createElement('ol');
    ol.className = 'line-numbers';

    for(let i = 0; i < 20; i++) {
      ol.append(document.createElement('li'));
    }

    document.querySelector(`.${editorClass} .main`)?.prepend(ol);
  }
}

export class HTMLViewer extends Editor {
  public drawCodeExample(elements: WorkbookItem[]): void {
    const codeContainer: Element | null = document.querySelector('.html-viewer .code-area');
  
    if (codeContainer !== null) {
      codeContainer.innerHTML = '';
      codeContainer.innerHTML += '&lt;div class="workbook"&gt;<br>';
      elements.forEach(el => {
        codeContainer.append(this.createElementCode(el));
        codeContainer.innerHTML += '<br>';
      });
      codeContainer.innerHTML += '&lt;/div&gt;';
  
      codeContainer.addEventListener('mouseover', (event) => {
        this.codeMouseEventHandler(event);
      });
    
      codeContainer.addEventListener('mouseout', (event) => {
        this.codeMouseEventHandler(event);
      });
    }
  }

  private codeMouseEventHandler(event: Event): void {
    const item = event.target as HTMLElement;
    const elCode = item.getAttribute('elCode');
    
    if(elCode) {
      if(event.type === 'mouseover') {
        document.querySelector(`.workbook-item[elCode="${elCode}"]`)?.classList.add('item-active');
      } else if(event.type === 'mouseout') {
        document.querySelector(`.workbook-item[elCode="${elCode}"]`)?.classList.remove('item-active');
      }
    }
  }

  private createElementCode(item: WorkbookItem): HTMLElement {
    const span = document.createElement('span');
    span.setAttribute('elCode', item.elCode);
    span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} /&gt;`;
    
    if (item.class !== null) {
      span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} class="${item.class}" /&gt;`;
    } else if (item.id !== null) {
      span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} id="${item.id}" /&gt;`;
    } else if (item.attribute) {
      span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} ${item.attribute} /&gt;`;
    }

    return span;
  }
}

export class CSSEditor extends Editor {
  public drawEnterButton(): void {
    const enterButton = document.querySelector('.enter-button');
    if(enterButton !== null) {
      enterButton.addEventListener('click', () => {
        this.enterSelectorHandler();
      });
    }  
  }

  private enterSelectorHandler(): void {
    const button = document.querySelector('.enter-button');
    
    button?.classList.add('enter-button_active');
    setTimeout(() => {
      button?.classList.remove('enter-button_active');
    }, 100);
  
    this.checkSelector();
  }

  public addInputEvent() {
    const input = document.querySelector('input');
    input?.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.enterSelectorHandler();
      }
    });
  }

  private checkSelector(): void {
    const workbook = new Workbook();
    const htmlViewer = new HTMLViewer();
    const levels = new Levels();
  
    const input = document.querySelector('input');
  
    const inputSelector = input?.value; 
    let rightSelector = ''; 
    const nextLevel = +localStorage.currentLevel + 1;
    levelsData.forEach(obj => {
      if(obj.level === localStorage.currentLevel) {
        rightSelector = obj.rigthSelector;
      }
    });
  
    if(inputSelector === rightSelector) {
      if (!localStorage.completedLevels) {
        localStorage.setItem('completedLevels', `${localStorage.currentLevel},`);
      } else {
        localStorage.completedLevels += `${localStorage.currentLevel},`;
      }
  
      localStorage.currentLevel++;
      document.querySelector('.levels__li_active')?.classList.add('levels__li_completed');
      levels.drawLevelsSection(levelsData);
      if (levelsData[nextLevel - 1]) {
        workbook.drawItems(levelsData[localStorage.currentLevel - 1].elements);
        htmlViewer.drawCodeExample(levelsData[localStorage.currentLevel - 1].elements);
        levels.drawLevelDescription(levelsData[localStorage.currentLevel - 1]);
  
        if (input) {
          input.value = '';
        }
      }
    } else {
      document.querySelector('.editor')?.classList.add('shaking');
      setTimeout(() => {
        document.querySelector('.editor')?.classList.remove('shaking');
      },1000)
    }
  }
}