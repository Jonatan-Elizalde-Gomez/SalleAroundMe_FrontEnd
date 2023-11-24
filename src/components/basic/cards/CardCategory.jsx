import React from "react";
import CardButtons from "../buttons/ButtonCard";

export default function CardCategory({ data }) {
  return (
    <div className="flex rounded-xl border border-zinc-200 bg-white px-7 py-5 mb-4">
      <div className="grow">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-800">{data.name}</h3>
          </div>
          <CardButtons />
        </div>
      </div>
    </div>
  );
}
