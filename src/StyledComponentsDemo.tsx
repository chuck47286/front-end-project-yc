import React, { FC } from 'react';
import styled from 'styled-components';
// button 组件
const Button = styled.button<{ $primary?: boolean }>`
* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
// container组件
const Container = styled.div`
  text-align: center;
`;

const Demo: FC = () => {
  return (
    <div>
      <p>stypled-components demo</p>
      <Container>
        <Button $primary>primary button</Button>
        <Button>normal button</Button>
      </Container>
    </div>
  );
};

export default Demo;
