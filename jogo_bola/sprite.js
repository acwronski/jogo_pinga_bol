function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
        
    }
}
var bg = new Sprite(0, 416, 600, 600 ),
spriteBoneco = new Sprite(331, 280, 87, 87),
perdeu = new Sprite(943, 28, 409, 190),
jogar = new Sprite(647, 423, 409, 175),
novo = new Sprite(634, 776, 488, 223),
spriteRecord = new Sprite(315, 35, 488, 175),
spriteChao = new Sprite(622, 686, 600, 51),

obs1 = new Sprite(18, 289, 50, 120),
obs2 = new Sprite(97, 289, 50, 120),
obs3 = new Sprite(122, 289, 50, 120),
obs4 = new Sprite(251, 289, 50, 120);


