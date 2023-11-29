import styled from 'styled-components';

export const FormSearchMovie = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormInput = styled.input`
  /* position: relative; */
  width: 250px;
  padding: 12px;
  font-size: inherit;
  border-radius: 25px;
  border: 1px solid rgba(31, 3, 85, 0.5);
  outline: none;

  &:focus {
    border: 1px solid #1f0355;
  }
`;

export const FormButton = styled.button`
  /* position: absolute;
  /* top: 50%;
  /* right: 16px; */
  /* right: 16px;
  transform: translateY(-50%);
  transform: translateX(-50%);  */
  padding: 12px;
  font-size: inherit;
  border-radius: 25px;
  background-color: rgba(31, 3, 85, 0.5);
  border: none;
  color: #fff;
  border: 1px solid #1f0355;
`;
