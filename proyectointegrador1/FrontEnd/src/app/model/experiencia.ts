export class Experiencia {

    //atributos de la clase Experiencia en entity
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    //constructor para inicializar
    constructor(nombreExp: string, descripcionExp: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;

    }
}
