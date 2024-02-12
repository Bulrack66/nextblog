import { Eye, MessageCircle } from "lucide-react";

export default function EyeCircle({
  text1,
  text2,
}: {
  text1: number;
  text2: number;
}) {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <MessageCircle size={20} className="text-slate-500" />
          <p className="text-slate-500">{text1}</p>
        </div>
        <div className="flex items-center gap-1">
          <Eye size={20} className="text-slate-500" />
          <p className="text-slate-500">{text2}</p>
        </div>
      </div>
    </>
  );
}
