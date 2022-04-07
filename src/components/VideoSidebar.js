import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import './VideoSidebar.css'

function VideoSidebar({likes, messages, shares}){
    const [liked, setLiked] = useState(false)
    // const [countLike, setCountLike] = useState(1200)
    return(
        <div className='videoSidebar'>
            <div className='videoSidebar__button'>
                { (liked) ? 
                <FavoriteIcon color="error" onClick={()=> setLiked(!liked)} /> :
                <FavoriteBorderIcon onClick={()=> setLiked(!liked)}/> 
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar__button'>
                <ChatIcon />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;