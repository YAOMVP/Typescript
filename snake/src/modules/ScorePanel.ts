
class ScorePanel {
    score = 0;
    level = 1;

    scoreEle :HTMLElement;
    levelEle : HTMLElement;

    constructor(){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
    }

    //1.设置加分的方法
    addScore(){
        //设置自增
        this.score++;
        //自增之后赋值
        this.scoreEle.innerHTML = this.score + "";
    }
}










export default ScorePanel;

