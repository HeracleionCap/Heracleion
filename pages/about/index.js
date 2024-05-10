import React, {useState} from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiV,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'Our Mission Statement',
    info: [
      {
        title: `- Welcome to Heracleion Capital, where we are more than just 
        a financial hub - we are the architects of transformative journeys 
        for traders and investors worldwide. Our foundation is built upon 
        discipline, professionalism, and strategic foresight pillars. 
        `,
        
      },
      {
        title: `- As we navigate the ever-evolving financial landscape, our commitment to 
        excellence guides every decision transformed, ensuring unparalleled 
        value for our clients. Together, we embark on a journey of growth 
        and prosperity, fueled by our unwavering dedication to proven 
        trading principles.`,
        
      },
    ],
  },
  {
    title: 'Company History',
    info: [
      {
        title: `-In the annals of Heracleion Capital, history intertwines with 
        resilience and adaptability, mirroring the ancient city from which 
        we draw our name. Like the thriving port of Heracleion, we have 
        weathered storms and emerged stronger, driven by discipline and 
        strategic vision. From our very inception, weve approached trading 
        as a craft, employing innovation and technology to carve our path to 
        success. 
        `,
        
      },
      {
        title: `- Our journey is a testament to our commitment to safeguarding 
        capital, anchored by facts, risk management, and the judicious use 
        of stop-loss orders. At Heracleion Capital, our voyage is one of 
        transformation, guided by professionalism and an unwavering 
        adherence to time-tested trading principles.`,
        
      },
    ],
  },
  {
    title: 'Philosophy / Approach',
    info: [
      {
        title: `- Step into the world of Heracleion Capital, 
        where philosophy meets action in a symphony of discipline, 
        risk management, and perpetual learning. Our approach is a 
        harmonious blend of market analysis and insights gleaned from historical 
        market data, enhancing our trading strategies while staying true to 
        our meticulously crafted plans. `,
      },
      {
        title: `- We understand the importance of managing risk. Every decision we make is rooted in factual analysis, 
        ensuring that our journey is guided by professionalism and an 
        unyielding commitment to proven trading principles`,
      },

    ],
  },
  {
    title: 'Experience',
    info: [
      {
        title: `- At Heracleion Capital, experience is not just a word - 
        it's our legacy. Forged in the crucible of discipline and risk 
        management, our team brings a wealth of knowledge honed over 7+ years 
        in the financial industry. We treat trading as a sacred trust, 
        leveraging technology to navigate diverse market conditions with 
        grace and precision. `,
        
      },
      {
        title: `- Our track record speaks volumes about our 
        dedication to excellence and our ability to consistently deliver 
        results. When you partner with Heracleion Capital, you're not just 
        joining a team - you're embarking on a journey toward financial 
        success, guided by seasoned veterans who understand the true essence 
        of trading.`,
        
      },
      
      
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] =useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
        >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6'>
        {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
              <motion.h2 
                variants={fadeIn('right', 0.2)} 
                initial='hidden' 
                animate='show' 
                exit='hidden' 
                className='h2'
              >
              "The goal of a successful trader is to make the best trades. <span className='text-accent'>Money is secondary."</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)} 
                initial='hidden' 
                animate='show' 
                exit='hidden'  
                className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
              >
              <i className='  text-white '> 
                - Alexander Elder
              </i>
              </motion.p>
              {/* counters */}
              <motion.div
                variants={fadeIn('right', 0.6)} 
                initial='hidden' 
                animate='show' 
                exit='hidden' 
                className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0
                mb-8'
              >
                <div className='flex flex-1 xl:gap-x-6'>
                  {/* experience */}
                  <div className='relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0'>
                    <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                    max-w-[100px] ' >
                      Years of experience
                    </div>
                  </div>
                  {/* clients */}
                  <div className='relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0'>
                    <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                      <CountUp start={0} end={250} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                    max-w-[100px] ' >
                      Satisfied clients
                    </div>
                  </div>
                  {/* Projects */}
                  <div className='relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0'>
                    <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                      <CountUp start={0} end={650} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                    max-w-[100px] ' >
                      Finished Projects
                    </div>
                  </div>
                  {/* awards */}
                  <div className='relative flex-1 '>
                    <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                      <CountUp start={0} end={8} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                    max-w-[100px] ' >
                      Winning Awards
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map ((item, itemIndex)=> {
                return ( 
                <div 
                  key={itemIndex} 
                  className={`${
                    index === itemIndex && 
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
                );                
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center 
            xl:items-start'>
              {aboutData[index].info.map((item, itemIndex)=> {
                return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/85'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'></div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) =>{
                    return <div className='text-2xl text-white'>{icon}</div>;
                  })}
                  </div>
                </div>
              })}
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
