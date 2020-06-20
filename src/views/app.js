import React from 'react';
import SectionOne from './_section_1'
import SectionTwo from './_section_2'
import SectionThree from './_section_3'
import SectionFour from './_section_4'
import SectionFive from './_section_5'

export default function App() {
  return (
    <div className="App">

      <section className='app-body'>

        <SectionOne/>

        <SectionTwo/>

        <SectionThree/>

        <SectionFour/>

        <SectionFive/>

      </section>

    </div>
  );
}
