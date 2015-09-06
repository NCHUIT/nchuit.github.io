
var game = {

    preload: function(){
        var game = this.main;
        // game.load.image('sky', '{% static "game/sky1.png" %}');
        game.load.tilemap('map', 'game/ninja-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('kenney', 'tiles/kenney.png');
        game.load.spritesheet('dude', 'game/pastleo.png', 35, 69);
        game.load.image('diamond', 'game/diamond.png');
    },
    create: function(){
        var game = this.main;
        game.physics.startSystem(Phaser.Physics.NINJA);
        game.physics.ninja.gravity = 1;
        game.physics.ninja.setBoundsToWorld();

        var map = game.add.tilemap('map');
        map = game.add.tilemap('map');
        map.addTilesetImage('kenney');
        this.map = map;

        var layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();

        // use the slope data in json, also fixing the key + 1 not matching error
        var slopeMap = _.object(_.map(_.pairs(game.cache.getTilemapData('map').data.tilesets[0].tileproperties),function(ele){
            return [(parseInt(ele[0]) + 1).toString(),parseInt(ele[1].slope)];
        }));

        this.tiles = game.physics.ninja.convertTilemap(map, layer, slopeMap);

        var player = game.add.sprite(64, 0, 'dude');
        game.physics.ninja.enable(player);
        // game.physics.ninja.enableCircle(player, player.height / 2);
        player.body.bounce = 0.5;
        player.body.friction = 0.5;

        player.body.collideWorldBounds = true;

        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);

        this.cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);
        this.player = player;

        //  Pushable object
        var diamond = game.add.sprite(200, game.world.height - 150, 'diamond');
        game.physics.ninja.enable(diamond);
        diamond.body.collideWorldBounds = true;
        diamond.body.bounce = 0.5;
        this.diamond = diamond;

        this.jumping = 0;
    },
    update: function(){
        var game = this.main;
        var tiles = this.tiles;
        var player = this.player;
        var cursors = this.cursors;

        game.physics.ninja.collide(player, this.diamond);
        var jumpable = false;
        for (var i = 0; i < tiles.length; i++)
        {
            if(player.body.aabb.collideAABBVsTile(tiles[i].tile)){
                jumpable = true;
            }
        }

        if (cursors.left.isDown)
        {
            player.body.moveLeft(150);
            player.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            player.body.moveRight(150);
            player.animations.play('right');
        }
        else
        {
            player.animations.stop();
            player.frame = 4;
        }

        if (cursors.up.isDown)
        {
            if(jumpable && !this.up_down)
                this.jumping = 10;
            this.up_down = true;
        }
        else{
            this.up_down = false;
        }

        if(this.jumping){
            player.body.moveUp(350);
            this.jumping--;
        }
    }
};

jQuery(function(){
    var height = jQuery(window).height();
    if(height > 830) height = 830;
    game.main = new Phaser.Game(jQuery(window).width(), height, Phaser.AUTO, 'game', game, true);
});
