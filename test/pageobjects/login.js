import Page from "./page.js";

class LoginPage extends Page{
    open(path){
        return super.open("")
    }

    get textBoxUsername(){
        return $("#user-name");
    }

    get textBoxPassword(){
        return $("#password");
    }

    get buttonLogin(){
        return $("#login-button")
    }

    async login(username, password){
        await this.textBoxUsername.setValue(username)
        await this.textBoxPassword.setValue(password)
        await this.buttonLogin.click()
    }   
}

export default new LoginPage();