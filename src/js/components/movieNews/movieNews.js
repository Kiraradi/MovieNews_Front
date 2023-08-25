import createDomElement from "../../services/CreateDomElement ";
import RequestService from "../../services/RequestService";
import DrawNewsList from "../DrawNewsList/DrawNewsList";
import DrawPlugsList from "../DrawPlugsList/DrawPlugsList";
import './movieNews.css';

export default class MovieNews {
    constructor(container) {
        this.container = container;
    }

    drawUi() {
        const movieNewsContainer = createDomElement('div','movieNews-container');

        const movieNewsTitle = createDomElement('h1', 'movieNews-title');
        movieNewsTitle.textContent = 'Новости мира и кино';
        movieNewsContainer.appendChild(movieNewsTitle);

        const movieNewsRestartButton = createDomElement('button', 'movieNews-restart-button');
        movieNewsRestartButton.textContent = 'Обновить';
        movieNewsContainer.appendChild(movieNewsRestartButton);

        const movieNewsList = createDomElement('ul', 'movieNews-list');
        movieNewsContainer.appendChild(movieNewsList);
        this.PlugsList = new DrawPlugsList(movieNewsList);
        /*RequestService.getAllMovieNews().then((response)=>{
            DrawNewsList.drawUi(movieNewsList, response);
        })*/
        
        movieNewsRestartButton.addEventListener('click', (e) => {
            this.PlugsList.drawUi();
            RequestService.getAllMovieNews().then((response)=>{
                setTimeout(() => {
                    movieNewsList.innerHTML = '';
                    DrawNewsList.drawUi(movieNewsList, response)
                }, 1000);
                
            })
        })
        this.container.appendChild(movieNewsContainer);
    }
}