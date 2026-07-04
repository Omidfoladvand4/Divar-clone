import styled from "styled-components";

const NoResultWrapper = styled.div`
 text-align: center;
 padding: 50px;
 font-size: 18px;
 color: var(--color-subtitle);
 grid-column: 1 / -1;
`;
function NoResult() {
  return (
     <NoResultWrapper > هیچ آگهی در این شهر یافت نشد</NoResultWrapper>
  )
}

export default NoResult