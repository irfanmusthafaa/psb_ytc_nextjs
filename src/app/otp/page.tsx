"use client";

import React from "react";
import { InputOTP } from "antd-input-otp";
import { Button, Form } from "antd";

export default function OtpPage() {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    // Your logic
  };
  return (
    <section className="bg-[#273b83] ">
      <div className="flex flex-col items-center  px-6  mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 mt-10 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-[5rem] h-[5rem] mr-2"
              src="/images/logo3.png"
              alt="logo"
            />
            <div className="text-center">
              <p className="text-white text-xs">Young Tahfizh</p>
              <p className="text-white text-xs">Center</p>
            </div>
          </div>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 ">
            <h1 className="mb-3 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Masukkan Kode OTP
            </h1>
            <div className="mb-5">
              <p className="text-xs text-center">
                Masukkan kode OTP yang telah dikirim ke
              </p>
              <p className="text-xs text-center">
                email :{" "}
                <span className="font-bold">irfanmustafa2307@gmail.com</span>
              </p>
            </div>

            <div>
              <Form
                onFinish={handleFinish}
                form={form}
                className="flex flex-col  gap-3 w-full "
              >
                <InputOTP autoSubmit={form} inputType="numeric" />

                <div>
                  <p className="text-xs text-center">
                    Kode OTP tidak terkirim?{" "}
                    <span className="font-bold text-[#273b83] hover:text-[#111e4e]  cursor-pointer">
                      Resend
                    </span>
                  </p>
                </div>
                <Form.Item className="w-full mt-5">
                  {/* <Button htmlType="submit">Submit</Button> */}
                  <button
                    type="submit"
                    className="w-full text-white bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    // onClick={() => router.push("/psb/edit-profil")}
                  >
                    Submit
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
