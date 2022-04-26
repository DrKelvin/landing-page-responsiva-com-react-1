import React from 'react';
import ImgSponsorshipDataBiz from '../images/client-databiz.svg'
import ImgSponsorshipAudioPhile from '../images/client-audiophile.svg'
import ImgSponsorshipMeet from '../images/client-meet.svg'
import ImgSponsorshipMaker from '../images/client-maker.svg'

export default function(){
  return(
    <div className="main">
      <h1>
        <b>
          Make
        </b>
         remote work
      </h1>

      <p>Get your team in sync, no matter your
        location. Streamline processes, create 
        team rituals, and watch productivity soar.
      </p>

      <button className="main-button">
        Learn More
      </button>

      <div className="sponsorship">
        <img src={ImgSponsorshipDataBiz} alt="sponsorship image from DataBiz" />
        <img className="img-audio-phile" src={ImgSponsorshipAudioPhile} alt="sponsorship image from AudioPhile" />
        <img src={ImgSponsorshipMeet} alt="sponsorship image from Meet" />
        <img src={ImgSponsorshipMaker} alt="sponsorship image from Maker" />
      </div>
      
    </div>
  );
}