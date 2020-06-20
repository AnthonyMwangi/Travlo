import React from 'react'
import icon from '../images/book-button.svg'
import flight_tab from '../images/flight-tab.svg'
import seats_tab from '../images/seats-tab.svg'
import hotel_tab from '../images/hotel-tab.svg'
import checkout_tab from '../images/checkout-tab.svg'
import travels_tab from '../images/travels-tab.svg'

export default function AppSectionFive() {
  return (
    <div className="app-section section-5">

      <div className="section-wrapper">

        <div className="trial-tab">
          <img src={travels_tab} alt="travels" className="trial-icon"/>
          <div className="trial-caption">Start your free trial today. No credit card required.</div>
        </div>

        <BookingTab
          icon={flight_tab}
          title='FLIGHT'
          caption='SF0 -><- SPAIN'
          footer='09 AUG 2020, 11.45 AM'
        />

        <BookingTab
          icon={seats_tab}
          title='SEATS'
          caption='BUSINESS CLASS'
          footer='23F 24F'
        />

        <BookingTab
          icon={hotel_tab}
          title='HOTEL'
          caption='2 GUEST ROOMS'
          footer='10TH AUG 2020'
        />

        <BookingTab
          icon={checkout_tab}
          title='CHECKOUT'
          footer='11:30 AM'
          caption='15TH AUG 2020'
        />

        <div className="booking-button">
          <div className="button-text">BOOK NOW</div>
          <img src={icon} className='button-icon' alt="booking-button-icon"/>
        </div>

      </div>

    </div>
  )
}

const BookingTab = function({ icon, title='empty', caption='', footer='' }) {
  return (
    <div className='booking-tab'>

      <img src={icon} alt={`${title}-tab-icon`} className="tab-icon"/>

      <div className="tab-wrapper">

        <div className="tab-title">{title}</div>

        <div className="tab-caption">{caption}</div>

        <div className="tab-footer">{footer}</div>

      </div>

    </div>
  )
}
