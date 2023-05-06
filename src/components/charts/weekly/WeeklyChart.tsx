import { BiDumbbell } from "react-icons/bi";
import { CgRepeat } from "react-icons/cg";
import { ResponsiveContainer, ComposedChart, XAxis, Tooltip, Line, Area, ReferenceArea, ReferenceLine, YAxis, CartesianGrid } from "recharts";

export default function WeeklyChart(props: {data: any}) {
    
    return (
        <ResponsiveContainer width='100%' height={200} className={"p-0 rounded-lg"}>
        <ComposedChart data={props.data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="cyan" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="transparent" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis strokeDasharray={5} strokeDashoffset={1} strokeWidth={0} fontSize={1} hide opacity={0.1} dataKey={"dateName"}/>
          <YAxis type="number" dataKey={"total"} hide/>
          <Tooltip
          
           wrapperStyle={{
            outline: 0,
          }} content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} labelStyle={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold'
          }} cursor={false}/>

          <Line dataKey="total" type="monotone" strokeOpacity={0.3} strokeWidth={1} />
          <Area  type="monotone" dataKey="total" strokeWidth={0} fillOpacity={1}  fill="url(#colorUv)" />
        </ComposedChart>
      </ResponsiveContainer>
    );
}



/** 
 * 
 * 
 * ZOOM
 * 
 * 
 */



/* 


    TOOLTIP


*/
function CustomTooltip(props: {active: any | undefined, payload: any | undefined, label: string | undefined}) {
    if (props.active && props.payload && props.payload.length) {
      console.log(props.payload)
      return (
        <div className="CustomTooltip p-5 px-8 min-w-64 bg-cod-gray-800 rounded-lg text-white scale-75">
          <p className="label font-bold text-md">{`${props.label}`}</p>
          <div className="my-4 flex flex-col space-y-1">
            <div className="flex space-x-1">
              <CgRepeat className="text-green-600" size={21}/>
              <p className="text-green-600 font-bold text-sm">{`${props.payload?.[0].payload.repeat}`}x{`${props.payload?.[0].payload.set}`}</p>
            </div>
  
            <div className="flex mx-1 space-x-1">
              <BiDumbbell className="text-green-600 place-self-center" size={16}/>
              <p className="text-green-600 font-bold text-sm">{`${props.payload?.[0].payload.weight}`} kg</p>
            </div>
          </div>
  
        </div>
      );
    }
  
    return null;
  }