import IconArrow from "@/assets/icons/arrow.svg?react"

interface IArtifactBlock {
  width: number;
}

export const ArtifactBlock = ({ width }: IArtifactBlock) => {
  return (
    <>
      <h2 className="text-[48px] text-white">Новые артефакты</h2>
      <div className="flex gap-x-[30px] justify-between max-[1024px]:flex-col gap-y-[30px] items-center">
        <div className="relative overflow-x-scroll max-w-[825px] w-[100%] [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="bg-[url(./images/main/plants.png)] bg-cover w-[825px] h-[493px]"></div>
          <span className={`absolute flex gap-x-[6px] items-center bottom-[16px] left-[15px] text-[#899D9D] ${width <= 1024 ? "flex" : "hidden"}`}>Swipe to see more <IconArrow className="w-[80px]" /></span>
        </div>
        <div className="flex flex-col justify-between items-start max-w-[255px] h-[493px] p-[16px_16px_24px_16px] bg-[#BAE249]">
          <div>
            <h3 className="text-[24px] mb-[8px] text-[#1D2F30]">Kurische Nehrung 24</h3>
            <p className="flex flex-col gap-y-[32px] text-[#506829]">
              <span>Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. </span>
              <span>Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.</span>
            </p>
          </div>
          <button type='button' className="flex items-center gap-x-[8px] text-[#0B1919] hover:text-[#688B05] focus-visible:outline-1 focus-visible:outline-[#83A440] focus-visible:outline-offset-[5px]">Читать далее <IconArrow className="w-[43px]" /></button>
        </div>
      </div>
    </>
  );
};
