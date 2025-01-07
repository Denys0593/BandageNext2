"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import "./footerForm.scss";

type Inputs = {
  email: string;
  required: string;
};

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      const request = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!request.ok) {
        throw new Error(`Error ${request.status}`);
      }
      reset();
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="footerForm">
        <input
          className="footerForm_email"
          placeholder="Your Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        <button type="submit" className="footerForm_button">
          Subscribe
        </button>
      </form>

      {errors?.email && (
        <p
          style={{
            marginTop: "10px",
            color: "red",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {errors?.email.message}
        </p>
      )}
    </>
  );
}
