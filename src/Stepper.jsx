import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ stepsConfig = [] }) => {
  const [currStep, setCurrStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth/2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth/2,
    });
  }, [stepRef]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrStep((prev) => {
      if (prev === stepsConfig.length) {
        setIsComplete(true);
        
        alert("congratulations form has been submitted ")
        return prev;
      }
      return prev + 1;
    });
  };
  const handleBack = () => {
    setCurrStep((prev) => prev - 1);
  };
  const ActiveComponent = stepsConfig[currStep - 1]?.Component;

  //  Fix: Apply both "complete" and "active" properly
  const makeClass = (index) => {
    if (isComplete && currStep === stepsConfig.length) {
      return "complete"; // When finished, only show "complete"
    }
    if (currStep > index + 1) {
      return "complete"; // Past steps are complete
    }
    if (currStep === index + 1) {
      return "active"; // Current step is active
    }
    return "";
  };
  const calculateProgressBarWidth = () => {
    return ((currStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            className={`step ${makeClass(index)}`} // Dynamically assign class
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
          >
            <div className="step-number">
              {currStep > index + 1 ||
              (isComplete && currStep === stepsConfig.length) ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>

            <div className="step-label">{step.name}</div>
          </div>
        ))}
        <div className="progress-bar" style={{width:`calc(100% - ${margins.marginLeft+margins.marginRight}px)`,
    marginLeft:margins.marginLeft,
    marginRight:margins.marginRight}}>
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent currStep={currStep} handleNext={handleNext} handleBack={handleBack}/>

      {/* {currStep > 1 && (
        <button
          onClick={handleBack}
          className="btn"
          style={{ backgroundColor: "yellow", color: "Black" }}
        >
          Back
        </button>
      )}
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default Stepper;
