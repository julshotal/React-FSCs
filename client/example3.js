const SongContainer =  (props) => {
    if(props.songs.length === 0) {
        return (
            <div>
                <h3>No songs yet</h3>
            </div>
        );
    }

    const songList = props.songs.map((song) => {
        return (
            <div>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return(
        <div>
            <h1>My Favorite Songs!</h1>
            {songList}
        </div>
    );
};

const loadSongsFromServer = () => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', '/getSongs');

    const setSongs = () => {
        const songResponse = JSON.parse(xhr.response);

        ReactDOM.render(
            <SongContainer songs={songResponse}/>,
            document.getElementById('app')
        );
    };

    xhr.onload = setSongs;
    xhr.send();
};

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]}/>,
        document.getElementById('app')
    );

    loadSongsFromServer();
};

window.onload = init;
