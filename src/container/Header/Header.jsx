import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
import {AppWrap} from '../../wrapper'
const scaleVariants = {
  whileInView: {
  scale:[0,1],
  opacity:[0,1],
  transition:{
    duration:1,
    ease:'easeInOut',
  },

  },
}
const Header = () => {

  const handleDownloadResume = () => {
    // Replace 'YOUR_RESUME_FILE_URL' with the actual URL of your resume file.
    const resumeFileUrl = 'YOUR_RESUME_FILE_URL';
    const link = document.createElement('a');
    link.href = resumeFileUrl;
    link.download = 'Prajwal_Resume.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div  className='app__header app__flex'>
      <motion.div
       whileInView={{x:[-100,0],opacity:[0,1]}}
       transition={{duration:1 }}
       className='app__header-info'
      >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{marginLeft:20}}>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Prajwal</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className='p-text'>
            Web Developer
          </p>
          <p className='p-text'>Freelancer</p>
        </div>
        
        <button className='download-button' onClick={handleDownloadResume}>
        Download Resume
      </button>
        
      </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
       transition={{duration:1,delayChildren:1 }}
       className='app__header-img'>
        <img src={images.nice} alt="profile_bg" />
      
      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.javascript,images.react,images.redux,images.next].map((circle,index)=>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        </motion.div>

       
     
    </div>
  )
}

export default AppWrap(Header, 'home');
