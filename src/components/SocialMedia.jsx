import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div title='linkedin'>
        <a href="https://www.linkedin.com/in/prajwal-patil-68564027b/"  target='_blank' rel='noopener noreferrer'  >
            <AiFillLinkedin/></a>
        
      </div>
      <div title='Github'>
        <a href="https://github.com/prajwal-26"  target='_blank' rel='noopener noreferrer'  >
        <AiFillGithub/>
        </a>
  
        
      </div>
      <div title='twitter'>
        <a href="https://twitter.com/_prajwalpatil" target='_blank' rel='noopener noreferrer' > <BsTwitter/></a>
     
      </div>
      <div title='leetcode'>
        <a href="https://leetcode.com/prajwal__patil/" target='_blank' rel='noopener noreferrer'  >
            <SiLeetcode/></a>
      
      </div>
    </div>
  )
}

export default SocialMedia
