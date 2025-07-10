import type { FormEvent } from "react";

export const FromHelp = () => {
  
  
  return (
    <form className="flex flex-col gap-y-[24px] items-start mt-[24px]">
      <input type="text" className="p-[11px_16px] outline-0 bg-white transition-colors duration-400 w-[min(100%,350px)] hover:bg-[#899D9D] hover:text-white focus-visible:outline-1 focus-within:outline-[#83A440] focus-visible:outline-offset-[3px]" placeholder="Имя"/>
      <input type="text" className="p-[11px_16px] outline-0 bg-white transition-colors duration-400 w-[min(100%,350px)] hover:bg-[#899D9D] hover:text-white focus-visible:outline-1 focus-within:outline-[#83A440] focus-visible:outline-offset-[3px]" placeholder="Email"/>
      <button type="submit" className="p-[11px_26px] outline-1 outline-transparent outline-offset-[3px] bg-[#BAE249] hover:bg-[#91AC46] focus-visible:outline-[#83A440] active:bg-[#688B05]" onClick={(e: FormEvent) => e.preventDefault()}>Отправить</button>
    </form>
  );
}