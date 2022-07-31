export class Skills {
    id?: number;
    nameSkill: string;
    percentSkill: string;


    constructor(nameSkill:string, percentSkill:string){
        this.nameSkill=nameSkill;
        this.percentSkill=percentSkill;
    }
}
