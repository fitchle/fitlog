import { RiHome5Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { AiOutlineRadarChart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { stateAtom } from "@/atoms/navbar";
import { useAtom } from "jotai";

export default function Navbar() {
  const router = useRouter();
  const [state, setState] = useAtom(stateAtom);
  return (
    <div className="Navbar">
      <div className="content bg-cod-gray-900 flex w-full">
        <div className="flex justify-between w-full mx-5 my-2">
          <div
            className={
              state == 0
                ? "place-self-center text-white p-4 flex flex-col space-y-1"
                : "place-self-center text-white opacity-40 p-4 mt-1"
            }
          >
            <div
              className={
                "bg-indigo-600 h-[0.35rem] w-[0.35rem] m-auto rounded-full relative top-10 " +
                (state != 0 ? "hidden" : "")
              }
            ></div>

            <button
              onClick={() => {
                router.push("/charts");
                setState(0);
              }}
            >
              <AiOutlineRadarChart size={23} />
            </button>
          </div>
          <div
            className={
              state == 1
                ? "place-self-center text-white p-4 flex flex-col space-y-1"
                : "place-self-center text-white opacity-40 p-4 mt-1"
            }
          >
            <div
              className={
                "bg-indigo-600 h-[0.35rem] w-[0.35rem] m-auto rounded-full relative top-10 " +
                (state != 1 ? "hidden" : "")
              }
            ></div>
            <button
              onClick={() => {
                router.push("/");
                setState(1);
              }}
            >
              <RiHome5Line className="m-auto" size={22} />
            </button>
          </div>
          <div
            className={
              state == 2
                ? "place-self-center text-white p-4 flex flex-col space-y-1"
                : "place-self-center text-white opacity-40 p-4 mt-1"
            }
          >
            <div
              className={
                "bg-indigo-600 h-[0.35rem] w-[0.35rem] m-auto rounded-full relative top-10 " +
                (state != 2 ? "hidden" : "")
              }
            ></div>

            <button
              onClick={() => {
                router.push("/settings");
                setState(2);
              }}
            >
              <CiSettings size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
