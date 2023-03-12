var instellingen = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: spelLaden,
        create: spelOpbouwen,
        update: spelUpdaten
    }
};

let speler;
let sterren;
let bommen;
let terreinGroep;
let cursors;
let score = 0;
let gameOver = false;
let scoreTekst;

let game = new Phaser.Game(instellingen);

function spelLaden() {
    this.load.image('achtergrond', 'afbeeldingen/achtergrond.png');
    this.load.image('platform', 'afbeeldingen/platform.png');
    this.load.image('ster', 'afbeeldingen/ster.png');
    this.load.image('bom', 'afbeeldingen/bom.png');
    this.load.spritesheet('speler', 'afbeeldingen/speler.png', { frameWidth: 32, frameHeight: 48 });
} // einde functie 'spelLaden'

function spelOpbouwen() {

} // einde functie 'spelOpbouwen'

function spelUpdaten() {

} // einde functie 'spelUpdaten'