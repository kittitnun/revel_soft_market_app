import GOBALS from '../GOBALS';

export default class NewsModel {
    constructor() {}

    async getNewsBy() {
        return fetch(GOBALS.URL + 'news/getNewsBy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }else{
                return false;
            }
        }).catch((error) => {
            return false;
        });
    }

    async getNewsByNewsCode(code) {
        return fetch(GOBALS.URL + 'news/getNewsByNewsCode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                news_code: code
            })
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }else{
                return false;
            }
        }).catch((error) => {
            return false;
        });
    }
}