import GOBALS from '../GOBALS';

export default class UserModel {
    constructor() {}

    async getLogin(username,password) {
        return fetch(GOBALS.URL + 'user/getLogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_username: username,
                user_password: password
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

    async getUserByUserCode(user_code) {
        return fetch(GOBALS.URL + 'user/getUserByUserCode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_code: user_code
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