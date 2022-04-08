import React, { useEffect, useState } from 'react';
import Video from './components/Video';
import db from  './Firebase'
import './App.css';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setVideos(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return (
        <div className="app">
           <div className='app__videos'>
               {videos.map( 
                   ( {url,channel,description,song,likes,messages,shares}, index ) => (

                       <Video key={index}
                           url={url}
                           channel={channel}
                           description={description}
                           song={song}
                           likes={likes}
                           messages={messages}
                           shares={shares}
                       />
                   )
                )}
           </div>
        </div>
    );
}

export default App;
