import React from 'react';
import styled from '../../styled-components';
import { StyleProp } from 'react-native';
import { useThemeColor, StylesType } from '../../hooks/useThemeColor';

type ContentType = {
  title?: string;
  desc?: string;
};

type CardType = React.FC<
  StylesType & {
    content?: Array<ContentType>;
    onPress: () => void;
    style?: StyleProp<any>;
    icon?: React.FC<{ color?: string }>;
  }
>;

const Card: CardType = ({
  onPress,
  children,
  content,
  style,
  icon,
  ...styleProps
}) => {
  const color = useThemeColor(styleProps);
  return (
    <Touchable style={style} onPress={onPress}>
      {children ? (
        children
      ) : (
        <>
          {icon && (
            <IconBox color={color} style={style}>
              {icon({ color: '#fff' })}
            </IconBox>
          )}
          {content && (
            <TextContent style={style}>
              {content.map(({ title, desc }, index) => (
                <TextBox key={index} style={style}>
                  <Text>{title}</Text>
                  {desc && <TextSecondary color={color}>{desc}</TextSecondary>}
                </TextBox>
              ))}
            </TextContent>
          )}
        </>
      )}
    </Touchable>
  );
};

type StyledProps = StylesType & {
  color: string | null;
};

const Touchable = styled.TouchableOpacity`
  elevation: 6;
  flex-direction: row;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const IconBox = styled.View<StyledProps>`
  border-top-left-radius: ${props => props.theme.borderRadius}px;
  border-bottom-left-radius: ${props => props.theme.borderRadius}px;
  flex: 1;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.color ? props.color : 'transparent')};
`;
const TextContent = styled.View`
  flex: 4;
  flex-direction: row;
  margin-left: 16px;
  height: 100px;
  align-items: flex-start;
  justify-content: center;
`;
const TextBox = styled.View`
  flex: 1;
  height: 100px;
  align-items: flex-start;
  justify-content: center;
  border-top-right-radius: ${props => props.theme.borderRadius}px;
  border-bottom-right-radius: ${props => props.theme.borderRadius}px;
`;
const Text = styled.Text`
  color: ${props => props.theme.lightGray};
  font-weight: 200;
  font-size: 16px;
`;
const TextSecondary = styled(Text)<StyledProps>`
  color: ${props => (props.color ? props.color : 'transparent')};
  margin-top: 8px;
`;
export default Card as CardType;
