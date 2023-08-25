import { SERVERADDRESS } from "../consts";
export default class RequestService {
    constructor() {

    }

    static async getAllMovieNews() {
        let response = await fetch(`${SERVERADDRESS}?method=allNews`, {
            method: 'GET',
        });

        let result = await response.json();
        
        return result;
    }
}