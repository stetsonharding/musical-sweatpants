import React from 'react'

import '../../css/FindAlbum.css'

function FindAlbum() {
    return (
       
            <div className='find-album-input-container'>
                <p id="find-album-label">Album Art</p>
                <input className='find-album-input' type="search" placeholder='Find Album' />
            </div>
        
    )
}

export default FindAlbum
