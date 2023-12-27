import styled from 'styled-components';

export const FormSearchMovie = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 28px;
`;

export const FormInput = styled.input`
  width: 420px;
  padding: 12px;
  font-size: 18px;
  border-radius: 25px;
  border: 2px solid rgba(31, 3, 85, 0.5);
  outline: none;
  margin-left: auto;
  margin-right: auto;
  color: #1f0355;

  &:focus {
    border: 2px solid #1f0355;
  }
`;

export const FormButton = styled.button`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);
  padding: 8px;
  font-size: 18px;
  border-radius: 25px;
  background-color: rgba(31, 3, 85, 0.9);
  border: none;
  color: #fff;
  border: none;
  /* border: 1px solid #1f0355; */
`;
