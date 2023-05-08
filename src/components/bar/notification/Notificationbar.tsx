import React from "react";
import FitlogModal from "../../modal/FitlogModal";
import { notificationBarModal } from "@/atoms/modals";
import { useAtom } from "jotai";
import Notification from "./components/Notification";
import { CiSettings } from "react-icons/ci";
import { BiDumbbell } from "react-icons/bi";

export default function Notificationbar(props: { className?: string }) {
  const [modalStatus, setModalStatus] = useAtom(notificationBarModal);
  return (
    <div>
      <FitlogModal
        onCloseRequest={() => setModalStatus(false)}
        className={
          "w-[85%] bg-mirage-800 h-screen rounded-l-[35px] overflow-auto " + props.className
        }
        isActive={modalStatus}
        position="right"
      >
        <div className="header fixed p-8 py-10 w-full bg-mirage-800 z-50 rounded-tl-[35px]">
          <h1 className="text-white font-bold text-2xl ">Bildirimler</h1>
        </div>
        <div className="p-8 py-10 mt-20">
          <div className="notifications flex flex-col gap-5">
            <Notification
              timestamp={1683459143}
              title="Elinden geleni yap!"
              description="Withdraw successfully completed!"
              iconClassName="bg-red-700"
            >
              <BiDumbbell size={24} color="white" />
            </Notification>

            <Notification
              timestamp={1683459143}
              title="Elinden geleni yap!"
              description="Withdraw successfully completed!"
              iconClassName="bg-red-700"
            >
              <BiDumbbell size={24} color="white" />
            </Notification>
            <Notification
              timestamp={1683459143}
              title="Elinden geleni yap!"
              description="Withdraw successfully completed!"
              iconClassName="bg-red-700"
            >
              <BiDumbbell size={24} color="white" />
            </Notification>
            <Notification
              timestamp={1683459143}
              title="Elinden geleni yap!"
              description="Withdraw successfully completed!"
              iconClassName="bg-red-700"
            >
              <BiDumbbell size={24} color="white" />
            </Notification>
            <Notification
              timestamp={1683459143}
              title="Elinden geleni yap!"
              description="Withdraw successfully completed!"
              iconClassName="bg-red-700"
            >
              <BiDumbbell size={24} color="white" />
            </Notification>
            <Notification
              timestamp={1683459143}
              title="Elinden geleni yap!"
              description="Withdraw successfully completed!"
              iconClassName="bg-red-700"
            >
              <BiDumbbell size={24} color="white" />
            </Notification>
          </div>
        </div>
      </FitlogModal>
    </div>
  );
}
