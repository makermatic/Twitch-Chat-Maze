let maze;
let player = new Player(230, 5, 25, 16);
let goal = new Goal(233, 465, 20);
let flakes = [];

let playerImage;
let goalImage;

function preload() {
    maze = loadImage('assets/maze.png');
    playerImage = loadImage('assets/player.png');
    goalImage = loadImage('assets/goal.png')
}

function setup() {
    createCanvas(484, 484)
    twitchClient();
}

function draw() {
    noStroke()
    background(maze)
    goal.display();
    player.display();

    if (keyIsPressed) {
        if (keyCode === LEFT_ARROW) {
            player.left();
        }

        if (keyCode === RIGHT_ARROW) {
            player.right();
        }

        if (keyCode === UP_ARROW) {
            player.up();
        }

        if (keyCode === DOWN_ARROW) {
            player.down();
        }
    }

    if (player.x >= 230 && player.y >= 469) {
        let t = frameCount / 60;
        for (let i = 0; i < random(5); i++) {
            flakes.push(new Flake()); // append snowflake object
        }

        // loop through snowflakes with a for..of loop
        for (let flake of flakes) {
            flake.update(t); // update snowflake position
            flake.display(); // draw snowflake
        }
    }
}

function twitchClient() {
    const client = new tmi.Client({
        channels: ["makermatic", "xlncesports"],
    });

    client.connect();

    client.on("message", (channel, tags, message, self) => {
        switch (message) {
            case 'left':
                player.left();
                console.log('left')
                break;
            case 'Left':
                player.left();
                console.log('Left')
                break;

            case 'right':
                player.right();
                console.log('right')
                break;
            case 'Right':
                player.right();
                console.log('Right')
                break;

            case 'up':
                player.up();
                console.log('up')
                break;
            case 'Up':
                player.up();
                console.log('Up')
                break;


            case 'down':
                player.down();
                console.log('down')
                break;

            case 'Down':
                player.down();
                console.log('down')
                break;
        }
    });
}