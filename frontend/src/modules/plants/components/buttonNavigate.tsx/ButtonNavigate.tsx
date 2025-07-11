import IconArrowLeft from "@/assets/icons/arrow2left.svg?react";
import IconArrowRight from "@/assets/icons/arrow3right.svg?react";

interface IButtonNavigate {
  currentCount: number;
  currentAdd: () => void;
  currentRemove: () => void;
}

export const ButtonNavigate = ({ currentCount, currentAdd, currentRemove }: IButtonNavigate) => {
  return (
    <div className='mx-auto flex items-center gap-[30px] max-[1110px]:hidden'>
      <button
        type='button'
        onClick={currentRemove}
        className={`active:text-[#688B05] text-[#899D9D] outline-0 outline-offset-[5px] transition-colors duration-400 focus-visible:outline-1 focus-visible:outline-[#83A440] ${currentCount === 1 ? "text-[#454747] hover:text-[#454747] !cursor-default" : "hover:text-[#BAE249]"}`}
        disabled={currentCount === 1 ? true : false}
      >
        <IconArrowLeft className='w-[25px]' />
      </button>
      <h3 className='text-[24px] text-white'>{currentCount} из 3</h3>
      <button
        type='button'
        onClick={currentAdd}
        className={`active:text-[#688B05] text-[#899D9D] outline-0 outline-offset-[5px] transition-colors duration-400 focus-visible:outline-1 focus-visible:outline-[#83A440] ${currentCount === 3 ? "text-[#454747] hover:text-[#454747] !cursor-default" : "hover:text-[#BAE249]"}`}
      >
        <IconArrowRight className='w-[25px]' />
      </button>
    </div>
  );
};
