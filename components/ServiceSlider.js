//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxArrowTopRight,
  
} from "react-icons/rx";

import {
  SiPostman,
  SiTestinglibrary,
  SiManageiq,
} from 'react-icons/si';

// import {
//   CiDatabase
// } from 'react-icons/ci';

import {
  MdOutlineDeveloperMode,
  MdOutlineReportProblem
} from 'react-icons/md';

// import {
//   VscServerEnvironment
// } from 'react-icons/vsc';

//improt required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <SiTestinglibrary />,
    title: 'Software Testing and QA',
    description: 'manual and automated software testing services to ensure the quality',
  },
  {
    icon: <SiPostman />,
    title: 'API Testing',
    description: 'API testing and validation services using tools like Postman to ensure the proper functioning of APIs.',
  },
  {
    icon: <SiManageiq />,
    title: 'Collaboration and Project Management',
    description: 'project management and collaboration services using platforms.',
  },
  {
    icon: <MdOutlineDeveloperMode />,
    title: 'Programming and Development',
    description: 'proficiency in various programming languages to offer development services.',
  },
  {
    icon: <MdOutlineReportProblem />,
    title: 'Problem-Solving and Innovative Solutions',
    description: 'problem-solving skills to tackle challenging projects and offer innovative solutions.',
  },
];

const ServiceSlider = () => {

  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
  }}
    freemode = {true}
    pagination = {{
      clickable: true,
    }}
    modules = {[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item,index) => {
          return <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-rgba[(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className= 'mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45
                group-hover:text-accent transi duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        })
      }

  </Swiper>
};

export default ServiceSlider;
