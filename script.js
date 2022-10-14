let slideElement  = document.querySelector ("#slider");
let buttonElement = document.querySelector ("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUYVXZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

    slideElement.oninput = function(){
        sizePassword.innerHTML = this.value;
    }

    function generatePassword(){

        let pass="";

        for(let i = 0, n = charset.length; i < slideElement.value;++i){
            pass += charset.charAt(Math.floor(Math.random() * n));
        }
            containerPassword.classList.remove("hide");
            password.innerHTML = pass;

        }

        function copyPassword(){
            alert("Senha copiada com sucesso!")
            navigator.clipboard.writeText(novaSenha);

        }


    