import ParticlesBg from "particles-bg";
import React, { Component } from 'react'
import Typical from 'react-typical'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <div className="typical">
               <Typical 
        steps={[     'Hello'  , 1000, 'hello  try it wear it ', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </div>


                <h1>
                  {props.data ? props.data.title : 'Loading'}


                  <span>    </span>
                </h1>
                
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
