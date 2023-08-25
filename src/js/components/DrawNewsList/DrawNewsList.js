import createDomElement from "../../services/CreateDomElement ";
import './DrawNewsList.css';

export default class DrawNewsList {
    constructor () {

    }

    static drawUi(container, newsArray) {
        newsArray.forEach(news => {
            const newsElement = this.createNewsElement(news)
            container.appendChild(newsElement);
        })
    }

    static createNewsElement(news) {
        const newsWrapper = createDomElement('li', 'news-Wrapper');
        const newsImg = createDomElement('img', 'news-Img');
        const newsTitle = createDomElement('h2', 'news-Title');
        const newsDescription = createDomElement('div', 'news-Description');
        const descriptionWrapper = createDomElement('div', 'description-wrapper');

        if(!news.img) {
            newsImg.setAttribute('src', 'https://basket-03.wb.ru/vol289/part28914/28914398/images/big/1.jpg');
        }
        newsTitle.textContent = news.title;
        newsDescription.textContent = news.description;
        newsWrapper.appendChild(newsTitle);

        descriptionWrapper.appendChild(newsImg);
        descriptionWrapper.appendChild(newsDescription);
        newsWrapper.appendChild(descriptionWrapper)
        return newsWrapper;
    }
}