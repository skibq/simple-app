import React, { FC } from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages";

interface IAppProps {
  className?: string;
}

const App: FC<IAppProps> = () => (
  <MainLayout>
    <MainPage />
  </MainLayout>
);

App.defaultProps = {};

export default App;
