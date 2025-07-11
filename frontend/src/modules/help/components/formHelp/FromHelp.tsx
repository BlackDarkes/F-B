/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseSyntheticEvent } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface IFormHelp {
  handleSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export const FromHelp = ({ handleSubmit, register, errors }: IFormHelp) => {
  return (
    <form className='mt-[24px] flex flex-col items-start gap-y-[24px]' onSubmit={handleSubmit}>
      <span className="w-[min(100%,350px)]">
        {errors.name && (
          <span className='text-sm text-red-500'>{errors.name.message as string}</span>
        )}
        <input
          type='text'
          {...register("name")}
          className='w-[100%] bg-white p-[11px_16px] outline-0 transition-colors duration-400 focus-within:outline-[#83A440] hover:bg-[#899D9D] hover:text-white focus-visible:outline-1 focus-visible:outline-offset-[3px]'
          placeholder='Имя'
        />
      </span>
      <span className="w-[min(100%,350px)]">
        {errors.email && (
          <span className='text-sm text-red-500'>{errors.email.message as string}</span>
        )}
        <input
          type='text'
          {...register("email")}
          className='w-[100%] bg-white p-[11px_16px] outline-0 transition-colors duration-400 focus-within:outline-[#83A440] hover:bg-[#899D9D] hover:text-white focus-visible:outline-1 focus-visible:outline-offset-[3px]'
          placeholder='Email'
        />
      </span>
      <button
        type='submit'
        className='bg-[#BAE249] p-[11px_26px] outline-1 outline-offset-[3px] outline-transparent hover:bg-[#91AC46] focus-visible:outline-[#83A440] active:bg-[#688B05]'
      >
        Отправить
      </button>
    </form>
  );
};
