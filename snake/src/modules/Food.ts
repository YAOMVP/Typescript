//Define Food
class Food{
     
    //1.😊Define an attribute to represent the element corresponding to the food
    element:HTMLElement;

    constructor(){
        //Get the food element and assign it to the element !means we can find the element
        this.element = document.getElementById("food")!;
    }

    //2.😊If the coordinates of the snake are the same as the coordinates of the food, snake can eat food, and the x&y coordinates of the food need to be got

    get X (){
      return this.element.offsetLeft; 
    }

    get Y(){
        return this.element.offsetTop;
    }

    //3.😊Need random food position  left:0px right:300- one food's 10px= 290px   The coordinates of the food are exactly 10 times, and the snake moves once is 10

    //From 0-29 *10  Math.round() rounds a number to the nearest integer   2.49 will be rounded down (2), and 2.5 will be rounded up (3).
    change(){
       let left =  Math.round(Math.random()*29)*10;
       let top =  Math.round(Math.random()*29)*10;

        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;




