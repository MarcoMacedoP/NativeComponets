import React from 'react';
import { DrawerHeaderType } from './types';
import styled from '../../styled-components';
import { CirlcesIcon } from '../Icons';

const NavbarHeader: DrawerHeaderType = props => {
  return (
    <Container>
      <Image source={props.userImageSource} />
      <Username>{props.userName}</Username>
      <StyledCircles />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  min-height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 16px;
`;
const Image = styled.Image`
  max-height: 40px;
  max-width: 40px;
  border-radius: 700px;
`;
const Username = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.background};
  flex: 8;
  margin-left: 16px;
`;
const StyledCircles = styled(CirlcesIcon)`
  align-self: flex-end;
  position: absolute;
  right: 0;
`;

export default NavbarHeader as DrawerHeaderType;
