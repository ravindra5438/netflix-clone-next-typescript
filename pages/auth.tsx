import Input from "@/components/Input";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface userType {
  name: string;
  email: string;
  password: string;
}

const Auth = () => {
  const [user, setUser] = useState<userType>({
    name: "",
    email: "",
    password: "",
  });

  const [variant, setVariant] = useState<string>("Login");

  const toggleVariant = useCallback(() => {
    setVariant((variant) => {
      return variant === "Login" ? "Register" : "Login";
    });
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-no-repeat bg-[url('/images/background.jpg')]">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            width={100}
            height={20}
            className="h-12"
            alt="practice image"
          />
        </nav>
        <div className="flex justify-center">
          <div className=" bg-black bg-opacity-90 px-8 py-16 self-center mt-2 lg:w-2/5 lg:max-w-sm  rounded-md w-full">
            <h2 className=" text-white text-3xl mb-8 font-semibold">
              {variant === "Login" ? "Sign In" : variant}
            </h2>
            <div className="flex flex-col gap-4">
              {variant !== "Login" && (
                <Input
                  id="name"
                  type="text"
                  value={user.name}
                  onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                  ): void =>
                    setUser((user) => ({ ...user, name: event.target.value }))
                  }
                  label="name"
                />
              )}
              <Input
                id="email"
                type="text"
                value={user.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  setUser((user) => ({ ...user, email: event.target.value }))
                }
                label="email"
              />
              <Input
                id="password"
                type="password"
                value={user.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  setUser((user) => ({ ...user, password: event.target.value }))
                }
                label="password"
              />
            </div>
            <button className="bg-red-500 py-3 rounded-md hover:bg-red-700 w-full mt-5 text-white">
              {variant}
            </button>
            <p className="text-neutral-500 mt-4 text-sm text-center">
              {variant === "Login"
                ? "First time using Netflix?"
                : "already have an account?"}
              <span
                onClick={toggleVariant}
                className="ml-2 text-white cursor-pointer"
              >
                {variant === "Login" ? "Create an account" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
