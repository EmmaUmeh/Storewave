import React from 'react';
import { BsStar } from 'react-icons/bs';
import { PiTShirtLight, PiPottedPlantLight } from 'react-icons/pi';
import { CiPenpot } from 'react-icons/ci';
import Doublethug from '../images/doublechecks.webp';
import { motion } from 'framer-motion';

const Herobanner = () => {
  const productslist = [
    { icons: <BsStar />, items: 'Popular products' },
    { icons: <PiTShirtLight />, items: 'Fashion' },
    { icons: <CiPenpot />, items: 'Decoration' },
    { icons: <PiPottedPlantLight />, items: 'Garden' },
  ];

  const containerAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.div
        className='pt-20 w-100 pl-20 pr-20 pb-10 flex sm:flex-col-reverse md:flex-col-reverse justify-between items-center'
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className='border border-inherit w-[30%] sm:w-[100%] md:w-[100%] pt-10 pb-20 pl-10 pr-10 rounded-[10px]'>
          <h5 className="text-2xl text-[#000] mb-10">Categories</h5>
          <div>
            {productslist?.map((productslists, index) => {
              return (
                <ul key={index} className='flex items-center gap-3 mb-10'>
                  <li className='text-[#0085ff] text-3xl'>{productslists.icons}</li>
                  <li className='text-[20px]'>{productslists.items}</li>
                </ul>
              );
            })}
            <button className='bg-[#0085ff] text-white w-full rounded-[48px] p-3 font-[700] text-[14px]'>All Products</button>
          </div>
        </div>

        <div className='pt-10 pb-20 w-[60%] sm:w-[100%] md:w-[100%] flex sm:flex-col md:flex-col mb-5 bg-[#fffbf8]'>
          {/* Add animations to the rest of your content as needed */}
          <motion.div
            className='flex flex-col justify-center p-5'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h5 className='text-2xl text-[#000] pb-3'>New arrival</h5>
            <h4 className='text-3xl text-[#000]'>2x1 in Basic Hoodies</h4>
            <p className='pb-3 pt-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas turpis dictumst sed lectus.
            </p>
            <button className='bg-[#20283f] text-white w-[50%] rounded-[48px] p-3 font-[700] text-[14px]'>Buy Now</button>
          </motion.div>

          <motion.div
            className='w-50'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={Doublethug} alt='doublethugs' className='object-cover w-full' />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Herobanner;
