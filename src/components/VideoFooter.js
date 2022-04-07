import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import './VideoFooter.css';

function VideoFooter({channel, description, song}){
    return(
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h6>@{channel}</h6>
                <p>{description}</p>
                <div className='videoFooter__ticker'>
                    <MusicNoteIcon className='videoFooter__icon'/>
                    <Ticker mode="smooth">
                        { ({index}) => (
                                <>
                                    <p>{song}</p>
                                </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className='videoFooter__record' src='https://static.thenounproject.com/png/934821-200.png'></img>
        </div>
    )
}
export default VideoFooter;