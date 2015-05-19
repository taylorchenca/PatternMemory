//Author: Taylor Chen
var canvas 			= document.getElementById("canvas");
canvas.width			= document.body.clientWidth;
canvas.height		= document.body.clientHeight;
canvas.style.width 	= canvas.width + "px";
canvas.style.height 	= canvas.height + "px";

input.offset = new Vector2(GetLeft(canvas), GetTop(canvas));
var ctx				= canvas.getContext('2d');

var currentLevel = 1;
var timeUp = false;
AllLevels = new Array();
AllLevels[1] = new GameMatrix(3, 3, [5, 7, 8]);
AllLevels[2] = new GameMatrix(3, 3, [1, 7, 8]);
AllLevels[3] = new GameMatrix(4, 3, [2, 3, 4, 12]);
AllLevels[4] = new GameMatrix(4, 3, [2, 3, 5, 7]);
AllLevels[5] = new GameMatrix(4, 4, [2, 4, 5, 8, 13]);
AllLevels[6] = new GameMatrix(4, 4, [1, 4, 6, 8, 16]);
AllLevels[7] = new GameMatrix(5, 4, [7, 11, 13, 15, 16, 19]);
AllLevels[8] = new GameMatrix(5, 4, [1, 3, 11, 12, 16]);
AllLevels[9] = new GameMatrix(5, 5, [3, 6, 10, 12, 14, 16, 22]);
AllLevels[10] = new GameMatrix(5, 5, [1, 4, 9, 19, 21, 22, 25]);
AllLevels[11] = new GameMatrix(6, 5, [1, 2, 3, 5, 7, 13, 19, 24]);
AllLevels[12] = new GameMatrix(6, 5, [3, 12, 16, 19, 23, 25, 27, 30]);
AllLevels[13] = new GameMatrix(7, 5, [4, 13, 17, 18, 19, 22, 24, 26, 30]);
AllLevels[14] = new GameMatrix(7, 5, [6, 7, 17, 18, 21, 23, 26, 28, 35]);

doneToggle = false;
doneMakeWhite = false;


function startGame()
{

  setInterval(function()
  {

    setInterval(function()
    {
      if(!timeUp)
      {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        AllLevels[currentLevel].DrawMatrix();

        if(!doneToggle)
        {
          setTimeout(function()
          {
            AllLevels[currentLevel].toggleColor();
            doneToggle = true;
          }, 800);
        }

        if(doneToggle && !doneMakeWhite)
        {
          doneMakeWhite = true;

          setTimeout(function()
          {
            AllLevels[currentLevel].MakeWhite();
          }, 800);
        }

        if(doneMakeWhite && !AllLevels[currentLevel].success)// && !timeUp)
        {
          AllLevels[currentLevel].getClick();
        }

      }
    }, 50);

    if(AllLevels[currentLevel].success)
    {
      //message = "Correct! ✓";
      setTimeout(function()
      {
        doneToggle = false;
        doneMakeWhite = false;
        currentLevel++;
      }, 500);
    }
    if(AllLevels[currentLevel].wrong)
    {
      AllLevels[currentLevel].success = true;
    }
    if(currentLevel >= 20)
    {
      timeUp = true;
    }


  }, 1000);

  setTimeout(function()
  {
    timeUp = true;
  }, 60000);
  setTimeout(function()
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "26px serif";
    ctx.fillStyle = "#000000";
    ctx.fillText("Time's Up!", 30, 30);
  }, 60500);
}
