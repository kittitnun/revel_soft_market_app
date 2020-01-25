import GOBALS from '../GOBALS';

export default class ShopModel {
    constructor() {}

    async getShopBy(keyword) {
        return fetch(GOBALS.URL + 'shop/getShopBy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                keyword: keyword
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

    async getShopByShopCode(shop_code) {
        return fetch(GOBALS.URL + 'shop/getShopByShopCode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shop_code: shop_code
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