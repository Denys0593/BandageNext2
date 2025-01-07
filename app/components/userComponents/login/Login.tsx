"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import Hooks from "../../hooks/Hooks";
import Message from "../message/Message";
import "./login.scss";

interface LoginExample {
  showLogin?: boolean;
  close: Function;
  setOverflow: Function;
}

interface Form extends LoginExample {
  request: Function;
}

interface Inputs {
  userName: string;
  password: string;
}

export default function Login({ showLogin, close, setOverflow }: LoginExample) {
  const { content, load, successfulReg, request, error } = Hooks();

  const form =
    content && !load && !successfulReg && !error ? (
      <Form close={close} request={request} setOverflow={setOverflow} />
    ) : null;
  const loading = !content && load ? <Message title={"Please wait"} /> : null;
  const successfulRegistration =
    successfulReg && !content && !load ? (
      <Message title={"You are successfully logged in"} />
    ) : null;
  const showError =
    !content && !load && !successfulReg && error ? (
      <Message title={"Something went wrong. Please try again"} />
    ) : null;

  return (
    <>
      <div
        className="login"
        style={
          showLogin
            ? { visibility: "visible", opacity: 0.3 }
            : { visibility: "hidden", opacity: 0 }
        }
      ></div>
      <div
        className="loginModal"
        style={
          showLogin
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden", opacity: 0 }
        }
      >
        {form}
        {loading}
        {showError}
        {successfulRegistration}
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
        onClick={() => {
          close(false);
          setOverflow(false);
        }}
        className="loginModal_close"
      >
        &#x2715;
      </div>
      <h2 className="loginModal_title">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="loginModal_form">
        <div className="loginModal_item">
          <h4 className="loginModal_userInfo">Login*</h4>
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
            className={`loginModal_input ${errors?.userName ? "redBorder" : null}`}
          />
          {errors?.userName && (
            <p className="redAlert">{errors.userName.message}</p>
          )}
        </div>
        <div className="loginModal_item">
          <h4 className="loginModal_userInfo">Password*</h4>
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
            className={`loginModal_input ${errors?.password ? "redBorder" : null}`}
          />
          {errors?.password && (
            <p className="redAlert">{errors.password.message}</p>
          )}
        </div>
        <button
          onClick={() => setTimeout(() => setOverflow(false), 1500)}
          className="loginModal_btn"
        >
          Submit
        </button>
      </form>
    </>
  );
}
