import styled from "styled-components";
import React from "react";
const AdsGrid = styled.div`
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  @media (max-width: 800px) {
      margin-bottom: 70px;
      padding:  12px 0;
  }
`;
function Posts({children}) {
    return (
        <AdsGrid>
            {children}
        </AdsGrid>
    )
}

export default React.memo(Posts)
