document.querySelector("#check").addEventListener("click", check);
let halloweenMovie = document.getElementById("halloween");
halloweenMovie.addEventListener("keydown", function(e) {
    if (e.keyCode === 13 || e.key === 13) {
        e.preventDefault();
        document.getElementById("check").click();
    }
})

const halloween = "It's the Great Pumpkin Charlie Brown";
function check() {
    const halloween = document.querySelector("#halloween").value.toLowerCase();

    // conditionals
    if(halloween === "it's the great pumpkin, charlie brown" || halloween === "it's the great pumpkin charlie brown") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/3o6Zt2qfZ4kOq8Ww6s/giphy.gif')";
    
    } else if (halloween === "haunted mansion") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/5b6b6d060976a4bd19cf5ddd69f44802/3733ced4cd8fa0d3-9d/s540x810/febce2e8e92cf30a87907f15ef8d488235616b96.gifv')";

    } else if (halloween === "hocus pocus") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/bf/60/e7/bf60e75ccd370d6c176285b026dbeef9.gif')";

    } else if (halloween === "casper") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/bb18e54ee481074e0a1d2ebdab0ad524/tumblr_nvcjomYFaw1rzoi3uo8_640.gif')";
        
    } else if (halloween === "goosebumps") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/e0/5f/08/e05f0839887e67104ff07b9cd74fffa2.gif')";
        
    } else if (halloween === "the addams family") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.giphy.com/media/QyEO7GCqPQeH3UVxA0/giphy.gif')";
        
    } else if (halloween === "coraline") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/7wSu.gif')";
        
    } else if (halloween === "hotel transylvania") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/8FZ.gif')";
        
    } else if (halloween === "monster house") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0htMsqC_xS17c_oM2VEfkHhaFVZpWtL41Sg&usqp=CAU')";
        
    } else if (halloween === "frankenweenie") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/B8Ua.gif')";
        
    } else if (halloween === "the spiderwick chronicles" || halloween === "spiderwick chronicles") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/6c/94/2e/6c942e25833d9be4be2a3543e1adf62f.gif')";
        
    } else if (halloween === "corpse bride") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.tenor.com/7b7myp4K0koAAAAC/corpse-bride-tim-burton.gif')";
        
    } else if (halloween === "beetlejuice") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/f3/98/64/f398642074a70f0543606159271a2f4d.gif')";
        
    } else if (halloween === "harry potter and the sorcerer's stone") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/12/9e/2a/129e2ace0c7dfcdaa1fe6a710be9457d.gif')";
        
    } else if (halloween === "harry potter and the chamber of secrets") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://24.media.tumblr.com/e1c4c4019733a52653632418e76d3597/tumblr_mq1fctoA231s8g66lo1_500.gif')";
        
    } else if (halloween === "harry potter and the prisoner of azkaban") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/Eite.gif')";
        
    } else if (halloween === "harry potter and the goblet of fire") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://giffiles.alphacoders.com/247/24780.gif')";
        
    } else if (halloween === "harry potter and the order of the phoenix") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://images5.fanpop.com/image/photos/29400000/Harry-Potter-and-the-Order-of-the-Phoenix-harry-potter-and-the-order-of-the-phoenix-29470443-500-238.gif')";
        
    } else if (halloween === "harry potter and the half blood prince") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://giffiles.alphacoders.com/141/141739.gif')";
        
    } else if (halloween === "harry potter and the deathly hallows part 1") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://images5.fanpop.com/image/photos/29500000/gif-harry-potter-and-the-deathly-hallows-part-1-29563773-500-211.gif')";
        
    } else if (halloween === "harry potter and the deathly hallows part 2") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/KZYh.gif')";
        
    } else if (halloween === "monsters, inc." || halloween === "monsters inc") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/DEQu.gif')";
        
    } else if (halloween === "the witches") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/T8D6Fr3mEocAAAAd/the-witches-anjelica-huston.gif')";
        
    } else if (halloween_movies === "miss peregrine's home for peculiar children") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/FavoriteAcademicKawala-size_restricted.gif')";
        
    } else if (halloween === "wizard of oz") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media4.giphy.com/media/LqxTooUoC5oo8BBd17/giphy.gif?cid=6c09b9529173aeb393c96979ceeb8dec4e3e17a810e3a21b&rid=giphy.gif&ct=g')";
        
    } else if (halloween === "et" || halloween === "E.T. the Extra-Terrestrial" || halloween === "e.t.") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/G32FcxqlPHsAAAAd/et-the-extra-terrestrial-et-yoda.gif')";
        
    } else if (halloween === "halloween town" || halloween === "halloweentown") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://66.media.tumblr.com/6f48df4236e41f8299a6451f66152530/tumblr_oej5slwUdW1rp0vkjo1_500.gif')";
        
    } else if (halloween === "coco") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.tenor.com/vJzjZv-EbIoAAAAC/remember-me-coco.gif')";
        
    } else if (halloween === "Kiki's Delivery Service" || halloween === "kikis delivery service") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media4.giphy.com/media/HLzvuV6rmpdeM/giphy.gif')";
        
    } else if (halloween === "The Nightmare Before Christmas" || halloween === "nightmare before christmas") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/TGAE.gif')";
        
    } else if (halloween === "ghostbusters") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/xT8qB72Dfmxd8nv9DO/giphy.gif')";
        
    } else if (halloween === "ghostbusters afterlife" || halloween === "ghostbusters: afterlife") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/wWh2rKVimP6Vs9SUA4/giphy.gif')";
        
    } else if (halloween === "toy story of terror") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/38po.gif')";
        
    } else if (halloween === "spirited away") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/b07clVdSOQcSY/giphy.gif?cid=6c09b952537e90a35d85866d449a578d5cc079165a591705&rid=giphy.gif&ct=g')";
        
    } else if (halloween === "paranorman") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/g9UYSHoGIG4AAAAC/paranorman-lights-off.gif')";
        
    } else if (halloween === "gremlins") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i2.wp.com/www.rowsdowr.com/wp-content/uploads/2012/12/tumblr_ldcd6riynX1qd1fjko1_500.gif?resize=498%2C261')";
        
    } else if (halloween === "young frankenstein") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media1.giphy.com/media/3oz8xECfoBJUfExt60/giphy.gif')";
        
    } else if (halloween === "the burbs") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/SentimentalHiddenGelding-size_restricted.gif')";
        
    } else if (halloween === "the book of life" || halloween === "book of life") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/AlertLankyIndigobunting-size_restricted.gif')";
        
    } else if (halloween === "labyrinth") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.giphy.com/media/l0HlJu7nffFQkTg88/giphy.gif')";
        
    } else if (halloween === "the dark crystal" || halloween === "dark crystal") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/65XQ.gif')";
        
    } else if (halloween === "the neverending story" || halloween === "neverending story") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media4.giphy.com/media/26BRymvRzCb0ZA8yQ/200.gif')";
        
    } else if (halloween === "Lego Star Wars Terrifying Tales") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/AQu5SRMiKjMAAAAC/block-attack-lego-star-wars-terrifying-tales.gif')";
        
    } else if (halloween === "Scary Stories to Tell in the Dark") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://img.buzzfeed.com/buzzfeed-static/static/2019-06/3/15/asset/buzzfeed-prod-web-05/anigif_sub-buzz-8894-1559588770-1.gif')";
        
    } else if (halloween === "Mary and the Witch's Flower") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/17/53/aa/1753aa078374388082d4d98575b330d5.gif')";
        
    } else if (halloween === "The House With a Clock in Its Walls") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/64fb3996e7c2afe6ddb731c3dddd4a24/tumblr_inline_pb1ldbKoXX1s2t5hy_540.gif')";
        
    } else if (halloween === "nightbooks") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/BaggyBaggyFruitbat-size_restricted.gif')";
        
    } else if (halloween === "the goonies" || halloween === "goonies") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/BPa.gif')";
        
    } else if (halloween === "little monsters") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://33.media.tumblr.com/e6f116a5a032258fd4f331e0a504ff54/tumblr_nd9bkoaB9D1rp0vkjo1_500.gif')";
        
    } else if (halloween === "the monster squad" || halloween === "monster squad") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/BRwN.gif')";
        
    } else if (halloween === "james and the giant peach" || halloween === "james & the giant peach") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/QfWd.gif')";
        
    } else if (halloween === "poltergeist") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/WearyCorruptIndianringneckparakeet-size_restricted.gif')";
        
    } else if (halloween === "poltergeist 2") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media3.giphy.com/media/6iTw8GatNqAlW/giphy.gif')";
        
    } else if (halloween === "pee wee's big adventure" || halloween === "pee wees big adventure") {
        document.querySelector("#placeToSee").innerText = "Tell 'em Large Marge sent ya.";
        document.querySelector("body").style.backgroundImage = "url('http://38.media.tumblr.com/51c6bf0c8d96a87140a042971aa0625d/tumblr_ng2s0mWLGU1rp0vkjo1_500.gif')";
        
    } else {
        document.querySelector("#placeToSee").innerText = "Like, what was that?";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/GrimBruisedBlackfish-size_restricted.gif')";
    }
}



