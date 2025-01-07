"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import Message from "../message/Message";
import Hooks from "../../hooks/Hooks";

import "./register.scss";
import { useState } from "react";

interface RegisterExample {
  close: Function;
  showRegister?: boolean;
  setOverflow: Function;
}

interface Form extends RegisterExample {
  request: Function;
}

interface Inputs {
  userName: string;
  email: string;
  password: string;
  sex: "Male" | "Female";
  year: string;
  month: string;
  day: string;
}

export default function Register({
  showRegister,
  close,
  setOverflow,
}: RegisterExample) {
  const { content, load, successfulReg, request, error } = Hooks();

  const form = content ? (
    <Form close={close} request={request} setOverflow={setOverflow} />
  ) : null;
  const loading = !content && load ? <Message title={"Please wait"} /> : null;
  const successfulRegistration =
    successfulReg && !content && !load ? (
      <Message title={"Registration was successful"} />
    ) : null;
  const showError =
    !content && !load && !successfulReg && error ? (
      <Message title={"Something went wrong. Please try again"} />
    ) : null;
  return (
    <>
      <div
        className="register"
        style={
          showRegister
            ? { opacity: 0.3, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      ></div>
      <div
        className="registerModal"
        style={
          showRegister
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        {form}
        {loading}
        {successfulRegistration}
        {showError}
      </div>
    </>
  );
}

function Form({ close, request, setOverflow }: Form) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await request(
      "https://jsonplaceholder.typicode.com/posts",
      data,
      close,
      reset
    );
  };

  return (
    <>
      <div
        className="registerModal_close"
        onClick={() => {
          close(false);
          setOverflow(false);
          reset();
        }}
      >
        &#x2715;
      </div>
      <h2 className="registerModal_title">Please register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="registerModal_form">
        <div className="registerModal_item">
          <h4 className="registerModal_userInfo">Name*</h4>
          <input
            {...register("userName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Min 2 symbols",
              },
              maxLength: {
                value: 30,
                message: "Max 30 symbols",
              },
              pattern: {
                value: /^[A-Z][a-z]{1,20}$/,
                message:
                  "First letter must be uppercase, name should contain only letters",
              },
            })}
            className={`registerModal_input ${errors?.userName ? "redBorder" : null}`}
          />
          {errors?.userName && (
            <p className="redAlert">{errors.userName.message}</p>
          )}
        </div>
        <div className="registerModal_item">
          <h4 className="registerModal_userInfo">Email address*</h4>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/,
                message: "Wrong email",
              },
            })}
            className={`registerModal_input ${errors?.email ? "redBorder" : null}`}
          />
          {errors?.email && <p className="redAlert">{errors.email.message}</p>}
        </div>
        <div className="registerModal_item">
          <h4 className="registerModal_userInfo">Password*</h4>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Min 8 symbols",
              },
              maxLength: {
                value: 16,
                message: "Max 22 symbols",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/,
                message:
                  "Only letters and numbers. At least one uppercase, one number and one lowercase",
              },
            })}
            className={`registerModal_input ${errors?.password ? "redBorder" : null}`}
          />
          {errors?.password && (
            <p className="redAlert">{errors.password.message}</p>
          )}
        </div>
        <div className="registerModal_item">
          <div className="registerModal_boxForWrap">
            <div className="registerModal_wrap">
              <label htmlFor="man" className="registerModal_userInfo">
                Male
              </label>
              <input
                id="man"
                type="radio"
                {...register("sex", { required: "Choose your sex" })}
              />
            </div>
            <div className="registerModal_wrap">
              <label htmlFor="woman" className="registerModal_userInfo">
                Female
              </label>
              <input id="woman" type="radio" {...register("sex")} />
            </div>
          </div>
          {errors?.sex && <p className="redAlert">{errors.sex.message}</p>}
        </div>
        <div className="registerModal_item">
          <h4 className="registerModal_userInfo">
            Birthday: DD/MM/YYYY <span> *</span>
          </h4>
          <div className="registerModal_birhdayWrap">
            <div className="registerModal_birthdayItem">
              <label htmlFor="day" />
              <input
                className={`${errors?.day ? "redBorder" : null}`}
                id="day"
                {...register("day", {
                  required: true,
                  pattern: /^(([0][1-9]){1}|([1-2][0-9]){1}|([3][0-1]){1})$/,
                })}
                placeholder="Day"
              />
            </div>

            <div className="registerModal_birthdayItem">
              <label htmlFor="month" />
              <input
                className={`${errors?.month ? "redBorder" : null}`}
                id="month"
                {...register("month", {
                  required: true,
                  pattern: /^(([0][1-9]){1}|([1][0-2]){1})$/,
                })}
                placeholder="Month"
              />
            </div>

            <div className="registerModal_birthdayItem">
              <label htmlFor="year" />
              <input
                className={`${errors?.year ? "redBorder" : null}`}
                id="year"
                {...register("year", {
                  required: true,
                  pattern: /^(([1][9][2-9][0-9]){1}|([2][0][0-2][0-4]){1})$/,
                })}
                placeholder="1993"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setTimeout(() => setOverflow(false), 1500)}
          className="registerModal_btn"
        >
          Register
        </button>
      </form>
    </>
  );
}
