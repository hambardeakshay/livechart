import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Charts from "./components/Charts";
import AccountCreationForm, {
  AccountFormData,
} from "./components/AccountCreationForm";

import axios, { AxiosResponse, AxiosError } from "axios";

interface DataResponse {
  message: string;
}

const apiUrl = "https://localhost:4000/api/data";

const App: React.FC = () => {
  useEffect(() => {
    axios
      .get<DataResponse>(apiUrl)
      .then((response: AxiosResponse<DataResponse>) => {
        console.log(response.data);
      })
      .catch((error: AxiosError) => {
        console.log("response.data");
        console.error(error);
      });
  }, []);

  const handleAccountCreation = (formData: AccountFormData) => {
    console.log(formData);
  };
  return (
    <div className="App">
      <AccountCreationForm
        onSubmit={handleAccountCreation}
      ></AccountCreationForm>
      <Charts></Charts>
    </div>
  );
};

export default App;