// import { useState } from "react";
import { CrossIcon } from "../assets/icons/CrossIcon";
// import { Button } from "./Button";
import { React } from "react";
import { ContentInput } from "./ContentInput";

export function CreateContentModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-slate-500/50 p-8 flex justify-center items-center">
      <div className="h-full w-full bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-end">
          <div onClick={onClose} className="hover:bg-gray-300 rounded">
            <CrossIcon />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          {/* <Input placeholder="Title" />
          <Input placeholder="Text" /> */}
          <ContentInput />
        </div>

        {/* <div className="pt-4">
          <Button size="md" text="Save" variant="primary" />
        </div> */}
      </div>
    </div>
  );
}

// function Input({
//   onChange,
//   placeholder,
// }: {
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <input
//         placeholder={placeholder}
//         type="text"
//         className="px-4 py-2 border rounded"
//         onChange={onChange}
//       ></input>
//     </div>
//   );
// }
