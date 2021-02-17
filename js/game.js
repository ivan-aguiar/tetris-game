var canvas;
var ctx;
var FPS = 50;
var tileset;

//Dimensiones del canvas
var canvasHeight = 640;
var canvasWidth = 400;

//Dimensiones del tablero
var tableHeight = 20;
var tableWidth = 10;
var marginTop = 4;

//Dimensiones del tile
var tileHeight = 40;
var tileWidth = 40;

//Tablero (12x17) / (10x16)
var table = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//Tabla en blanco para reinicio del juego
var blankTable = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//Colores de las piezas
var black = "#000000";

//Gráficos de las piezas
var pieceGraphics = [
  [
    [
      //Figura Square
      //Posición 0
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      //Posición 1
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 2
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      //Figura Stick
      //Posición 0
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 0
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
    ],
    [
      //Posición 2
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
    ],
  ],

  [
    [
      //Figura S
      //Posición 0
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 1
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],
    [
      //Posición 2
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      //Figura Z
      //Posición 0
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0],
    ],
    [
      //Posición 1
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 2
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      //Figura L
      //Posición 0
      [0, 0, 0, 0],
      [0, 5, 5, 5],
      [0, 5, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 1
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 5],
      [0, 0, 0, 0],
    ],
    [
      //Posición 2
      [0, 0, 0, 5],
      [0, 5, 5, 5],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 5, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      //Figura J
      //Posición 0
      [0, 0, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 6],
      [0, 0, 0, 0],
    ],
    [
      //Posición 1
      [0, 0, 6, 6],
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 2
      [0, 6, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 6, 6, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      //Figura T
      //Posición 0
      [0, 0, 0, 0],
      [0, 7, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 1
      [0, 0, 7, 0],
      [0, 0, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 2
      [0, 0, 7, 0],
      [0, 7, 7, 7],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      //Posición 3
      [0, 0, 7, 0],
      [0, 7, 7, 0],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
  ],
];

//Resetea si pierde

function resetTable() {
  for (py = 0; py < 21; py++) {
    for (px = 0; px < 12; px++) {
      table[py][px] = blankTable[py][px];
    }
  }
}

//Objeto de la pieza
var piece;
var pieceObject = function () {
  this.x = 0;
  this.y = 0;

  this.angle = 0;
  this.type = 0;

  //Creamos una pieza aleatoria
  this.newPiece = function () {
    this.type = Math.floor(Math.random() * 7);
    this.y = 0;
    this.x = 4;
  };

  //Dibujamos la pieza
  this.draw = function () {
    for (py = 0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        var tile = pieceGraphics[py][px];

        if (pieceGraphics[this.type][this.angle][py][px] != 0) {
          if (pieceGraphics[this.type][this.angle][py][px] == 1) {
            ctx.drawImage(
              red,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          if (pieceGraphics[this.type][this.angle][py][px] == 2) {
            ctx.drawImage(
              blue,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          if (pieceGraphics[this.type][this.angle][py][px] == 3) {
            ctx.drawImage(
              cyan,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          if (pieceGraphics[this.type][this.angle][py][px] == 4) {
            ctx.drawImage(
              green,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          if (pieceGraphics[this.type][this.angle][py][px] == 5) {
            ctx.drawImage(
              pink,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          if (pieceGraphics[this.type][this.angle][py][px] == 6) {
            ctx.drawImage(
              purple,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          if (pieceGraphics[this.type][this.angle][py][px] == 7) {
            ctx.drawImage(
              yellow,
              [this.x + px - 1] * tileWidth,
              [this.y + py - marginTop] * tileHeight,
              tileWidth,
              tileHeight
            );
          }

          /*   ctx.fillRect(
            (this.x + px - 1) * tileWidth,
            (this.y + py - marginTop) * tileHeight,
            tileWidth,
            tileHeight
          ); */
        }
      }
    }
  };

  //Creamos un retraso para la caida de la pieza
  this.delay = 50;
  this.framerate = 0;

  this.falldown = function () {
    if (this.framerate < this.delay) {
      this.framerate++;
    } else {
      if (this.collision(this.angle, this.y + 1, this.x) == false) {
        this.y++;
      } else {
        this.fixPiece();
        this.cleanLine();
        this.newPiece();

        if (this.checkIfLose() == true) {
          resetTable();
        }
      }
      this.framerate = 0;
    }
  };

  //Fijamos la ficha donde cae
  this.fixPiece = function () {
    for (py = 0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        if (pieceGraphics[this.type][this.angle][py][px] > 0) {
          table[this.y + py][this.x + px] =
            pieceGraphics[this.type][this.angle][py][px];
        }
      }
    }
  };

  //Movimientos de las piezas
  //Rotamos la pieza
  this.rotate = function () {
    var newAngle = this.angle;

    if (newAngle < 3) {
      newAngle++;
    } else {
      newAngle = 0;
    }

    if (this.collision(newAngle, this.x, this.y) == false) {
      this.angle = newAngle;
    }
  };
  this.down = function () {
    if (this.collision(this.angle, this.y + 1, this.x) == false) {
      this.y++;
    }
  };

  this.left = function () {
    if (this.collision(this.angle, this.y, this.x - 1) == false) {
      this.x--;
    }
  };

  this.right = function () {
    if (this.collision(this.angle, this.y, this.x + 1) == false) {
      this.x++;
    }
  };

  this.newPiece();

  //Creamos las colisiones
  this.collision = function (newAngle, newY, newX) {
    var collide = false;

    for (py = 0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        if (pieceGraphics[this.type][newAngle][py][px] > 0) {
          if (table[newY + py][newX + px] > 0) {
            collide = true;
          }
        }
      }
    }
    return collide;
  };

  //Limpia la linea
  this.cleanLine = function () {
    var completedLine;

    for (py = marginTop; py < tableHeight; py++) {
      completedLine = true;
      for (px = 1; px < tableWidth + 1; px++) {
        if (table[py][px] == 0) {
          completedLine = false;
        }
      }

      if (completedLine == true) {
        for (px = 1; px < tableWidth + 1; px++) {
          table[py][px] = 0;
        }
      }
    }
  };

  //Comprobamos si el jugador pierde
  this.checkIfLose = function () {
    var lose = false;

    //Si alguna pieza se encuentra dentro de table[2][px], el jugador pierde
    for (px = 1; px < tableWidth + 1; px++) {
      if (table[3][px] > 0) {
        lose = true;
      }
    }
    return lose;
  };
};

//Función Dibujar tablero
function drawTable() {
  for (py = marginTop; py < tableHeight; py++) {
    for (px = 1; px < tableWidth + 1; px++) {
      if (table[py][px] == 0) {
        ctx.fillStyle = black;
        ctx.fillRect(
          (px - 1) * tileWidth,
          (py - marginTop) * tileHeight,
          tileWidth,
          tileHeight
        );
      }
      if (table[py][px] != 0) {
        if (table[py][px] == 1) {
          ctx.drawImage(
            red,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        if (table[py][px] == 2) {
          ctx.drawImage(
            blue,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        if (table[py][px] == 3) {
          ctx.drawImage(
            cyan,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        if (table[py][px] == 4) {
          ctx.drawImage(
            green,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        if (table[py][px] == 5) {
          ctx.drawImage(
            pink,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        if (table[py][px] == 6) {
          ctx.drawImage(
            purple,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        if (table[py][px] == 7) {
          ctx.drawImage(
            yellow,
            [px - 1] * tileWidth,
            [py - marginTop] * tileHeight,
            tileWidth,
            tileHeight
          );
        }

        /* ctx.fillRect(
          (px - 1) * tileWidth,
          (py - marginTop) * tileHeight,
          tileWidth,
          tileHeight
        ); */
      }
    }
  }
}

//Función Inicializar el teclado
function startKeyboard() {
  document.addEventListener("keydown", function (key) {
    if (key.keyCode == 38) {
      piece.rotate();
    }

    if (key.keyCode == 40) {
      piece.down();
    }

    if (key.keyCode == 37) {
      piece.left();
    }

    if (key.keyCode == 39) {
      piece.right();
    }
  });
}

//Funcion inicializadora
function loadGame() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //Cargamos las imagenes
  //Load assets
  blue = new Image();
  blue.src = "assets/img/blue.png";

  green = new Image();
  green.src = "assets/img/green.png";

  purple = new Image();
  purple.src = "assets/img/purple.png";

  cyan = new Image();
  cyan.src = "assets/img/cyan.png";

  pink = new Image();
  pink.src = "assets/img/pink.png";

  yellow = new Image();
  yellow.src = "assets/img/yellow.png";

  red = new Image();
  red.src = "assets/img/red.png";

  canvas.style.width = canvasWidth;
  canvas.style.height = canvasHeight;

  //Iniciamos el teclado
  startKeyboard();

  //Iniciamos el objeto
  piece = new pieceObject();

  setInterval(function () {
    mainFunction();
  }, 1000 / FPS);
}

//Funcion que borra/actualiza el canvas
function deleteCanvas() {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

function mainFunction() {
  deleteCanvas();
  drawTable();
  piece.falldown();
  piece.draw();
}
