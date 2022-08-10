import React, { FC } from "react";

interface IMainPageProps {
  className?: string;
}

const MainPage: FC<IMainPageProps> = ({ className }) => (
  <div className={`${className}`}>MainPage</div>
);

MainPage.defaultProps = {
  className: "",
};

export default MainPage;
