class Snake {

    //1.😊Set up the snake head
    head: HTMLElement;
    //2.😊Set up the snake bodies
    bodies:HTMLCollection;
    //😊Get the whole part of the snake -the big snake
    element:HTMLElement; 

    constructor(){
        //querySelector will get the first element.
        this.head = document.querySelector("#snake > div")!;
        this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
        this.element = document.getElementById("snake")!;
    }

    //3.😊Get the coordinate of the snake head 
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    //4.Set the snake coordinate
     set X(value:number){

        
        if(this.X === value){
            return;
        }

        //effective value 0-290
        if(value <0 || value >290){
            //the snake hit the wall
            throw new Error("HIT THE WALL BUDDY!!!");
        }

        //turn left can not turn right
        //check if the second part exist, and the snake head coordinate is equal the second part
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //nothing happen 
            if(value > this.X){
                //代码 发生了掉头在右边，但是一定要！！！没有反应，应该继续向左走
                value =this.X - 10;
            } else {
                value = this.X +10;
            }
        }


        //moveBody
        this.moveBody();

        this.head.style.left = value + "px";

        //Check it is collide by the whole body part 看看有没有重叠到自己
        this.checkHeadBody();
     }

     set Y(value:number){

        if(this.Y === value){
            return;
        }

        if(value <0 || value >290){
            //the snake hit the wall
            throw new Error("HIT THE WALL BUDDY!!!");
        }

        
        //turn down can not turn up
        //check if the second part exist, and the snake head coordinate is equal the second part
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            //nothing happen 
            if(value > this.Y){
                //代码 发生了掉头在上边，但是一定要！！！没有反应，应该继续向下走
                value =this.Y - 10;
            } else {
                value = this.Y +10;
            }
        }


        //moveBody
        this.moveBody();

        this.head.style.top = value + "px";


        //Check it is collide by the whole body part 看看有没有重叠到自己
        this.checkHeadBody();
     }

     //4.😊snake increases their body parts
     addBody(){
        //insert div into element
        this.element.insertAdjacentHTML("beforeend","<div></div>");
     }

     //moveBody
     moveBody(){
        //The back body is set to the position of the front body
        // 4 part = 3 part , 3part =2part , 2part = head part

        for(let i = this.bodies.length-1; i > 0; i--){
            //Get the front body part position
            let X = (this.bodies[i-1]as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            
            //set the right now postion
            (this.bodies[i] as HTMLElement).style.left = X +"px";
            (this.bodies[i] as HTMLElement).style.top = Y +"px";

        }
     }
     
     //Check head and body collisions
     checkHeadBody(){
        //get the whole part of the snake, to see whether it is override by the head of the snake
        for(let i =1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //It is collide game over
                throw new Error("HIT YOURSELF MAN");
            }
        }
     }

}

export default Snake;
