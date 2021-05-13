document.querySelector("#form-login").addEventListener('submit', e =>{    
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let passoword = document.querySelector('#password').value;

   let json  = {
        email,
        passoword
    }

    if(json.email = ""){
        console.error('Preencha o email');

    }else if(!json.passoword){

        alert('Preencha todos os dados') 

    }else{
        alert('validado com sucesso')
    }

    console.log(json)
});

