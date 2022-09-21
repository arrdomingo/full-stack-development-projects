// ADDED THIS ts file under 'models' folder to define the structure of the data

export class Cart {
    public id: number;
    public price: number;
    public quantity: number;
    public pizzaId: number;
    public pizzaName: string;

    //IF you dont want to initialize the variable, goto tsconfig.json and set strict to false
    constructor() {
        // this.id = 0;
    }
}