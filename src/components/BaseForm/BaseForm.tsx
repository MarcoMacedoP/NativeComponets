import React from 'react';
import styled from '../../styled-components';
import Button from '../Button/AnimatedButton';
import ToopagoIconBase from '../Icons/ToopagoIcon';

const facebookIcon = require('../../assets/icons/facebook.png');

type BaseFormType = React.FC<{
  onPrimaryButtonPress: () => void;
  primaryButtonText: string;
  onSecondaryButtonPress: () => void;
  secondaryButtonText: string;
  isLoading?: boolean;
  isLoadingFacebook?: boolean;
  footer: React.FC<{}>;
}>;

const BaseForm: BaseFormType = props => (
  <Container>
    <Form>
      <ToopagoIcon />

      {props.children}
      <ButtonsContainer>
        <Button
          isLoading={props.isLoading}
          text={props.primaryButtonText}
          isPrimary
          onPress={props.onPrimaryButtonPress}
        />
        <Button
          text={props.secondaryButtonText}
          isSecondaryDark
          isLoading={props.isLoadingFacebook}
          onPress={props.onSecondaryButtonPress}
        >
          <FacebookIcon source={facebookIcon} resizeMode="contain" />
        </Button>
      </ButtonsContainer>
    </Form>
    {props.footer({})}
  </Container>
);

const Container = styled.View`
  flex: 5;
  width: 100%;
  padding: 16px 16px 0;
  background-color: ${props => props.theme.background};
  /* border-top-left-radius: 24px;
  border-top-right-radius: 24px; */
  border-radius: 24px;
`;
const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    marginBottom: 8,
  },
}))`
  background-color: ${props => props.theme.background};
  width: 100%;
  flex: 5;
`;
const FacebookIcon = styled.Image`
  width: 16px;
  height: 100%;
  margin-right: 8px;
`;
const ToopagoIcon = styled(ToopagoIconBase)`
  margin: 16px 0;
  width: 60%;
  max-width: 300px;
  min-height: 40px;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 16px;
`;

export default BaseForm;
