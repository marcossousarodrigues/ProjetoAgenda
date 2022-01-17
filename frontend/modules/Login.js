
import validator from "validator";

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();
    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[type="email"]');
        const passwordInput = el.querySelector('input[type="password"]');
        let error = false;
        const messageEmail = el.querySelector('.message-email');
        const messageSenha = el.querySelector('.message-senha');

        if(!validator.isEmail(emailInput.value)){
            messageEmail.style.display = 'block';
            error = true;
        }else{
            messageEmail.style.display = 'none';
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            messageSenha.style.display = 'block';
            error = true;
        }else{
            messageSenha.style.display = 'none';
        }
        if(!error){
            el.submit();
            
        }
    }
}