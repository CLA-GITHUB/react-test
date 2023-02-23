import React from "react";

function Spacer() {
  return <div className='rounded-full w-[4px] h-[4px] bg-[#696969]'></div>;
}
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const SubHeader = () => {
  return (
    <div className='flex justify-between items-center'>
      <p className='text-[40px] font-thin'>Today's leaderboard</p>
      <div className='px-[24px] py-[18px] flex gap-2 items-center text-[14px] bg-[#1D1D1D] rounded-[16px]'>
        <span>
          {date.getDay() +
            " " +
            monthNames[date.getMonth()] +
            " " +
            date.getFullYear()}
        </span>
        <Spacer />
        <span className='bg-[#9BFF00] text-[#000000] uppercase px-[10px] py-[4px] rounded-[8px]'>
          Submissions open
        </span>
        <Spacer />
        <span>{date.getHours() + ":" + date.getMinutes()}</span>
      </div>
    </div>
  );
};

export default SubHeader;
