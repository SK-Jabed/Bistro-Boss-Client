import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className='mx-auto text-center w-4/12 my-8'>
        <p className="text-[#D99904] text-lg italic mb-2">--- {subHeading} ---</p>
        <h2 className='text-4xl font-medium uppercase border-y-4 py-4'>{heading}</h2>
      </div>
    );
};

export default SectionTitle;