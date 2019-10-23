'use strict';

var SongContainer = function SongContainer(props) {
    if (props.songs.length === 0) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'No songs yet'
            )
        );
    }

    var songList = props.songs.map(function (song) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                song.artist,
                ' - ',
                React.createElement(
                    'i',
                    null,
                    song.title
                )
            )
        );
    });

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'My Favorite Songs!'
        ),
        songList
    );
};

var loadSongsFromServer = function loadSongsFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/getSongs');

    var setSongs = function setSongs() {
        var songResponse = JSON.parse(xhr.response);

        ReactDOM.render(React.createElement(SongContainer, { songs: songResponse }), document.getElementById('app'));
    };

    xhr.onload = setSongs;
    xhr.send();
};

var init = function init() {
    ReactDOM.render(React.createElement(SongContainer, { songs: [] }), document.getElementById('app'));

    loadSongsFromServer();
};

window.onload = init;
