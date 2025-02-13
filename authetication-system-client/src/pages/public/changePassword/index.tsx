import { useState } from "react";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";

const ForgotPassword = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = (step: number) => {
    setStep(step);
  };

  return (
    <div>
      {step === 0 && <Step1 handleNextStep={handleNextStep} />}
      {step === 1 && <Step2 handleNextStep={handleNextStep} />}
      {step === 2 && <Step3 />}
    </div>
  );
};

export default ForgotPassword;
