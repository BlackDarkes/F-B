import IconYouTube from "../../../../assets/icons/youtube.svg?react";
import IconInstagram from "../../../../assets/icons/insta.svg?react";
import IconFacebook from "../../../../assets/icons/facebook.svg?react";
import IconTwitter from "../../../../assets/icons/twitter.svg?react";

export const FooterLinks = () => {
  return (
    <section className='flex w-[100%] bg-[#0B1919]'>
      <div className='mx-auto flex gap-x-[30px] py-[16px]'>
        <a
          href='#'
          className='text-[#899D9D] outline-1 outline-transparent transition-colors duration-400 hover:text-[#BAE249] focus-visible:outline-offset-[4px] focus-visible:outline-[#83A440] active:text-[#688B05]'
        >
          <IconYouTube className='h-[24px] w-[24px]' />
        </a>
        <a
          href='#'
          className='text-[#899D9D] outline-1 outline-transparent transition-colors duration-400 hover:text-[#BAE249] focus-visible:outline-offset-[4px] focus-visible:outline-[#83A440] active:text-[#688B05]'
        >
          <IconInstagram className='h-[24px] w-[24px]' />
        </a>
        <a
          href='#'
          className='text-[#899D9D] outline-1 outline-transparent transition-colors duration-400 hover:text-[#BAE249] focus-visible:outline-offset-[4px] focus-visible:outline-[#83A440] active:text-[#688B05]'
        >
          <IconFacebook className='h-[24px] w-[24px]' />
        </a>
        <a
          href='#'
          className='text-[#899D9D] outline-1 outline-transparent transition-colors duration-400 hover:text-[#BAE249] focus-visible:outline-offset-[4px] focus-visible:outline-[#83A440] active:text-[#688B05]'
        >
          <IconTwitter className='h-[24px] w-[24px]' />
        </a>
      </div>
    </section>
  );
};
