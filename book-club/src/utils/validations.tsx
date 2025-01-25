export const checkInformations = (name: string,email: string,contact: string,password: string,confirmPassword: string)=>{
    let check = true
    let errors = []
    if(confirmPassword !== password){
      errors.push("As senhas devem ser iguais")
      check = false
    }else if(password.length < 12){
        errors.push("A senha deve ter no minimio 12 caracteres")
        check = false
    }
    if(contact.length != 9){
        errors.push("Passe um contato valido")
        check = false
    }
    if(!email.includes("@") || !email.includes(".com") ){
        errors.push("Passe um email valido")
        check = false
    }
    if(/\d/.test(name)){
        errors.push("Passe um nome valido")
        check = false
    }
    return ({check,errors})
}