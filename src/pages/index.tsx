import WeeklyChartbox from "@/components/charts/weekly/WeeklyChartbox";
import Profilebar from "@/components/bar/Profilebar";

import FitlogModal from "@/components/modal/FitlogModal";
import Notificationbar from "@/components/bar/notification/Notificationbar";
import Image from "next/image";
import { BiDumbbell } from "react-icons/bi";
import { AiOutlineRadarChart } from "react-icons/ai";

const data = [
  {
    index: 1,
    date: "01.05.2023",
    dateName: "Pazartesi",
    set: 3,
    repeat: 16,
    total: 48,
    weight: 6,
  },
  {
    index: 2,
    date: "02.05.2023",
    dateName: "Salı",
    set: 3,
    repeat: 20,
    total: 60,
    weight: 6,
  },
  {
    index: 3,
    date: "03.05.2023",
    dateName: "Çarşamba",
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6,
  },
  {
    index: 3,
    date: "03.05.2023",
    dateName: "Perşembe",
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6,
  },
  {
    index: 3,
    date: "03.05.2023",
    dateName: "Cuma",
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6,
  },
  {
    index: 3,
    date: "03.05.2023",
    dateName: "Cumartesi",
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6,
  },
  {
    index: 3,
    date: "03.05.2023",
    dateName: "Pazar",
    set: 3,
    repeat: 24,
    total: 72,
    weight: 8,
  },
];

export default function Home() {
  return (
      <main className="Home w-full h-full flex flex-col gap-5 mb-32 bg-black overflow-y-auto">
        <div className="m-8">
          <Profilebar
            className="bg-black"
            nickname="4ykt_"
            name="Aykut Alıcı"
          />
        </div>

        <div className="ContentWrapper">
          <div className="WeeklyChartboxWrapper p-4 mx-6">
            <WeeklyChartbox data={data} />
          </div>

          <div className="WeeklyChartboxWrapper p-4 mx-6">
            <WeeklyChartbox data={data} />
          </div>

          <div className="WorkoutsWrapper mx-12 mt-16">
            <div className="flex gap-4 rounded-t-xl">
              <div className="w-1/2 flex bg-mirage-800 rounded-xl">
                <div className="h-[40%] place-self-end w-full bg-blue-500 rounded-b-xl flex place-items-center rounded-t-xl">
                  <BiDumbbell
                    size={30}
                    className="text-white m-auto rotate-[40deg]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 w-1/2">
                <button className="p-4 py-6 bg-green-600 transition-all duration-200 hover:bg-opacity-70 rounded-xl text-white text-center font-bold text-sm">
                  Hareket Ekle
                </button>
                <button className="p-4 py-7 bg-mirage-400 transition-all duration-200 hover:bg-opacity-70 rounded-xl text-white text-center font-bold text-sm">
                  İstatistikler
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
