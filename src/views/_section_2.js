import React from 'react'
import button_image from '../images/add_btn.svg'
import airplane_image from '../images/airplane.svg'

export default function AppSectionTwo() {
  return (
    <div className="app-section section-2">

      <div className="section-wrapper">

        <div className="section-heading">
          <div className="title">GREEN TREES NEAR ROCK FORMATION</div>
          <div className="divider"></div>
          <img src={airplane_image} alt="Airplane"/>
        </div>

        <div className="section-footer">

          <div className="location">
            <div className="location-1">SAN FRANCISCO</div>
            <div className="location-2">CALPE ALICANTE</div>
          </div>

          <img src={button_image} className='add-location' alt="add-button"/>

        </div>

      </div>

    </div>
  )
}
