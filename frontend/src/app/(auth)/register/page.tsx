import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-full">
      <form className="mt-3 flex w-full flex-col">
        <label className="font-semibold mb-2 text-gray-950" htmlFor="email">
          User Name
        </label>
        <input
          className="text-input w-full rounded-lg p-2 mb-3 outline-none border border-grey "
          id="username"
          name="username"
          type="text"
          placeholder="John"
        />
        <label className="font-semibold mb-2 text-gray-950" htmlFor="email">
          Email Address
        </label>
        <input
          className="text-input w-full rounded-lg p-2 mb-3 outline-none border border-grey "
          id="email"
          name="email"
          type="email"
          placeholder="example@abc.com"
        />
        <label className="font-semibold mb-2 text-gray-950" htmlFor="email">
          Password
        </label>
        <input
          className="text-input w-full rounded-lg p-2 mb-3 outline-none border border-grey "
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <label className="font-semibold mb-2 text-gray-950" htmlFor="email">
          Confirm Password
        </label>
        <input
          className="text-input w-full rounded-lg p-2 mb-3 outline-none border border-grey "
          id="c-password"
          name="confirm_password"
          type="password"
          placeholder="confirm password"
        />
        <div className="mt-3 flex">
          <button
            className="w-full rounded-lg border-none bg-teal-600 p-2 outline-none"
            type="submit"
          >
            <p className="text-sm font-semibold uppercase text-white">
              create new account
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
