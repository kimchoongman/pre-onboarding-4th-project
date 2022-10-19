import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Days = ({ setDateValue, dateValue }) => {
  return (
    <StyledSection>
      <div className="calendar-wrap">
        <Calendar onChange={setDateValue} value={dateValue} />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  width: 100%;

  .calendar-wrap {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .moment-box {
    margin-top: 20px;
    padding: 5px;
    background-color: #f9f9f5;
  }
`;

export default Days;