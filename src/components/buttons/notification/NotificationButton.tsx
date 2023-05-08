import { color } from "framer-motion";
import React from "react";
import { TbBellRinging2 } from "react-icons/tb";


export default function NotificationButton(props: { className?: string, active?: boolean, onClick?: () => void }) {
  return (
    <div>
      <button onClick={props.onClick} className={`relative p-4 rounded-2xl hover:bg-opacity-80 transition-all duration-200 ` + props.className}>
        <TbBellRinging2 color="white" size={21} />
        {props.active ? ( <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-green-600 absolute top-[0.1rem] right-[0.1rem] ring-4 ring-black "></div>) : null}
      </button>
    </div>
  );
}
