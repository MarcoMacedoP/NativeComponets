import React from 'react';
import styled from '../../styled-components';

import { WalkthroughItemData } from './index';
type WalkthroughItemType = React.FC<WalkthroughItemData>;

const WalkthroughItem: WalkthroughItemType = props => {
  return (
    <Container>
      <Header>
        <Image source={props.image} />
      </Header>
      <Content>
        <Title> {props.title}</Title>
        <Description>{props.desc}</Description>
      </Content>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  min-width: 100%;
  background-color: ${props => props.theme.background};
`;
const Header = styled.View`
  flex: 4;
  background-color: ${props => props.theme.grayLigth};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  align-items: center;
  justify-content: center;
`;
const Image = styled.Image`
  width: 50%;
`;
const Content = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 16px;
  color: ${props => props.theme.primary};
  font-weight: 500;
`;
const Description = styled.Text`
  font-size: 16px;
  width: 80%;
  text-align: center;
  color: ${props => props.theme.gray};
`;

export default WalkthroughItem as WalkthroughItemType;
