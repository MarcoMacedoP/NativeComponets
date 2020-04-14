import React from 'react';
import styled from '../../styled-components';
import Button from '../Button/AnimatedButton';
import ToopagoIconBase from '../Icons/ToopagoIcon';

type BaseFormType = React.FC<{
  onPrimaryButtonPress: () => void;
  primaryButtonText: string;
  onSecondaryButtonPress: () => void;
  secondaryButtonText: string;
  isLoading?: boolean;
  footer: React.FC<{}>;
}>;

const BaseForm: BaseFormType = props => (
  <Form>
    <ToopagoIcon />

    {props.children}

    <Button
      isLoading={props.isLoading}
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
    {props.footer({})}
  </Form>
);
const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
}))`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${props => props.theme.background};
  width: 100%;
  flex: 4;
  padding: 16px 16px 0;
`;
const FacebookIcon = styled.Image`
  width: 16px;
  height: 100%;
  resize-mode: contain;
  margin-right: 8px;
`;
const ToopagoIcon = styled(ToopagoIconBase)`
  margin: 16px 0;
  width: 60%;
  max-width: 300px;
  min-height: 40px;
`;

export default BaseForm;
