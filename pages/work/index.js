/* eslint-disable react/no-unescaped-entities */

// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'

// framer motion 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0'>
            <motion.h3 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h3 xl:mt-12'>
              My Work <span className='text-accent'>.</span>
            </motion.h3>
            <motion.p 
            variants={fadeIn('up',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              "I'm a versatile software engineer with a Bachelor's degree in Software Engineering, known for my diverse portfolio. 
              I've created everything from Morse code converters to desktop games and complex web applications."
{/*                
              showcasing my adaptability and technical skills across different domains.
              I'm passionate about exploring new opportunities and pushing the boundaries of technology. */}
            </motion.p>
          </div>
          {/* slider */}
          <motion.div 
          variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
