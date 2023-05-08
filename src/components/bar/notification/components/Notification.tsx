import React from "react";
import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";
import tr from "javascript-time-ago/locale/tr.json";

TimeAgo.addLocale(tr);

export default function Notification(
  props: React.PropsWithChildren<{
    title: string;
    description?: string;
    timestamp: number;
    iconClassName?: string;
  }>
) {
  const date = new Date(props.timestamp * 1000);

  return (
    <div className="Notification p-5 py-6 rounded-xl bg-mirage-700">
      <div className="flex gap-5">
        <div
          className={
            `icon px-[0.85rem] max-h-[53px] rounded-2xl grid place-items-center ` +
            props.iconClassName
          }
        >
          <div className="m-auto ">{props.children}</div>
        </div>
        <div className="info w-3/4">
          <div className="flex flex-col">
            <h1 className="title text-white font-bold text-[0.885rem]">
              {props.title}
            </h1>

            {props.description ? (
              <p className="description text-white opacity-60 text-[0.84rem] font-light  leading-5">
                {props.description.slice(0, 80) +
                  (props.description.length > 80 ? "..." : "")}
              </p>
            ) : null}
              <ReactTimeAgo
              className="text-white opacity-30 font-thin text-xs text-start leading-7"
              date={date}
              locale="tr-TR"
              timeStyle="twitter"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
