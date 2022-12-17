import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin: 0;

  :not(:last-child) {
    margin-right: 5px;
  }
`;
