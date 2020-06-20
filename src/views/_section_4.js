import React from 'react'

import play_button from '../images/play-button.svg'
import button_image from '../images/add_btn.svg'


export default function AppSectionFour() {
  return (
    <div className="app-section section-4">

      <div className="section-wrapper">

        <div className="section-heading">
          <img className='play-button' src={play_button} alt="Menu"/>
        </div>

        <div className="section-footer">

          <div className="location">
            <div className="location-1">SPAIN</div>
            <div className="location-2">CALPE ALICANTE</div>
          </div>

          <img src={button_image} className='add-location' alt="add-button"/>

        </div>

      </div>

    </div>
  )
}
