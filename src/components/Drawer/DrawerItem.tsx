import React, { useContext } from 'react';
import styled from '../../styled-components';
import { NavbarItemType } from './types';
import { ThemeType } from 'src/styled-components/theme';
import { ThemeContext } from 'styled-components';

const NavbarItem: NavbarItemType = props => {
  const theme: ThemeType = useContext(ThemeContext);
  return (
    <Container>
      <ChildrenContainer>
        {React.cloneElement(props.children, {
          color: theme.primary,
        })}
      </ChildrenContainer>
      <Text>{props.title || 'Titulo de la ruta'}</Text>
    </Container>
  );
};
const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.background};
  padding: 4px 16px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  flex-direction: row;
`;

const Text = styled.Text`
  color: ${props => props.theme.primary};
  flex: 9;
  font-size: 17px;
`;
const ChildrenContainer = styled.View`
  flex: 1;
  margin-right: 24px;
  max-width: 20px;
  align-items: center;
`;
export default NavbarItem as NavbarItemType;
