import React from 'react';
import styled from '../../styled-components';
import CheckedBox from '../CheckedBox';
import Dots from '../Icons/Dots';

type CreditCardType = React.FC<{
  card: 'visa' | 'mastercard';
  digits: number | string;
  onChecked: (newCheckedValue: boolean) => void;
  isChecked: boolean;
}>;
const CreditCard: CreditCardType = props => {
  const image =
    props.card === 'visa'
      ? require('../../assets/icons/visa.png')
      : require('../../assets/icons/mastercard.png');
  return (
    <Container>
      <CardImage source={image} />
      <CardNumbers>{props.digits || '2342342342342'}</CardNumbers>
      <StyledCheckedBox
        isChecked={props.isChecked}
        setIsChecked={props.onChecked}
      />
      <StyledDots />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-height: 50px;
  margin-bottom: 8px;
  border-color: ${props => props.theme.grayLigth};
  border-bottom-width: 1px;
  padding-bottom: 4px;
`;
const CardImage = styled.Image`
  resize-mode: contain;
  flex: 1;
`;
const CardNumbers = styled.Text`
  flex: 4;
  color: ${props => props.theme.gray};
`;
const StyledCheckedBox = styled(CheckedBox)`
  flex: 1;
  align-items: center;
`;
const StyledDots = styled(Dots)`
  flex: 1;
`;

export default CreditCard as CreditCardType;
