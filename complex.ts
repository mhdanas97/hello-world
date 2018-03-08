class Complex{
    private x:number;
    private y:number;

    constructor(x:number=0,y:number=0){
        this.x=x;
        this.y=y;
    }

    public magintudeSquared():number{
        return this.x*this.x+this.y*this.y;
    }

    public magnitude():number{
        return Math.sqrt(this.magintudeSquared());
    }

   
    public dotProduct(other:Complex):number {
        return this.x*other.x+this.y*other.y;
    }

    public static dotProduct(first:Complex,second:Complex):number{
        return first.x*second.x+first.y*second.y;
    }

}