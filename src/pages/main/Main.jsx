import React, { useState } from 'react';
import StepOne from '../step_one/StepOne';
import StepTwo from '../step_two/StepTwo';
import StepThree from '../step_three/StepThree';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Main = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['환자 정보', '진료 항목 선택', '예약날짜 및 시간 선택'];

  const getStepContent = (stepNumber) => {
    switch (stepNumber) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      default:
        return '알수없는 스텝입니다.';
    }
  };

  const handleNext = () => {
    setActiveStep((preActiveStep) => preActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((preActiveStep) => preActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StyledStepper>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="content-box">
        {activeStep === steps.length ? (
          <div>
            <div>모든 스텝을 완료하였습니다.</div>
            <div>
              <Button variant="contained" color="primary" onClick={handleReset}>
                다시 시작하기
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div>
              <Button
                style={{ marginRight: '10px' }}
                variant="contained"
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                이전
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? '완료' : '다음'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </StyledStepper>
  );
};

const StyledStepper = styled.section`
  width: 100%;
  border: 1px solid black;

  .css-m5vj9m-MuiStepper-root {
    margin: 5px;
    border: 1px solid red;

    .css-1bw0nnu-MuiStep-root {
      margin: 5px;
      border: 1px solid blue;
    }
  }
`;

export default Main;