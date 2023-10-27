import React from "react";
import CardButtons from "../ButtonCard";

export default function CardCategory({ data }) {
  return (
    <div className="flex rounded-xl border border-zinc-200 bg-white px-7 py-5">
      <div className="grow">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-800">Jardines</h3>
            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <CardButtons />
        </div>
      </div>
    </div>
  );
}
