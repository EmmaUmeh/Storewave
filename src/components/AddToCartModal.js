import React from 'react';

const AddToCartModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay fixed w-80 top-0 right-0 right-0 bottom-0 bg-white flex z-50">
      <div className="">
            <div className='flex items-center gap-60 justify-between px-2 py-5'>
                <h3 className='font-semibold text-2xl'>Cart</h3>

                <button className="text-3xl" onClick={closeModal}>
                     &times;
                </button>
            </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
