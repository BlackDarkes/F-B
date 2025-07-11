import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Container } from "../../components/container/Container";
import { FromHelp } from "./components/formHelp/FromHelp";
import { HeadForm } from "./components/headForm/HeadForm";

const schema = z.object({
  name: z.string().min(1, "Введите имя"),
  email: z.string().email("Некорректный email"),
});

type FormData = z.infer<typeof schema>;

export const Help = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  }

  return (
    <section className='relative py-[60px]'>
      <div
        className='absolute inset-0 h-[100%] bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: "url(./images/main/help.png)" }}
      />
      <Container className='relative z-300'>
        <HeadForm />
        <FromHelp handleSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
      </Container>
    </section>
  );
};
