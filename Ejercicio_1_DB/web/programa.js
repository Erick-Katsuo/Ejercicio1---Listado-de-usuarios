
class Cuenta{
    
    static ingresar(){
        let miUsuario = document.querySelector("#usuario").value;
        let miClave = document.querySelector("#clave").value;
        var existe = false;
        for(var i=0 ; i< listaUsuarios.length ; i++){
            if(miClave===listaClaves[i] && miUsuario===listaUsuarios[i]  ){ 
                document.querySelector("#resultadoIngreso").innerHTML = "Welcome " + miUsuario + " !";
                existe = true;
            }
        }
        if(!existe){
            document.querySelector("#resultadoIngreso").innerHTML = "Clave o usuario incorrectos";
        }
    }
    
    static registro(){
        let nuevoUsuario = document.querySelector("#nuevoUsuario").value;
        let nuevaClave = document.querySelector("#nuevaClave").value;
        let verificarClave = document.querySelector("#verificarClave").value;
        
        if(nuevaClave === verificarClave){
            listaUsuarios.push(nuevoUsuario);
            listaClaves.push(nuevaClave);
            document.querySelector("#resultadoRegistro").innerHTML = "Cuenta creada!";
        }else{
            document.querySelector("#resultadoRegistro").innerHTML = "Claves no coinciden";
        }
    }   
    
    static mostrarRegistrados(){
        console.clear();
        document.querySelector("#resultadoLista").innerHTML = "Usuarios registrados: ["+listaUsuarios+"]       \t(ver consola para las contraseñas..)";
        console.log("Usuario - Clave");
        for(var i = 0 ; i<listaUsuarios.length ; i++){
            console.log(listaUsuarios[i] +"\t-\t"+ listaClaves[i]);
        }
    }
}

let listaUsuarios = [];
let listaClaves = [];
listaUsuarios.push("katsuo");
listaClaves.push("123");