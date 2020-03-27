import Item from './Item';
import React from 'react';
import Carrousel from '../Carousel';
import styled from '../../styled-components';
import { Dimensions, StatusBar } from 'react-native';
import Button from '../Button';
export type WalkthroughItemData = {
  image: any;
  title: string;
  desc: string;
};

type WalkthroughType = React.FC<{
  onFinish: () => void;
  data: Array<WalkthroughItemData>;
}>;

const Walkthrough: WalkthroughType = ({ data, onFinish }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { width } = Dimensions.get('window');
  function renderItem({ item }: { item: WalkthroughItemData; index: number }) {
    return <Item {...item} />;
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <StyledCarrousel
        onIndexChange={setCurrentIndex}
        containerWidth={width}
        itemWidth={width}
        minScrollDistance={0}
        renderItem={renderItem}
        data={data}
      />
      <ControlsContainer>
        <DotsContainer>
          <Circle isSelected={currentIndex === 0} />
          <Circle isSelected={currentIndex === 1} />
          <Circle isSelected={currentIndex === 2} />
        </DotsContainer>
        <Button
          text="Continuar"
          isEnabled={currentIndex === 2}
          isPrimary
          onPress={onFinish}
        />
      </ControlsContainer>
    </Container>
  );
};
const StyledCarrousel = styled(Carrousel)`
  flex: 4;
`;
const ControlsContainer = styled.View`
  flex: 1;
  padding: 16px 16px 32px;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
`;
const DotsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
const Circle = styled.View<{ isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid
    ${props => (props.isSelected ? props.theme.primary : props.theme.gray)};
  border-radius: 16px;
  margin-left: 8px;
`;
export default Walkthrough;
