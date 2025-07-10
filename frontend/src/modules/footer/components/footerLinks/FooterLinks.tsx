import IconYouTube from "../../../../assets/icons/youtube.svg?react";
import IconInstagram from "../../../../assets/icons/insta.svg?react";
import IconFacebook from "../../../../assets/icons/facebook.svg?react";
import IconTwitter from "../../../../assets/icons/twitter.svg?react";

export const FooterLinks = () => {
  return (
    <section className="flex bg-[#0B1919] w-[100%]">
      <div className="flex mx-auto py-[16px] gap-x-[30px]">
        <a href='#' className="text-[#899D9D] transition-colors duration-400 outline-1 outline-transparent hover:text-[#BAE249] focus-visible:outline-[#83A440] focus-visible:outline-offset-[4px] active:text-[#688B05]">
          <IconYouTube className="w-[24px] h-[24px]" />
        </a>
        <a href='#' className="text-[#899D9D] transition-colors duration-400 outline-1 outline-transparent hover:text-[#BAE249] focus-visible:outline-[#83A440] focus-visible:outline-offset-[4px] active:text-[#688B05]">
          <IconInstagram className="w-[24px] h-[24px]" />
        </a>
        <a href='#' className="text-[#899D9D] transition-colors duration-400 outline-1 outline-transparent hover:text-[#BAE249] focus-visible:outline-[#83A440] focus-visible:outline-offset-[4px] active:text-[#688B05]">
          <IconFacebook className="w-[24px] h-[24px]" />
        </a>
        <a href='#' className="text-[#899D9D] transition-colors duration-400 outline-1 outline-transparent hover:text-[#BAE249] focus-visible:outline-[#83A440] focus-visible:outline-offset-[4px] active:text-[#688B05]">
          <IconTwitter className="w-[24px] h-[24px]" />
        </a>
      </div>
    </section>
  );
};
