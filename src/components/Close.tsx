import { CloseIcon } from "@/assets/icons";
import React from "react";

type TCloseProps = { onClick: () => void };
const Close = ({ onClick }: TCloseProps) => {
  return (
    <span
      onClick={onClick}
      className="absolute top-[10px] right-[10px] z-10 bg-[#ccc]/20 hover:bg-[#ccc]/30 rounded-full p-[1px] cursor-pointer"
    >
      <CloseIcon width={15} height={15} fill="#fff" />
    </span>
  );
};

export default Close;
