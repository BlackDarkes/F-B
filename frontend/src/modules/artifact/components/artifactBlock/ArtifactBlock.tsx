import IconArrow from "@/assets/icons/arrow.svg?react";

interface IArtifactBlock {
  width: number;
}

export const ArtifactBlock = ({ width }: IArtifactBlock) => {
  return (
    <>
      <h2 className='text-[48px] text-white'>Новые артефакты</h2>
      <div className='flex items-center justify-between gap-x-[30px] gap-y-[30px] max-[1024px]:flex-col'>
        <div className='relative w-[100%] max-w-[825px] overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none]'>
          <div className='h-[493px] w-[825px] bg-[url(./images/main/plants.png)] bg-cover'></div>
          <span
            className={`absolute bottom-[16px] left-[15px] flex items-center gap-x-[6px] text-[#899D9D] ${width <= 1024 ? "flex" : "hidden"}`}
          >
            Swipe to see more <IconArrow className='w-[80px]' />
          </span>
        </div>
        <div className='flex h-[493px] max-w-[255px] flex-col items-start justify-between bg-[#BAE249] p-[16px_16px_24px_16px]'>
          <div>
            <h3 className='mb-[8px] text-[24px] text-[#1D2F30]'>Kurische Nehrung 24</h3>
            <p className='flex flex-col gap-y-[32px] text-[#506829]'>
              <span>
                Вот вам яркий пример современных тенденций - начало повседневной работы по
                формированию позиции выявляет срочную потребность методов управления
                процессами.{" "}
              </span>
              <span>
                Есть над чем задуматься: представители современных социальных резервов своевременно
                верифицированы.
              </span>
            </p>
          </div>
          <button
            type='button'
            className='flex items-center gap-x-[8px] text-[#0B1919] hover:text-[#688B05] focus-visible:outline-1 focus-visible:outline-offset-[5px] focus-visible:outline-[#83A440] active:text-[#688B05]'
          >
            Читать далее <IconArrow className='w-[43px]' />
          </button>
        </div>
      </div>
    </>
  );
};
