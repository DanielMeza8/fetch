const datos = [
    {
        nombre:'jose',
        apellido:'avila', 
        fecha_nacimiento:'10/05/2009', 
        puesto:'sistamas',
        matricula:123555,
        carrera:'sisCON',
        edad:24, 
        escuela:'ITMA ll',
        semestre:9

    },
    {
        nombre:'ana',
        apellido:'peres', 
        fecha_nacimiento:'10/05/2007', 
        puesto:'gestion',
        matricula:128877,
        carrera:'ges',
        edad:24, 
        escuela:'ITMA ll',
        semestre:8
    },
    {
        nombre:'julio',
        apellido:'lopez', 
        fecha_nacimiento:'06/05/2007', 
        puesto:'industrial',
        matricula:1289234,
        carrera:'ind',
        edad:25, 
        escuela:'ITMA ll',
        semestre:3
    },
    //['carrera',2012,12,6],
    //"hola mundo"
];

// let obtenerDatos = (datos) => {
//     let {nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, edad, escuela, semestre} = persona;
//     console.log(`los datos son ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${edad}, ${escuela}, ${semestre}`)
// }

/*datos.map((persona) => {
    if (typeof persona == 'object' && !Array.isArray(persona)) {
        let {nombre, apellido, fecha_nacimiento, puesto, matricula} = persona;
        console.log(`los datos son ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`)
    }else if(Array.isArray(persona)){
        let [texto, año, mes, dia] = persona;
        console.log(texto,año, mes,dia );
    } 
    else {
        console.log(persona);
    }
});
ESla la misma solucion que la de abajo
*/
const obtenerArreglo = () => {
    datos.map(({nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, edad, escuela, semestre} = persona) => {
        console.log(`los datos son ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${edad}, ${escuela}, ${semestre}`);
    });
}

obtenerArreglo();

datos.push({
    nombre: "Yandari",
    apellido: "Meza",
    fecha_nacimiento: "23/03/2000",
    puesto: 'Sitemas',
    matricula: 1911902,
    carrera: 'sisComp',
    edad: 20,
    escuela: 'ITMA ll',
    semestre: 7
});
datos.push({
    nombre: "Alejandra",
    apellido: "Velazquez",
    fecha_nacimiento: "23/03/2000",
    puesto: 'Sitemas',
    matricula: 1911902,
    carrera: 'sisComp',
    edad: 22,
    escuela: 'ITMA ll',
    semestre: 8
});

obtenerArreglo();
// const datosBasicos = (...datos) => {
//     let [nombre, apellido, carrera] = datos;
//     console.log(`tus datos son: ${nombre}, ${apellido}, ${carrera}}`);
// }

// datosBasicos("jorge", "daniel", "sistemas", 0, 1, "s");

//generar un arreglo de objetos con los mismos datos agregando carrera, edad, escuela, semestre, 5 objetos