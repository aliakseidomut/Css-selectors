import { HTMLViewer } from "./editor";
import { LevelData } from "./interfaces";
import { Workbook } from "./workbook";

export class Levels {
    public drawLevelsSection(data: LevelData[]): void {
        const levelsWrapper = document.querySelector('.levels-wrapper');

        if(levelsWrapper) {
            levelsWrapper.innerHTML = '';
        }

        const levelsH = document.createElement('h2');
        levelsH.className = 'levels__h';
        levelsH.textContent = 'Level';
    
        const levelsUl = document.createElement('ul');
        levelsUl.className = 'levels__ul';
    
        data.forEach(el => {
            const levelsLi = document.createElement('li');
            levelsLi.textContent = el.level;
            levelsLi.className = 'levels__li';

            if(el.level === localStorage.currentLevel) {
                levelsLi.classList.add('levels__li_active');
            }

            if(localStorage.completedLevels && localStorage.completedLevels.split(',').includes(el.level)) {
                levelsLi.classList.add('levels__li_completed');
            }

            levelsLi.addEventListener('click', () => {
                this.levelsClickHandler(el);
                document.querySelectorAll('.levels__li').forEach(el => {
                    el.classList.remove('levels__li_active');
                });
                levelsLi.classList.add('levels__li_active');
                localStorage.setItem('currentLevel', el.level);
            });
            levelsUl.append(levelsLi);
        });
    
        levelsWrapper?.append(levelsH, levelsUl);
    }

    private levelsClickHandler(el: LevelData): void {
        const workbook = new Workbook();
        const workbookContainer = document.querySelector('.workbook');
        const htmlViewer = new HTMLViewer();

        if(workbookContainer !== null) {
            workbookContainer.innerHTML = '';
        }

        workbook.drawItems(el.elements);
        htmlViewer.drawCodeExample(el.elements);
        this.drawLevelDescription(el);
    }

    public drawLevelDescription(data:LevelData): void {
        const levelDescription = document.querySelector('.level-description')

        if(levelDescription !== null) {
            levelDescription.textContent = data.description;
        }
    }
}