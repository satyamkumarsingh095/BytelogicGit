// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center gap-8 border border-gray-400" id="vid1">
    
        {/* <div id="vid2"> */}
            <iframe 
                width="204" 
                height="363" 
                src="https://www.youtube.com/embed/cEXXWaBLopw" 
                title="Robert Pulford, CEO of Charville - Client Review" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="rounded-3xl" id="vid5"
            >
            </iframe>

            <iframe 
                width="204" 
                height="363" 
                src="https://www.youtube.com/embed/cuJy_r6l7kU" 
                title="Client Feedback: Ava Farvahri (Mypure Aesthetics - London)" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="rounded-3xl" id="vid5"
                >
            </iframe>
        {/* </div> */}

        {/* <div id="vid2"> */}
            <iframe 
                width="204" 
                height="363" 
                src="https://www.youtube.com/embed/uEEuKScX3fI" 
                title="Client Feedback - Adhiraj Surana" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="rounded-3xl" id="vid5"
                >
            </iframe>

            <iframe 
                width="204" 
                height="363" 
                src="https://www.youtube.com/embed/5R1LEhxmAbA" 
                title="Client Feedback - Drew (SEMI SKIMMED PLASTERING LONDON)" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="rounded-3xl" id="vid5"
                >
            </iframe>
        {/* </div> */}

       <iframe 
        width="204" 
        height="363" 
        src="https://www.youtube.com/embed/vb9yQoj9s4I" 
        title="Client Feedback for e-commerce website designing - Amol Saharia (A&amp;A KREATIVE BOX)" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        className="rounded-3xl" id="vid5"
        >
       </iframe>

    </div>
  );
};

export default VideoPlayer;