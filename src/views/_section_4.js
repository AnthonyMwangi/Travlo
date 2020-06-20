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

        <div className="app-section-footer">

          <div className="location">
            <div className="location-1 sm">ITALY</div>
            <div className="location-2 sm">Bolzano</div>
          </div>

          <img src={button_image} alt="add-button" className='add-location sm'/>

        </div>

      </div>

    </div>
  )
}
