"use client";
import React from 'react';
import * as Form from '@radix-ui/react-form';

export const FormDemo = () => (
  <div id='contact us' className='flex items-center justify-center'>
    <div className='w-full rounded-[16px] py-[48px] px-[40px] text-center bg-[#E3F1FF]'>
      <div className='font-medium text-[#4328EB] text-[18px] lg:text-xl'>
        <h1>Contact Us</h1>
      </div>
      <Form.Root className="w-full max-w-md m-auto justify-center">
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-[#5F7896]">Email</Form.Label>
            <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="text-[13px] text-black opacity-[0.8]" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-[#5F7896]">
              Question
            </Form.Label>
            <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px] text-[#4328EB] text-[16px]">
            Sent question
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  </div>
);


