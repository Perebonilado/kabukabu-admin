import React, { FC } from "react";

interface Props {
  title: string;
  isActive: boolean;
  handleClick: (title: string) => void;
}

const TripOptionItem: FC<Props> = ({ title, isActive, handleClick }) => {
  return (
    <div className="border-r border-r-[#E6E6E6] px-8 max-md:px-6 max-sm:border-r-0 max-sm:py-3 max-sm:border-b">
      <p
        className={`${
          isActive ? "text-sm text-[#000] font-bold" : "text-xs text-[#9A9A9A]"
        } cursor-pointer max-sm:text-center`}
        onClick={() => handleClick(title)}
      >
        {title}
      </p>
    </div>
  );
};

export default TripOptionItem;
