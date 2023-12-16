function validateFields(){
    const emailValid = isEmailValid();
    
    form.recover().disabled = !emailValid;
   
    
}
function validateEmail(email){
    return /\S+@\S.\S+/.test(email)
}
function isEmailValid(){
    const email = form.email()
    if(!email){
        return false
    }
    return validateEmail(email)
}
const form = {
    email: () =>  document.getElementById('email').value,
    senha: () =>  document.getElementById('senha').value,
    recover: () => document.getElementById('recover-password')
}