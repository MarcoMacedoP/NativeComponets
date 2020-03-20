import Item from './Item';

export { Item };
import React from 'react';
import Carrousel from 'react-native-anchor-carousel';
import styled from '../../styled-components';

type WalkthroughType = React.FC<{
  onFinish: () => void;
  data: {
    image: any;
    title: string;
    desc: string;
  };
}>;

const Walkthrough: WalkthroughType = () => {
  const carrouselReference = React.useRef();
  return (
    <Container>
      <StyledCarrousel ref={carrouselReference} />
    </Container>
  );
};

const StyledCarrousel = styled(Carrousel)`
  flex: 1;
`;
const Container = styled.View`
  height: 200px;
`;

export default Walkthrough as WalkthroughType;
