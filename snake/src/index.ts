//Import Style

import "./style/index.less";

import Food from "./modules/Food";

//  测试代码
let food = new Food();
food.change()
console.log(food.X, food.Y);
export default Food;

import ScorePanel from "./modules/scorePanel";

let scorePanel = new ScorePanel();
scorePanel.addScore();

