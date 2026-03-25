import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Review from "./components/Review";
import Success from "./components/Success";
import "./App.css";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
};

export default function App() {
  const [step, setStep] = useState<number>(1);

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: ""
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div className="wrapper">
      <div className="form-card">

        {/* 🔥 HEADING */}
        <h2>Let’s get you started</h2>

        {/* 🔥 STEPPER */}
        <div className="stepper">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className="line"></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className="line"></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        {/* 🔥 STEPS */}
        {step === 1 && (
          <Step1 form={form} setForm={setForm} next={next} />
        )}

        {step === 2 && (
          <Step2 form={form} setForm={setForm} next={next} back={back} />
        )}

        {step === 3 && (
          <Review form={form} next={next} back={back} />
        )}

        {step === 4 && <Success />}
      </div>
    </div>
  );
}