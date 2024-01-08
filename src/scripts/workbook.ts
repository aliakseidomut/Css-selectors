import { WorkbookItem } from "./interfaces";

export class Workbook {
  public drawItems(elements: WorkbookItem[]): void {
    const workbook = document.querySelector('.workbook');
    if(workbook !== null) {
      workbook.innerHTML = '';
      
      elements.forEach(el => workbook.append(this.createItem(el)));
      
      workbook.addEventListener('mouseover', (event) => {
        this.itemMouseEventHandler(event);
      });

      workbook.addEventListener('mouseout', (event) => {
        this.itemMouseEventHandler(event);
      });
    
    }
  }

  private itemMouseEventHandler(event: Event): void {
    const item = event.target as HTMLElement;
    const elCode = item.getAttribute('elCode');
    if(elCode) {
      if(event.type === 'mouseover') {
        document.querySelector(`span[elCode="${elCode}"]`)?.classList.add('span-active');
        item.classList.add('item-active');
      } else if(event.type === 'mouseout') {
        document.querySelector(`span[elCode="${elCode}"]`)?.classList.remove('span-active');
        item.classList.remove('item-active');
      }
    }
  }

  private createItem(data: WorkbookItem): HTMLElement {
    const item = document.createElement(data.tagName);
    item.setAttribute('elCode', data.elCode);
    item.setAttribute('data-hint', `<${item.tagName.toLowerCase()}></${item.tagName.toLowerCase()}>`);    
    
    if (data.class !== null) {
      item.setAttribute('data-hint', `<${item.tagName.toLowerCase()} class="${data.class}"></${item.tagName.toLowerCase()}>`);    
    } else if (data.id !== null) {
      item.setAttribute('data-hint', `<${item.tagName.toLowerCase()} id="${data.id}"></${item.tagName.toLowerCase()}>`);
    } else if (data.attribute) {
      item.setAttribute('data-hint', `<${item.tagName.toLowerCase()} ${data.attribute}"></${item.tagName.toLowerCase()}>`);
    }
    
    item.classList.add('workbook-item');
    if(data.class !== null) {
      item.classList.add(data.class);
    }
    if(data.id !== null) {
      item.id = data.id;
    }
    if(data.animation) {
      item.classList.add('necessary-element');
    }
    if(data.attribute) {
      item.setAttribute('green', 'true');
    }
    return item;
  }
}

