import React from "react";
import NotificationButton from "../buttons/notification/NotificationButton";
import { useAtom, useSetAtom } from "jotai";
import { notificationBarModal } from "@/atoms/modals";

export default function Profilebar(props: {className?: string, name: string, nickname: string}) {
  const setNotificationModalStatus = useSetAtom(notificationBarModal);
  return (
    <div>
      <div className={"ProfileBar flex justify-between place-items-center " + props.className}>
        <div className="Profile flex justify-between w-full gap-5 place-items-center">
          <div className="flex gap-4">
            <div className="bg-indigo-600 rounded-full w-[48px] h-[48px] flex">
              <p className="text-white text-center m-auto font-bold text-lg">
                {props.name.charAt(0)}
              </p>
            </div>
            <div className="flex flex-col place-items-left">
              <h2 className="text-white font-bold text-left text-lg">
                {props.name}
              </h2>
              <h3 className="text-white font-light text-left text-sm opacity-50">
                @{props.nickname}
              </h3>
            </div>
          </div>

          <div className="flex gap-5">
            <NotificationButton onClick={() => setNotificationModalStatus(true)} className={"bg-[#141925]"} active />
          </div>
        </div>
      </div>
    </div>
  );
}
