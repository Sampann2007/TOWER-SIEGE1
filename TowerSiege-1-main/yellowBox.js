class YellowBox extends Box{
    constructor(x,y){
        super(x,y,20,30);


    } display(){
        fill(255,242,0);
        super.display();
    }
}