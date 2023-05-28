import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// todo: 
// 1. confirm validations
// 2. make sure first and 2nd password match
// 3. hash and salt password before it hits db

function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onError = () => {
    console.log("wrong");
  };

  return (
    <div
      id="registerDiv"
      className="w-full p-2 pt-44 border border-solid border-[#676766] rounded-md xl:w-[75%]"
    >
      <div id="regHeadingDiv" className="text-center">
        <h3 className="text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]">
          Register
        </h3>
      </div>
      <div id="regTextDiv" className="text-center py-4">
        <p>let's go</p>
      </div>
      <form onSubmit={handleSubmit( async (data) => {
        const newReg = {
            email: data.email,
            password: data.password
        }

        await fetch(`https://rugh.design:5001/record/reg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReg)
        })
        .catch(error => {
            window.alert(error);
            return;
        })
        setValue('email', '')
        setValue('password', '')
        setValue('confirmPassword', '')
      }, onError)}>
        <div id="regFormDiv" className="flex flex-col items-center px-5">
          <div id="email" className="w-full flex flex-col">
            <input
              type="email"
              {...register("email", { required: "An email is required" })}
              placeholder="email address"
              className="w-full border border-[#676766] border-solid p-2 mb-2 order-2"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div id="password" className="w-full flex flex-col">
            <input
              type="password"
              {...register("password", {
                required: "A password is required",
                minLength: { value: 2, message: "Min length is 2" },
              })}
              placeholder="password"
              className="w-full border border-[#676766] border-solid p-2 mb-2 order-2"
            />
            <p>{errors.password?.message}</p>
          </div>
          <div id="confirmPassword" className="w-full flex flex-col">
            <input
              type="password"
              {...register("confirmPassword", {
                required: "A password is required",
                minLength: { value: 2, message: "Min length is 2" },
              })}
              placeholder="confirm your password"
              className="w-full border border-[#676766] border-solid p-2 mb-2 order-2"
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>
          <div id="regSubmit" className="w-full">
            <input
              id="submit"
              type="submit"
              name="submit"
              className="w-full
                                                                        cursor-pointer
                                                                        inline-block
                                                                        rounded 
                                                                        bg-neutral-50 
                                                                        px-6 pb-2 pt-2.5 
                                                                        text-[100%] 
                                                                        font-medium lowercase leading-normal text-[#676766] 
                                                                        shadow-[0_4px_9px_-4px_#cbcbcb] 
                                                                        transition duration-150 ease-in-out 
                                                                        hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)]"
            />
          </div>
        </div>
      </form>
      <div className="p-4 text-sm text-center">
        <p>
          If you have already registered, you may login{" "}
          <Link className="text-[#e5c1c1] underline" to={"/login"}>
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Register;
