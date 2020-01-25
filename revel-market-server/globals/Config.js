const internal = {};

module.exports = internal.Global =  class {
    constructor() { 
        this.SERVER_URL = 'http://localhost:5001' 
        this.CLIENT_URL = 'http://localhost:3000' 
    } 
 
     getServerUrl(){
        return this.SERVER_URL
    }

    getClientUrl(){
        return this.CLIENT_URL
    }

    getInt2Text(val){
        return ('0000000000000000'+val).slice(-16);
    }
}