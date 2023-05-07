import React from 'react';
import styled from 'styled-components';
import { BsSun } from 'react-icons/bs';
const MainHeader = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  box-sizing: border-box;
`;

export default function Header() {
  return (
    <MainHeader>
      <h2>Monday {<BsSun />} 오후 13:00</h2>
      <div>
        <button>토글버튼</button>
      </div>
    </MainHeader>
  );
}
