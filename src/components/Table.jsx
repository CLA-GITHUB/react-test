import React from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

function Card({ id, photo, title, author, like }) {
  return (
    <div className='border border-gray-500 rounded-lg flex py-2 px-5'>
      <div className='w-20 flex items-center'>
        <span>{id}</span>
      </div>

      <div className='flex gap-1 items-center flex-1'>
        <div>
          <img src={photo} className='w-32 h-16 bg-cover rounded-lg' />
        </div>
        <p className='text-[20px] font-thin leading-[28px]'>{title}</p>
      </div>

      <div className='flex gap-1 items-center'>
        <div>
          <img src={photo} className='w-10 rounded-full' />
        </div>

        <p className='font-thin text-[16px]'>{author}</p>
      </div>

      <div className='flex gap-1 text-sm items-center w-24 justify-end'>
        <span>{like}</span>
        <HiArrowNarrowUp className='text-[#9BFF00] text-xl' />
      </div>
    </div>
  );
}

const Table = ({ videos }) => {
  return (
    <>
      <div className='space-y-5 mt-2'>
        <div className='flex'>
          <p className='w-20 flex items-center text-[#696969] text-[16px] font-thin'>
            #
          </p>
          <p className='flex  items-center flex-1 ml-5 text-[#696969] text-[16px] font-thin'>
            Title
          </p>
          <p className='flex gap-1 items-center justify-start w-28 text-[#696969] text-[16px] font-thin'>
            Author
          </p>
          <p className='w-26 text-[#696969] text-[16px] font-thin'>
            <span className='flex gap-1 items-center'>
              Most Liked <FiChevronDown />
            </span>
          </p>
        </div>
        {videos.map((video) => {
          return (
            <Card
              id={video.user_id}
              like={video.like}
              photo={video.photo}
              title={video.title}
              author={video.username}
              key={video.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Table;
