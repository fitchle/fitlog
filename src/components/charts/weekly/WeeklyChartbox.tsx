import React from "react";
import WeeklyChart from "./WeeklyChart";
import { GoKebabVertical } from "react-icons/go";
import { atom, useAtom, useAtomValue } from "jotai";
import FitlogModal from "@/components/modal/FitlogModal";
import { workoutsAtom } from "@/atoms/workouts";

const modalAtom = atom(false);


export default function WeeklyChartbox(props: { data: any }) {
  const percent = calculatePercent(props.data);
  const decimalPercent = toDecimal(1, percent);
  const [modalStatus, setModalStatus] = useAtom(modalAtom);

  let color = "text-gray-700";
  if (percent>0) color = "text-green-700";
  if (percent<0) color = "text-red-700"

  const workoutConf = useAtomValue(workoutsAtom);
  const categoryConf = JSON.parse(JSON.stringify(workoutConf));

  return (
    <div className="Weekly">
      <div className="flex justify-between">
        <div>
          <h3 className="place-self-center font-bold text-xs text-white opacity-50">
            INCLINE BENCH PRESS
          </h3>

          <h1 className="text-white my-2 font-bold text-lg flex justify-between leading-3">
            Haftalık İstatistik
          </h1>
          <h2
            className={
              color +
              " my-2 font-bold text-lg"
            }
          >
            {percent > 0 ? "+" + decimalPercent : decimalPercent}%
          </h2>
        </div>
        <button onClick={() => setModalStatus(true)} className="settings place-self-start">
          <GoKebabVertical className="text-white" />
        </button>
      </div>
      <WeeklyChart data={props.data} />
        <FitlogModal position="bottom" isActive={modalStatus} onCloseRequest={() => setModalStatus(false)} className="flex flex-col gap-8 p-8 pt-7 py-10 w-full bg-cod-gray-500 rounded-t-3xl">
        <h1 className="text-white font-bold text-center">Select category</h1>
            <div className="flex flex-col gap-3">
            {
                Object.keys(categoryConf).map((category) => {
                    return (
                        <button onClick={() => {setModalStatus(false)}} key={category} className="text-white hover:opacity-50 transition-all duration-150 text-start text-md font-bold p-4">
                            {category}
                        </button>
                    );
                })
            }
            </div>
        </FitlogModal>
    </div>
  );
}

function calculatePercent(data: any) {
    const oldVal = data[0].total * data[0].weight;
    const newVal = data[data.length - 1].total * data[data.length - 1].weight;
    const percent = (newVal / oldVal - 1) * 100;
    return percent;
  }
  
  function toDecimal(digit: number, val: number) {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: digit,
    }).format(val);
  }
