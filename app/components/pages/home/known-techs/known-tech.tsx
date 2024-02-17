"use client";

import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { CMSIcon } from "@/app/components/cms-icon";
import te from "date-fns/esm/locale/te/index.js";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há ", "");
  return (
    <div className="p-6 rounded-md bg-zinc-600/20 text-zinc-500 flex flex-col gap-2 hover:text-white hover:bg-zinc-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
      
       <CMSIcon icon={tech.iconSvg} />
        
      </div>

      <span className="text-sm">{relativeTime} de experiência</span>
      <span></span>
    </div>
  );
};
