import React from 'react';
import Video from './components/Video'
import './App.css'

function App() {
    return (
        <div className="app">
           <div className='app__videos'>
            <Video 
                url="https://v16-webapp.tiktok.com/defdaa2510155ff0fe7ee7f31db25ba1/624f6f82/video/tos/alisg/tos-alisg-pve-0037c001/1cf8aa634fd147c6ab97594471a4575f/?a=1988&br=2108&bt=1054&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HpoMyq8ZIRBGwe2NJlwyl7Gb&l=202204071710060102230830121E4A8627&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3dtNGc6ZnA1OTMzODczNEApZWU5aTU1ZmRlNzVnaTw8NWdeaDNlcjRvazNgLS1kMS1zcy0uL2ItNWMvYy9jYGAwLy46Yw%3D%3D&vl=&vr="
                channel="AjbarImad"
                description="Wow this works...!"
                song="Islam-Sobhi_Kuraan"
                likes={499}
                messages={399}
                shares={123}
            />
            <Video />
           </div>
        </div>
    );
}

export default App;
