import React, { FC } from "react";

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <header
        className="sticky top-0 text-4xl h-[50px] bg-red-600 mx-auto"
        style={{ width: "calc(100% - 300px)" }}
      />
      <div></div>
      <main
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
          <div className="bg-yellow-500 w-[100px] h-[100px] hover:cursor-pointer top-1/2 -translate-y-1/2 relative animated-yellow-box"></div>
        </div>
      </main>

      <footer
        className="sticky bottom-0 w-full h-[50px] bg-green-600 mx-auto"
        style={{ width: "calc(100% - 300px)" }}
      />
    </>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
