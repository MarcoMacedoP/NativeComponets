import React from 'react';
import styled from '../../styled-components';
import { CirlcesIcon } from '../Icons';

import { DrawerHeaderProps } from './CustomDrawerContent';
type DrawerHeaderType = React.FC<DrawerHeaderProps>;

const NavbarHeader: DrawerHeaderType = props => {
  return (
    <SafeAreaView>
      <Container>
        <Image source={props.userImageSource} />
        <Username>{props.userName}</Username>
      </Container>
      <StyledCircles />
    </SafeAreaView>
  );
};

const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  min-height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
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
  position: absolute;
  right: -40%;
  bottom: -20px;
  height: 100%;
`;
const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props.theme.primary};
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
  justify-content: center;
`;

export default NavbarHeader as DrawerHeaderType;
