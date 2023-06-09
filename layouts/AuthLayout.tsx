import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import Transition from "@/components/common/Transition";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-screen flex">
      <section className="relative h-full w-5/12 max-lg:hidden">
        <Image
          src={"/auth/auth-image.png"}
          alt="Login to Kabukabu app"
          style={{ objectFit: "cover" }}
          fill={true}
          priority
        />
        <p className="absolute bottom-5 text-white text-2xl w-full text-center">
          Manage Kabukabu's Affairs
        </p>
      </section>
      <section className="flex justify-center items-center w-7/12 p-2 py-20 max-lg:w-full">
        <div className="border-[#FFBF00] border w-full min-h-full rounded-lg max-w-[70%] p-1">
          <Transition>{children}</Transition>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
