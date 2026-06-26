import styled from "styled-components";

const AdsGrid = styled.div`
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  @media (max-width: 800px) {
      margin-bottom: 70px;
  }
`;
function Posts({children}) {
    return (
        <AdsGrid>
            {children}
        </AdsGrid>
    )
}

export default Posts
