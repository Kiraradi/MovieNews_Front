import createDomElement from "../../services/CreateDomElement ";
import './DrawPlugsList.css'
export default class DrawPlugsList {
    constructor(containet) {
        this.containet = containet;
        this.quantityPlugs = 3;
        this.drawUi();
    }

    drawUi() {
        this.containet.innerHTML = '';
        for (let i = 1; i <= this.quantityPlugs; i++) {
            const plugWrapperEl = createDomElement('li', 'plug-wrapper');
            const plugTitle = createDomElement('div2', 'plug-title');
            const plugImg = createDomElement('div', 'plug-img');
            const plugDescriptionList = createDomElement('ul', 'plug-description');
            const plugDescriptionItemFerst = createDomElement('li', 'plug-description-item');
            const plugDescriptionItemSecond = createDomElement('li', 'plug-description-item');
            const descriptionWrapper = createDomElement('div', 'description-wrapper');

            plugDescriptionList.appendChild(plugDescriptionItemFerst);
            plugDescriptionList.appendChild(plugDescriptionItemSecond);
            descriptionWrapper.appendChild(plugImg);
            descriptionWrapper.appendChild(plugDescriptionList);

            plugWrapperEl.appendChild(plugTitle);
            plugWrapperEl.appendChild(descriptionWrapper);
            this.containet.appendChild(plugWrapperEl);
        }
    }
}