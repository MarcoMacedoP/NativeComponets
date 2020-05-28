import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import ContentLoader from 'react-content-loader/native';
import { G, Rect, Path } from 'react-native-svg';
import { theme } from '../../styles';
type LoadingCardsProps = {};

export const LoadingCards: React.FC<LoadingCardsProps> = () => {
  return (
    <>
      <LoadingCard speed={0.8} />
      <LoadingCard speed={1.2} />
      <LoadingCard speed={0.7} />
      <LoadingCard speed={1} />
    </>
  );
};

const LoadingCard = ({ speed }: { speed: number }) => (
  <View style={[styles.loadingCardContainer]}>
    <ContentLoader
      viewBox="-6 -1 247 20"
      backgroundColor={theme.grayLigth}
      foregroundColor="#D7D9E0"
      width="100%"
      speed={speed}
      height={64}
    >
      <G
        id="Grupo_5105"
        data-name="Grupo 5105"
        transform="translate(-1085 -892)"
      >
        <G id="Grupo_5104" data-name="Grupo 5104" transform="translate(4 156)">
          <Path
            id="Trazado_4648"
            data-name="Trazado 4648"
            d="M0,0H188V16H0Z"
            transform="translate(1120 736)"
          />
        </G>
        <Rect
          id="Rectángulo_1240"
          data-name="Rectángulo 1240"
          width="24"
          height="16"
          rx="4"
          transform="translate(1085 892)"
        />
      </G>
    </ContentLoader>
  </View>
);
