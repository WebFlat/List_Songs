;(function() {
    "use strict";


    var playList = [{
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song: "BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }
    ];

     function print(songName) {
         document.write(songName);
     }

     function printList(listSong) {
         var listSongHTML = '<div class="list">';
         listSongHTML += '<h1>Songs List: </h1>' + '<ol>';
         for (var i = 0; i < playList.length; i++) {
             listSongHTML += "<li>" + playList[i].song + "</li>";
         }
         listSongHTML += "</ol>" + '</div>';
         print(listSongHTML);
     }
    
   printList(playList);


})();