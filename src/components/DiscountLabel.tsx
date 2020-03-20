import React from 'react';
import { Svg, Path } from 'react-native-svg';
import styled from '../styled-components';
import { ViewStyle, StyleProp } from 'react-native';

type DiscountLabelType = React.FC<{
  text: string;
  style?: StyleProp<ViewStyle>;
}>;

const DiscountLabel: DiscountLabelType = props => (
  <Container style={props.style}>
    <DiscountIcon />
    <Text>{props.text}</Text>
  </Container>
);

function DiscountIcon() {
  return (
    <StyledSvg
      width="100%"
      height="100%"
      data-name="Grupo 4949"
      viewBox="0 0 23.273 24.23"
    >
      <Path
        fill="#000000"
        d="M33.007 13.877l-.885-1.36a.737.737 0 010-.8l.886-1.361a2.318 2.318 0 00-1.115-3.429l-1.515-.581a.738.738 0 01-.473-.651l-.083-1.62A2.319 2.319 0 0026.9 1.95l-1.567.421a.739.739 0 01-.765-.248L23.55.861a2.319 2.319 0 00-3.607 0l-1.02 1.261a.737.737 0 01-.765.248l-1.567-.42a2.319 2.319 0 00-2.919 2.12l-.083 1.621a.737.737 0 01-.473.651l-1.515.58a2.319 2.319 0 00-1.115 3.431l.884 1.359a.739.739 0 010 .8l-.885 1.36a2.319 2.319 0 001.115 3.43l1.515.58a.738.738 0 01.473.651l.083 1.621a2.319 2.319 0 002.919 2.12l1.567-.422a.739.739 0 01.765.249l1.02 1.261a2.32 2.32 0 003.608 0l1.02-1.262a.739.739 0 01.765-.249l1.568.422a2.319 2.319 0 002.917-2.121l.083-1.62a.739.739 0 01.473-.651l1.515-.58a2.319 2.319 0 001.116-3.424zM18.548 7.853a1.582 1.582 0 11-1.582 1.582 1.583 1.583 0 011.582-1.582zm5.8 8.963a1.582 1.582 0 111.582-1.582 1.583 1.583 0 01-1.582 1.581zM25.7 9.2l-7.381 7.381a.791.791 0 11-1.119-1.116l7.381-7.381A.791.791 0 0125.7 9.2z"
        data-name="Trazado 4620"
        transform="translate(-10.11 .001)"
      />
    </StyledSvg>
  );
}
const StyledSvg = styled(Svg)`
  flex: 2;
`;
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Text = styled.Text`
  flex: 8;
`;

export default DiscountLabel as DiscountLabelType;
