import React from "react";

const Pagination = ({ setCurrent, currentPage, totalPage, loading }) => {
  const onNext = () => {
    setCurrent((prev) => {
      if (prev >= totalPage) {
        return;
      } else {
        return prev + 1;
      }
    });
  };
  const onPrev = () => {
    setCurrent((prev) => {
      if (prev == 1) {
        return;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <div className='space-x-3 flex justify-end mt-5 text-[#000000]'>
      <button
        disabled={loading || currentPage === 1}
        onClick={onPrev}
        className='px-5 py-2 bg-[#9BFF00] rounded-[8px]'
      >
        Prev
      </button>
      <p className='px-5 py-2 bg-[#9BFF00] rounded-[8px]'>{currentPage}</p>
      <button
        disabled={loading || currentPage >= totalPage}
        onClick={onNext}
        className='px-5 py-2 bg-[#9BFF00] rounded-[8px]'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
