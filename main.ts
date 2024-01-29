player.onChat("Level 9", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(SPIDER), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(CREEPER), pos(0, 0, 0))
    }
    for (let index = 0; index < 1; index++) {
        mobs.spawn(mobs.monster(ENDERMAN), pos(0, 0, 0))
    }
})
player.onChat("Level 7", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(SPIDER), pos(0, 0, 0))
    }
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
})
player.onChat("Level 10", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 1; index++) {
        mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    }
})
player.onChat("Level 2", function () {
    gameplay.setDifficulty(NORMAL)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
})
player.onChat("Level 5", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
})
player.onChat("Level 8", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(SPIDER), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(CREEPER), pos(0, 0, 0))
    }
})
player.onChat("Level 4", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
})
mobs.onMobKilled(mobs.monster(CREEPER), function () {
    player.say("-1 Creeper!")
})
mobs.onMobKilled(mobs.monster(SKELETON), function () {
    player.say("-1 Skeleton!")
})
mobs.onMobKilled(mobs.monster(ENDERMAN), function () {
    player.say("-1 Enderman!")
})
player.onItemInteracted(GOAT_HORN, function () {
    player.say("Game is starting in 10 seconds!")
})
player.onChat("Level 6", function () {
    gameplay.setDifficulty(HARD)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
})
mobs.onMobKilled(mobs.monster(SPIDER), function () {
    player.say("-1 Spider")
})
player.onChat("Level 1", function () {
    gameplay.setDifficulty(EASY)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
})
player.onChat("Level 3", function () {
    gameplay.setDifficulty(NORMAL)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
    for (let index = 0; index < 5; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    player.say("-1 Zombie!")
})
mobs.onMobKilled(mobs.monster(WARDEN), function () {
    player.say("Finnaly!")
})
gameplay.setDifficulty(PEACEFUL)
