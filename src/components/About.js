import React, { useState } from 'react'

function About(props) {

  
  

  let css ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode ==='dark'? '#14456F':'white'
  }

  return (
    <div style = {css} className='container'>
      <div className='container my-5 py-2 px-2' >
        <h1>About</h1>
        <p>This  is a app called #playWithText which is designed to perform certain modifications in your text. Text can be entered by the user and on clicking the buttons specific changes can be seen itno your entered text.
          Hope you would like this app. Don't forget to give your feedback as it is so much valuable to me i.e <b>Akash Agrawal</b> - the creator of this app. ThankYou!!!
        </p>
      </div>
    </div>
  )
}

export default About