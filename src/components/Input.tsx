import React from 'react';
import { TextInputProps } from 'react-native';
import styled from '../styled-components';

type InputType = React.FC<TextInputProps>;

const Input: InputType = props => <StyledInput {...props} />;

const StyledInput = styled.TextInput`
  background-color: red;
  color: white;
  width: 100%;
  padding: 8px;
`;

export default Input;
