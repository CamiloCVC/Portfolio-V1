import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:camicastellanos0602@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}.${FormData.message} (${FormData.email})`;
  };
  return (
    <div className="pt-[5rem] md:pt-28 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase track   ing-[20px] text-gray-500 text-xl md:text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-5 w-screen">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#90D253]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-3">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#90D253] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+57 311 826 6627</p>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <EnvelopeIcon className="text-[#90D253] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">camicastellanos0602@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <MapPinIcon className="text-[#90D253] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">Bucaramanga, Colombia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit max-w-full mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            cols={12}
            rows={6}
          />
          <button className="bg-[#90D253] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
