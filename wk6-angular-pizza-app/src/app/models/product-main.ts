// ADDED THIS ts file under 'models' folder to define the structure of the data

export class ProductMain {
    
    public id: number;
    public name: string;
    public description : string;
    public category: string;
    public price: number;
    public image: any;   //????? data type of image 


    //IF you dont want to initialize the variable, goto tsconfig.json and set strict to false
    constructor() {
        // this.id = 0;
    }
}