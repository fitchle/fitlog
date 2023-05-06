import React from "react";
import WeeklyChart from "./WeeklyChart";
import { GoKebabVertical } from "react-icons/go";
import { atom, useAtom } from "jotai";
import conf from '@/conf/category.json'
import FitlogModal from "@/components/modal/FitlogModal";

const modalAtom = atom(false);
const categoryConf = JSON.parse(JSON.stringify(conf));

export default function WeeklyChartbox(props: { data: any }) {
  const percent = calculatePercent(props.data);
  const decimalPercent = toDecimal(1, percent);
  const [modalStatus, setModalStatus] = useAtom(modalAtom);
  return (
    <div className="Weekly bg-black rounded-lg">
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
              ((percent == 0 ? "text-gray-700" : (percent < 0 ? "text-red-700" : "text-green-700"))) +
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
        <FitlogModal isOpen={modalStatus} onCloseRequest={() => setModalStatus(false)} className="flex flex-col gap-8 p-8 pt-7 py-10 absolute bottom-0 w-full bg-cod-gray-500 rounded-t-3xl">
        <h1 className="text-white font-bold text-center">Select category</h1>
            <div className="flex flex-col gap-3">
            {
                Object.keys(categoryConf['categories']).map((category) => {
                    return (
                        <button onClick={() => {setModalStatus(false)}} key={category} className="text-white hover:opacity-50 transition-all duration-150 text-start text-md font-bold p-4">
                            {categoryConf['categories'][category]['label']}
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
