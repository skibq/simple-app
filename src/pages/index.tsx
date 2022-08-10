import React, { FC } from "react";
import EmployeesTable from "../components/EmployeesTable";

interface IMainPageProps {
  className?: string;
}

const MainPage: FC<IMainPageProps> = ({ className }) => (
  <div className={`${className}`}>
    <EmployeesTable />
  </div>
);

MainPage.defaultProps = {
  className: "",
};

export default MainPage;
