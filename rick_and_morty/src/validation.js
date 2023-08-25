const validation=(userData)=>{
    let errors={}

    if(!userData.email){
        errors.email="¡Claro! Loguéate sin un correo ¿Quién quiere privacidad en línea?"  
    }
    if(userData.email && !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)){
        errors.email="Formato de email inválido"
    }
    if(userData.email.length>35){
        errors.email="Hazte un correo más corto (menos de 35 carácteres)"
    }

    if(!userData.password){
        errors.password="Mejor, No pongas clave ¡Es más divertido cuando los hackers intentan acceder a tu información personal! "  
    }

    return errors;
}

export default validation