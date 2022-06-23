// ==UserScript==
// @name SoundCloud hide reposts and playlists
// @version 1.0
// @author Ben Lynch
// @description Display only new songs by followed artists in your stream.
// @match *://soundcloud.com/stream
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
(
    function(){
        function noRepost(){
            let repost = $(".soundList__item:has('.sc-ministats-reposts')")
            if (repost) {
                let item = repost.closest(".soundList__item")
                item.remove()
            }
        }
        function noPlaylist(){
            let playlist = $(".soundList__item:has('.playlist')");
            if (playlist) {
                playlist.remove()
            }
        }
        window.addEventListener("DOMNodeInserted", noRepost, false);
        window.addEventListener("DOMNodeInserted", noPlaylist, false);
    }
)();
