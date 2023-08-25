import MovieNews from "./js/components/movieNews/movieNews";

const wrapper = document.querySelector('.movieNews-wrapper');
const movieNews = new MovieNews(wrapper);
movieNews.drawUi();

if (navigator.serviceWorker) {
	window.addEventListener('load', async () => {
		try {
			if (navigator.serviceWorker) {
				await navigator.serviceWorker.register(
				'/service.worker.js'
				);
				console.log('sw registered');
			}
			// await registration.unregister();
		} catch (e) {
			console.log(e);
		}
	});
}