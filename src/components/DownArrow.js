import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "@emotion/styled";

const DownArrow = () => {
  return (
    <DownArrowWrapper>
      <KeyboardArrowDownIcon fontSize="large" className="down-arrow" />
    </DownArrowWrapper>
  );
};

const DownArrowWrapper = styled.div`
  text-align: center;
  .down-arrow {
    animation: animateDown infinite 1.5s;
  }
`;

export default DownArrow;
