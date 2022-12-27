import Food from "./Food";

import ScorePanel from "./ScorePanel";

import Snake from "./Snake";



class GameControl {
    //1.😊Define 3 properties 
    snake:Snake;
    food:Food;
    scorePanel :ScorePanel;

    //5.😊Create a property that store the event.key(ArrowUp/ArorwDown/ArrowLeft/ArrowRight)
    direction:string = "";

    //6.5 check the game is over or not
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    //2.😊Game initialization method
    init(){
        //3.😊Food can move when user press the key
        //💖谁调用this就指的谁 document调用的 不是GameControl对象
        //Use bind to get the keydownHandler's this
        //Use bind will not execute the function
        document.addEventListener("keydown",this.keydownHandler.bind(this));

        //6.4 call the run()
        this.run();
    }

    //4.😊callback handler
    keydownHandler(event: KeyboardEvent){
        //Check users only press the up/down/left/right direction

        //Get which key the users press
        this.direction = event.key;
    }

    //6.😊Let the snake move
    run(){
        //6.1 Get the snake position right now
        let X = this.snake.X;
        let Y = this.snake.Y;

        //6.2 According to the direction position change the snake move direction
        switch(this.direction){
            case "ArrowUp": 
            Y-=10;
            break;
            case "ArrowDown": 
            Y+=10;
            break;
            case "ArrowLeft": 
            X-=10;
            break;
            case "ArrowRight": 
            X+=10;
            break;
        }

        this.checkEat(X,Y);

        try {
             //6.3 Get the snake position right now
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error:any) {
            //throw an error
            alert(error.message + "GAME OVER !!!!!!!");
            this.isLive = false;
        }


        //Turn on setTimeout
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level - 1)*30);

    }


    //To see the snake eats the food or not
        checkEat(X: number, Y: number) {
           if(X === this.food.X && Y === this.food.Y) {
             //reset the food position
             this.food.change();
             //addScore
             this.scorePanel.addScore();
             //addBody
             this.snake.addBody();
           }
           
    }



}

export default GameControl;


