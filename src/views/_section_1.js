import React from 'react'

import cta_icon_svg from '../images/cta-icon.svg'
import app_title_svg from '../images/main-text.svg'
import component_1 from '../images/component-1.svg'
import component_2 from '../images/component-2.svg'
import world_map from '../images/world-map.png'

export default function section_1() {
  return (
    <div className="app-section section-1">

      <div className="heading">
        <div className="logo">Travlo</div>
        <div className="languages">
          <div className="language">EN</div>
          <div className="language">DE</div>
        </div>
      </div>

      <img src={component_2} alt='scroll-img-component' className="scroll-img-component" />

      <div className='main-component'>

        <img className="app-title" src={app_title_svg} alt="TRAVEL DESTINATIONS"/>

        <div className="app-caption">
          Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
        </div>

        <button className="call-to-action">
          <div className="cta-text">Read More</div>
          <img className='cta-icon' src={cta_icon_svg} alt=">"/>
        </button>

        <img src={component_1} className="plane-img-component" alt='plane-vector'/>

      </div>

      <img src={world_map} className="world-map" alt='world map'/>

    </div>
  )
}
