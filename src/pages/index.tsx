import { AiOutlineDown, AiOutlinePlus, AiOutlineRadarChart } from "react-icons/ai";
import WeeklyChartbox from "@/components/charts/weekly/WeeklyChartbox";
import { FiChevronDown } from "react-icons/fi";

const data = [
  {
    index: 1,
    date: '01.05.2023',
    dateName: 'Pazartesi',
    set: 3,
    repeat: 16,
    total: 48,
    weight: 6
  },
  {
    index: 2,
    date: '02.05.2023',
    dateName: 'Salı',
    set: 3,
    repeat: 20,
    total: 60,
    weight: 6
  },
  {
    index: 3,
    date: '03.05.2023',
    dateName: 'Çarşamba',
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6
  },
  {
    index: 3,
    date: '03.05.2023',
    dateName: 'Perşembe',
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6
  },
  {
    index: 3,
    date: '03.05.2023',
    dateName: 'Cuma',
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6
  },
  {
    index: 3,
    date: '03.05.2023',
    dateName: 'Cumartesi',
    set: 3,
    repeat: 24,
    total: 72,
    weight: 6
  },
  {
    index: 3,
    date: '03.05.2023',
    dateName: 'Pazar',
    set: 3,
    repeat: 24,
    total: 72,
    weight: 8
  },
];


const options = [
  'one', 'two', 'three'
];


export default function Home() { 
  return (
    <main className="Home w-full h-full overflow-auto">
      <div className="bar flex justify-between place-items-center m-9 mb-11">
        <div className="title">
          <h1 className="text-white font-bold text-2xl">FitLog</h1>
        </div>
        <button className="Profile flex gap-5 place-items-center">
          <FiChevronDown size={16} className="text-white"/>
          <div className="bg-indigo-600 rounded-full w-[42px] h-[42px] flex">
            <p className="text-white text-center m-auto font-bold text-lg">A</p>
          </div>
        </button>
      </div>

      <div className="WeeklyChartboxWrapper p-4 m-6">
        <WeeklyChartbox data={data}/>
      </div>

    </main>
  );
}
