import styled from '../../styled-components';

export const FormContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.primary};
`;
