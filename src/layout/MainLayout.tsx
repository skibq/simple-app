import React, { FC, useEffect } from "react";

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  const getCurrentYear = () => new Date().getFullYear();

  const startAnimation = () => {
    const elToAnimate = document.getElementById("el-to-animate");

    if (!elToAnimate) {
      throw new Error("Element to animate couldn`t be found");
    }

    elToAnimate.classList.add("animated-yellow-box");
  };

  return (
    <>
      <header
        className="sticky top-0 text-4xl h-[50px] bg-red-600 mx-auto z-20"
        style={{ width: "calc(100% - 300px)" }}
      />
      <div
        className="mx-auto min-h-[2500px]"
        style={{
          width: "calc(100% - 300px)",
          background:
            "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100px), linear-gradient(270deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100px);",
        }}
      >
        <div
          className="bg-blue-500 h-[300px] mx-auto relative"
          style={{ width: "calc(100% - 200px)" }}
        >
          <div
            id="el-to-animate"
            onMouseEnter={startAnimation}
            className="bg-yellow-500 w-[100px] h-[100px] hover:cursor-pointer top-1/2 -translate-y-1/2 relative left-0"
          ></div>
        </div>
        <main className="pt-24">{children}</main>
      </div>

      <footer
        className="sticky bottom-0 w-full h-[50px] bg-green-600 mx-auto z-20"
        style={{ width: "calc(100% - 300px)" }}
      />
    </>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
