const form = document.querySelector("#form");
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function nameValidate(names, minDigits){
    if(names.length >= minDigits){
        return true
    }
    return false
};

function emailValidate(email){
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
    if (emailRegex.test(email) ){
        return true;
    }
    return false
};

function passwordValidate(names, minDigits){
    if(names.length >= minDigits){
        return true
    }
    return false
};


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(!nameValidate(names.value,3)){
    alert("Nome deve conter ao menos 3 caracteres")
    return;
    }

    if(email.value === "" || !emailValidate(email.value) ){
    alert("Digite um email válido")
    return;
    }

    if(!passwordValidate(password.value,6) ){
    alert("Senha deve conter ao menos 6 caracteres")
    return;
    }
    
    form.submit();
})  


function mostrar(){
    document.getElementById('conteudo').style.display='block';

}


