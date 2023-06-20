"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    console.log(formdata);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <h3 className="snapHeading">Contact</h3>
      <div className="flex flex-col items-center text-center md:text-left px-10 pt-14 space-y-10">
        <h4 className="mt-10 text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s Talk
          </span>
        </h4>
        <div className="flex items-center space-x-3 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-6 w-6 animate-plus" />
          <p className="text-xl">+44-1234567890</p>
        </div>
        <div className="flex items-center space-x-3 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 animate-plus" />
          <p className="text-xl">contact@shivendrahada.com</p>
        </div>
        <div className="flex items-center space-x-3 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-6 w-6 animate-plus" />
          <p className="text-xl">24, Pivot Drive, London, United Kingdom</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
