import React from 'react'
import menu_image from '../images/menu.svg';
import add_btn from '../images/add_btn.svg';

export default function AppSectionThree() {
  return (
    <div className="app-section section-3">

      <div className="section-wrapper">

        <div className="section-heading">
          <img className='menu' src={menu_image} alt=""/>
          <link rel="stylesheet" href="./"/>
        </div>

        <div className="section-footer">

          <div className="location">
            <div className="location-1">SPAIN</div>
            <div className="location-2">CALPE ALICANTE</div>
          </div>

          <img src={add_btn} className='location' alt="add-button"/>

        </div>

      </div>

    </div>
  )
}
