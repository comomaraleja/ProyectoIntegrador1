export class About {
    id?: number;
    nameUser: string;
    aboutUser: string;

    constructor(nameUser: string, aboutUser:string){
        this.nameUser=nameUser;
        this.aboutUser=aboutUser;
    }
}
