
class ScorePanel {
    score = 0;
    level = 1;

    scoreEle :HTMLElement;
    levelEle : HTMLElement;

    //Set variable restriction level
    maxLevel: number;
    //Set the variable how many points to upgrade
    upScore:number;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //1.😊How to set points
    addScore(){
        //auto increment
        //this.score++;
        //assignment after increment
        //this.scoreEle.innerHTML = this.score + "";

        //😊Another way write
        this.scoreEle.innerHTML = ++this.score+"";

        //😊Get the score
        if(this.score % 10 === 0){
            this.levelUp();
        }
    }

    //2.😊upgrade the level
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}










export default ScorePanel;

