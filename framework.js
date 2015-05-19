//Credit: This file is partly author by Brent Farris
//Author: Taylor Chen
function GetLeft(elm)
{
  var left = elm.offsetLeft;
  while (elm = elm.offsetParent)
    left += elm.offsetLeft;
  left -= window.pageXOffset;

  return left;
}

function GetTop(elm)
{
  var top = elm.offsetTop;
  while (elm = elm.offsetParent)
    top += elm.offsetTop;
  top -= window.pageYOffset;

  return top;
}

Array.prototype.Remove = function(arg, all)
{
  for(var i = 0; i < this.length; i++)
  {
    if(this[i] == arg)
    {
      this.splice(i, 1);
      if(all = null || !all)
        break;
      else
        i--;
    }
  }
}

Array.prototype.RemoveAt = function(position)
{
  this.splice(position, 1);

}

Array.prototype.Clear = function()
{
  this.length = 0;
}

Array.prototype.InsertAt = function(arg, position)
{
  this.splice(position, 0, arg);
}

Array.prototype.Contains = function(arg)
{
  for(var i = 0; i < arg.length; i++)
    if(this[i] == arg)
      return true;
    return false;
}

Array.prototype.Occurs = function(arg)
{
  var counter = 0;
  for(var i = 0; i < arg.length; i++)
  {
    if(this[i] == arc)
      counter++;
  }
  return counter;
}
/*
Message = function(m)
{
  var content;
  if(m == null)
    {
      content = m;
    }
    this.DisplayMessage = function(ctx)
    {
      ctx.fillStyle = this.color.ToStandard();
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}
*/
Rectangle = function(x, y, w, h)
{
	if (	x == null || y == null || w == null || h == null)
	{
		alert("You did not pass all the required variables (x, y, w, h)");

		var errorMsg = "The following was not provided:";
		if (x == null)
			errorMsg += " 'x' ";
		if (y == null)
			errorMsg += " 'y' ";
		if (w == null)
			errorMsg += " 'w' ";
		if (h == null)
			errorMsg += " 'h' ";

		throw new Error(errorMsg);
	}

	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
  this.hasMouseOver = false;
  this.color = new Color(0, 255, 0, 1);

	this.Intersects = function(shape)
	{
		var offset = 0;
		if (shape.radius != null)
			offset = shape.radius;

		if(this.Contains(shape.x - offset, shape.y - offset) || this.Contains(shape.x + shape.width - offset, shape.y - offset) ||
		this.Contains(shape.x- offset, shape.y + shape.height- offset) || this.Contains(shape.x + shape.width - offset, shape.y + shape.height - offset))
		{
			return true;
		}
		else if (shape.Contains(this.x- offset, this.y- offset) || shape.Contains(this.x + this.width - offset, this.y - offset) || shape.Contains(this.x - offset, this.y + this.height- offset) || shape.Contains(this.x + this.width- offset, this.y + this.height- offset))
		{
			return true;
		}
		return false
	};

	this.Contains = function(x, y)
	{
		if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height))
		{
			return true;
		}
		else
	   return false;
	};

		this.Draw = function(ctx)
		{
			ctx.fillStyle = this.color.ToStandard();
			ctx.fillRect(this.x, this.y, this.width, this.height);
		};

    this.MakeGrey = function()
    {
      this.color = new Color(144, 144, 144, 1);
    };

    this.MakeWhite = function()
    {
      this.color = new Color(208, 208, 208, 1);
    };
    this.MakeRed = function()
    {
      this.color = new Color(255, 51, 0, 1);
    }
    this.makeGreen = function()
    {
      this.color = new Color();
    }
};


Color = function(r, g, b, a)
{
  this.r = 255;
  this.g = 255;
  this.b = 255;
  this.a = 1;

  if(r != null)
    this.r = r;
  if(g != null)
    this.g = g;
  if(b != null)
    this.b = b;
  if(a != null)
    this.a = a;

  this.ToStandard = function(noAlpha)
  {
    if(noAlpha == null || !noAlpha )
      return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
    else
      return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  };
};

Vector2 = function(x, y)
{
  this.x = 0;
  this.y = 0;

  if(x != null && y == null)
  {
    this.x = x;
    this.y = x;
  }
  else
  {
    if(x != null)
      this.x = x;
    if(y != null)
      this.y = y;
  }
  this.previousX = 0;
  this.previousY = 0;

  this.Set = function(x, y)
  {
    if(x == null && y == null)
    {
      console.log("No 'x' or 'y' has been passed to Vector2's Set function");
    }

    else
    {
      this.previousX = this.x;
      this.previousY = this.y;

      if(x == null && y == null)
      {
          this.x = x;
          this.y = y;
      }
      else
      {
      if(x != null)
      {
        this.x = x;
      }
      if(y != null)
      {
        this.y = y;
      }
      }

    }
  };
  this.Move = function(vec2)
  {
    this.x += vec2.x;
    this.y += vec2.y;
  }
  this.Normalize = function()
  {
    var tmp = new Vector2(this.x, this.y);
    var mag = Math.sqrt((tmp.x * tmp.x) + (tmp.y * tmp.y));
    tmp.x = tmp.x / mag;
    tmp.y = tmp.y / mag;

    return tmp;
  };

  this.Distance = function()
  {
    if(vec2 != null)
      return Math.sqrt(((vec2.x - this.x) * (vec2.x - this.x)) + ((this.y - vec2.y) * (this.y - vec2.y)));
    else
    return Math.sqrt(((this.previousX - this.x) * (this.previousX - this.x)) + ((this.previousY - this.y) * (this.previousY - this.y)));
  };

  this.HasChanged = function()
  {
    if(this.x != this.previousX || this.y != this.previousY)
      return true;
    return false;
  };
  this.Difference = function(vec2, invert)
  {
    var inv = 1;

    if(invert)
      inv = -1;
    if(vec2 == null)
    {
      return new Vector2((this.x - this.previousX) * inv, (this.y - this.previousY) * inv);
    }
    else
      return new Vector2((this.x - vec2.x) * inv, (this.y - vec2.y) * inv);
  };
};

Animation = function(width, height, row, column, limit, imgSrc, fps, columns, rows)
{
  if(fps == null || fps >= 33)
    this.fps = 1;
  else
    this.fps = 33 / fps;
  this.fpsCounter = 0;
  //this.frame = 0;
  this.width = width;
  this.height = height;
  this.rowStart = row;
  this.columnStart = column;
  this.row = row;
  this.column = column;
  this.rows = rows;
  this.columns = columns;
  if(limit == null || limit == 0)
    this.limit = 999999999999;
  else
    this.limit = limit - 1;
  this.limitCount = 0;
  this.image = new Image();
  this.image.src = imgSrc;
  this.position = new Vector2(0, 0);
  this.cropPosition = new Vector2(0, 0);

  this.SetLimit = function(limit)
  {
    this.limit = l - 1;
  };

  this.SetRow = function(num)
  {
    this.row = num;
    this.rowStart = num;
  };

  this.SetColumn = function(num)
  {
    this.column = num;
    this.columnStart = num;
  }

  this.Update = function()
  {
    this.cropPosition.x = this.width * this.column;
    this.cropPosition.y = this.height * this.row;

    if(this.columns == null || this.columns == 0)

      this.columns = this.image.width / this.width;
    if(this.rows == null || this.rows == 0)
      this.rows = this.image.height / this.height;

  };

  this.Draw = function(ctx)
  {
    if(this.fpsCounter == 0)
    {
      if(this.limitCount < this.limit)
      {
        this.limitCount++;
        this.column++;

        if(this.column >= this.columns)
        {
          this.row++;
          this.column = 0;

          if(this.row >= this.rows)
          {
            this.row = this.rowStart;
            this.column = this.columnStart;
            this.limitCount = 0;
          }
        }
      }
      else
      {
        this.column = this.columnStart;
        this.row = this.rowStart;
        this.limitCount = 0;
      }
    }
    ctx.drawImage(this.image, this.cropPosition.x, this.cropPosition.y, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    this.fpsCounter++;

    if(this.fpsCounter >= this.fps)
      this.fpsCounter = 0;
  };

};

Input = function()
{
  this.a = false;
  this.b = false;
  this.c = false;
  this.d = false;
  this.e = false;
  this.f = false;
  this.g = false;
  this.h = false;
  this.i = false;
  this.j = false;
  this.k = false;
  this.l = false;
  this.m = false;
  this.n = false;
  this.o = false;
  this.p = false;
  this.q = false;
  this.r = false;
  this.s = false;
  this.t = false;
  this.u = false;
  this.v = false;
  this.w = false;
  this.x = false;
  this.y = false;
  this.z = false;
  this.left = false;
  this.right = false;
  this.up = false;
  this.down = false;
  this.mouseIsDown = false;
  this.mousePosition = new Vector2(0, 0);
  this.offset = new Vector2(0, 0);
  this.clamp = new Vector2(0, 0);

};
var input = new Input();


document.documentElement.onmousemove = function(e)
{
  e = e || window.event;

  input.mousePosition.x = e.clientX - input.offset.x;
  input.mousePosition.y = e.clientY - input.offset.y;

};

document.documentElement.onmousedown = function(e)
{
  input.mouseIsDown = true;
};

document.documentElement.onmouseup = function(e)
{
  input.mouseIsDown = false;
};

document.documentElement.onkeydown = function(e)
{
  var keycode;
  if(window.event)
    keycode = window.event.keyCode;
  else if (e)
    keycode = e.which;

  switch(keycode)
  {
    case 13:
      input.enter = true;
      break;
    case 32:
      input.space = true;
      break;
    case 37:
      input.left = true;
      break;
    case 38:
      input.up = true;
    case 39:
      input.right = true;
      break;
    case 40:
      input.down = true;
      break;
    case 65:
      input.a = true;
      break;
    case 66:
      input.b = true;
      break;
    case 67:
      input.c = true;
      break;
    case 68:
      input.d = true;
      break;
    case 69:
      input.e = true;
      break;
    case 70:
      input.f = true;
      break;
    case 71:
      input.g = true;
      break;
    case 72:
      input.h = true;
      break;
    case 73:
      input.i = true;
      break;
    case 74:
      input.j = true;
      break;
    case 75:
      input.k = true;
      break;
    case 76:
      input.l = true;
      break;
    case 77:
      input.m = true;
      break;
    case 78:
      input.n = true;
      break;
    case 79:
      input.o = true;
      break;
    case 80:
      input.p = true;
      break;
    case 81:
      input.q = true;
      break;
    case 82:
      input.r = true;
      break;
    case 83:
      input.s = true;
      break;
    case 84:
      input.t = true;
      break;
    case 85:
      input.u = true;
      break;
    case 86:
      input.v = true;
      break;
    case 87:
      input.w = true;
      break;
    case 88:
      input.x = true;
      break;
    case 89:
      input.y = true;
      break;
    case 90:
      input.z = true;
      break;

  }
};


document.documentElement.onkeyup = function(e)
{
  var keycode;
  if(window.event)
    keycode = window.event.keyCode;
  else if (e)
    keycode = e.which;

  switch(keycode)
  {
    case 13:
      input.enter = false;
      break;
    case 32:
      input.space = false;
      break;
    case 37:
      input.left = false;
      break;
    case 38:
      input.up = false;
    case 39:
      input.right = false;
      break;
    case 40:
      input.down = false;
      break;
    case 65:
      input.a = false;
      break;
    case 66:
      input.b = false;
      break;
    case 67:
      input.c = false;
      break;
    case 68:
      input.d = false;
      break;
    case 69:
      input.e = false;
      break;
    case 70:
      input.f = false;
      break;
    case 71:
      input.g = false;
      break;
    case 72:
      input.h = false;
      break;
    case 73:
      input.i = false;
      break;
    case 74:
      input.j = false;
      break;
    case 75:
      input.k = false;
      break;
    case 76:
      input.l = false;
      break;
    case 77:
      input.m = false;
      break;
    case 78:
      input.n = false;
      break;
    case 79:
      input.o = false;
      break;
    case 80:
      input.p = false;
      break;
    case 81:
      input.q = false;
      break;
    case 82:
      input.r = false;
      break;
    case 83:
      input.s = false;
      break;
    case 84:
      input.t = false;
      break;
    case 85:
      input.u = false;
      break;
    case 86:
      input.v = false;
      break;
    case 87:
      input.w = false;
      break;
    case 88:
      input.x = false;
      break;
    case 89:
      input.y = false;
      break;
    case 90:
      input.z = false;
      break;

  }
};
/*
MakeMatrix = function()
{
  var squareArray = new Array();
  for(i = 0; i < 4; i++)
  {
    squareArray[i] = new Rectangle(50 * i + 10, 10, 50, 50);
    squareArray[i].draw(ctx, "grey");
  }
};
*/

/*
makeThreeByThree = function()
{
  var squareArray = new Array();
  for(j = 1; j <= 3; j++)
  {
    for(i = 1; i <= 3; i++)
    {
      squareArray[((j - 1) * 3) + i] = new Rectangle(45 * i, 45 * j, 40, 40);
      squareArray[((j - 1) * 3) + i].color = new Color(208, 208, 208, 1);//var currentRect = squareArray[i];
    }
  }
  return squareArray;
};
*/

GameMatrix = function(row, col, darkOnes)
{
  this.row = row;
  this.col = col;
  this.darkened = false;
  this.success = false;
  this.wrong = false;
  this.arrayCopy = darkOnes.slice(0);
  this.squareArray = new Array();
  for(j = 1; j <= this.col; j++)
  {
    for(i = 1; i <= this.row; i++)
    {
      this.squareArray[((j - 1) * this.row) + i] = new Rectangle(45 * i, 45 * j, 40, 40);
      this.squareArray[((j - 1) * this.row) + i].color = new Color(208, 208, 208, 1);//var currentRect = squareArray[i];
    }
  }

  this.DrawMatrix = function()
  {
    for(i = 1; i <= (row * col); i++)
    {
      this.squareArray[i].Draw(ctx);
    }
  };

  this.toggleColor = function()
  {
    for(k = 0; k < darkOnes.length; k++)
    {
      this.squareArray[darkOnes[k]].color = new Color(144, 144, 144, 1);
    }
  };
  this.MakeWhite = function()
  {

  for(k = 0; k < darkOnes.length; k++)
  {
  this.squareArray[darkOnes[k]].color = new Color(208, 208, 208, 1);

  }
};

  this.getClick = function()
  {
    for(i = 1; i<= row * col; i++)
    {
      if(input.mouseIsDown && this.squareArray[i].Contains(input.mousePosition.x, input.mousePosition.y))
      {
        this.squareArray[i].MakeGrey();
        var foundInOriginal = darkOnes.indexOf(i);
        var foundInCopy = this.arrayCopy.indexOf(i);
        if(this.arrayCopy.length == 0)
        {
          //Write code for finishing
          this.success = true;
          for(k = 0; k < darkOnes.length; k++)
          {
            this.squareArray[darkOnes[k]].color = new Color(0, 204, 0, 1);
          }
        }
        if(foundInOriginal != -1)
        {
          if(foundInCopy != -1)
          {
            this.arrayCopy.splice(foundInCopy, 1);
          }
        }
        else
        {
          //Write code for failing
          this.wrong = true;
          this.squareArray[i].MakeRed();
        }
      }
    }
  };

};


/*
patternMemory = function(ctx)
{
  this.doneToggle = false;
  this.doneMakeWhite = false;
  this.currentLevel = 1;
  this.AllLevels = new Array();
  AllLevels[1] = new GameMatrix(3, 3, [5, 7, 8]);
  AllLevels[2] = new GameMatrix(3, 3, [1, 7, 8]);


  setInterval(function()
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.AllLevels[currentLevel].DrawMatrix();

    if(!this.doneToggle)
    {
      setTimeout(function()
      {
        this.AllLevels[currentLevel].toggleColor();
        this.doneToggle = true;
      }, 700);
    }

    if(this.doneToggle && !this.doneMakeWhite)
    {
      setTimeout(function()
      {
        this.AllLevels[currentLevel].MakeWhite();
        this.doneMakeWhite = true;
      }, 1000);
    }
    if(this.doneMakeWhite == true)
    this.AllLevels[currentLevel].getClick();
    if(this.AllLevels[currentLevel].success)
    {
      this.currentLevel++;
    }
  }, 33);
};
*/
