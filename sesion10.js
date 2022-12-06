class Alumno {
    constructor (codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    
    //Getter:promedio
    
    get promedio(){
        let prom = ((this.nota1*0.15)+(this.nota2*0.2)+(this.nota3*0.25)+(this.nota4*0.4))
        return "\nTu promedio es: "+ prom

    }
    //getter:condicion
    get condicion(){
        let prom = ((this.nota1*0.15)+(this.nota2*0.2)+(this.nota3*0.25)+(this.nota4*0.4))
        if (prom<12){
            return "\nEstas desaprobado"
        } else {
            return "\nEstas aprobado"
        }

    }

    //getter:obsequio
    get obsequio(){
        let prom = ((this.nota1*0.15)+(this.nota2*0.2)+(this.nota3*0.25)+(this.nota4*0.4))
        if (prom>=17){
            return "\nGanaste una mochila"
        }else {
            return "\nTe perdiste una mochila"
        }


    }
}

let id = prompt ("Id de alumno")
let alum = prompt ("Ingresa Nombre")
let not1 = prompt ("Nota 1:")
let not2 = prompt ("Nota 2:")
let not3 = prompt ("Nota 3:")
let not4 = prompt ("Nota 4:")

let alumnonew = new Alumno(id, alum, not1, not2, not3, not4)
alert ("Hola "+alum+ alumnonew.promedio + alumnonew.condicion + alumnonew.obsequio)

