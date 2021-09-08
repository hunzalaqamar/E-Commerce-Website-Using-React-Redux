
class Authentication{
    constructor() {
        this.authenticated = true
    }

    handleAuthentication(value){
        this.authenticated = value
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Authentication();
