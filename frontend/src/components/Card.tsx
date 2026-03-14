import { ShareIcon } from "../assets/icons/ShareIcon";
import { ActionsIcon } from "../assets/icons/ActionsIcon";

export function Card({ title, link /*type*/ }: CardProps) {
  return (
    <div>
      <div className="p-8 rounded-2xl border border-gray-200 max-w-96 max-h-192">
        <div className="flex justify-between">
          <div className="flex items-center text-xs">
            <div className="pr-2 text-gray-400">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex">
            <div className="text-gray-400">
              <ActionsIcon />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <iframe
            className="w-full"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
