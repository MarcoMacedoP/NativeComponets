import React from 'react';
import styled from '../../styled-components';
import ButtonBase from '../Button';
import ToopagoIconBase from '../Icons/ToopagoIcon';

type BaseFormType = React.FC<{
  onPrimaryButtonPress: () => void;
  primaryButtonText: string;
  onSecondaryButtonPress: () => void;
  secondaryButtonText: string;
}>;

const BaseForm: BaseFormType = props => (
  <Form>
    <ToopagoIcon />

    {props.children}

    <Button
      text={props.primaryButtonText}
      isPrimary
      onPress={props.onPrimaryButtonPress}
    />
    <Button
      text={props.secondaryButtonText}
      isSecondaryDark
      onPress={props.onSecondaryButtonPress}
    >
      <FacebookIcon source={require('../../assets/icons/facebook.png')} />
    </Button>
  </Form>
);
const Form = styled.View`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${props => props.theme.background};
  width: 100%;
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5% 2.5% 0;
`;
const FacebookIcon = styled.Image`
  width: 16px;
  height: 100%;
  resize-mode: contain;
  margin-right: 8px;
`;

const Button = styled(ButtonBase)`
  margin-bottom: 16px;
`;
const ToopagoIcon = styled(ToopagoIconBase)`
  margin: 16px 0;
  width: 100%;
  flex: 0.5;
`;
export default BaseForm;
