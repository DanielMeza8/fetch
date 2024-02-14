fetch(`local.php`,{
    method:"POST",
    body:""
}).then((respuesta) => 
    respuesta.json()
    ).then((respuesta) => {
    console.log(respuesta);
    let [estado, msj] = respuesta;
    if (estado == 1) {
        console.log(msj)
    }
    else{
        console.error("se produjo un error");
    }
}).catch((error) => {
    console.log(`Se ha generado un errror: ${error}`);
});