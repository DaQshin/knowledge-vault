import { ReactElement } from "react";

interface SidebarItem {
  text: string;
  LeftIcon?: ReactElement;
  RightIcon?: ReactElement;
}

export function Sidebar(props: SidebarItem[]) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl">Knowledge Vault</div>
      <div className="flex flex-col">
        {props.map((item, index) => (
          <div className="w-72 border-r border-gray-300 p-4" key={index}>
            {item.LeftIcon ? (
              <div className="pr-2"> {props.startIcon} </div>
            ) : null}
            {item.text}
            {item.RightIcon ? (
              <div className="pr-2"> {props.startIcon} </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
