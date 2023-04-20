import { useRef } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  // border-radius: ${({ theme }) => theme.radii.card};
  border-radius: 8px;
  scroll-margin-top: 64px;

  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.disabled};
  }

  > div:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.radii.card};
    border-bottom-right-radius: ${({ theme }) => theme.radii.card};
  }
`;

const StyledTableBorder = styled.div`
  // border-radius: ${({ theme }) => theme.radii.card};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
  box-shadow: rgba(15, 209, 122, 0.12) 0px 2px 4px 0px, rgba(15, 209, 122, 0.32) 0px 2px 16px 0px;
`;

export const PoolsTable: React.FC<React.PropsWithChildren> = ({ children }) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null);

  return (
    <StyledTableBorder>
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        {children}
      </StyledTable>
    </StyledTableBorder>
  );
};
