import React, { useEffect } from 'react';
import styled from '../styled-components';
import { StyleProp } from 'react-native';

type StylesType = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
  isDanger?: boolean;
};
type ContentType = {
  title?: string;
  desc?: string;
};

type CardType = React.FC<
  StylesType & {
    content?: Array<ContentType>;
    onPress: () => void;
    style?: StyleProp<any>;
  }
>;

const Card: CardType = ({
  onPress,
  children,
  content,
  style,
  ...styleProps
}) => {
  const [hasStyles, setHasStyles] = React.useState(false);
  useEffect(() => {
    const {
      isEnabled,
      isPrimary,
      isSecondary,
      isSecondaryDark,
      isSecondaryLigth,
      isDanger,
    } = styleProps;
    if (
      isEnabled ||
      isPrimary ||
      isSecondary ||
      isSecondaryDark ||
      isSecondaryLigth ||
      isDanger
    ) {
      setHasStyles(true);
    } else {
      setHasStyles(false);
    }
  }, [styleProps]);
  return (
    <Touchable
      hasStyles={hasStyles}
      style={style}
      {...styleProps}
      onPress={onPress}
    >
      <IconBox hasStyles={hasStyles} style={style} {...styleProps}>
        {children && children}
      </IconBox>
      <TextContent hasStyles={hasStyles} style={style} {...styleProps}>
        {content &&
          content.map(({ title, desc }, index) => (
            <TextBox
              key={index}
              hasStyles={hasStyles}
              style={style}
              {...styleProps}
            >
              <Text {...styleProps} hasStyles={hasStyles}>
                {title}
              </Text>
              {desc && (
                <TextSecondary {...styleProps} hasStyles={hasStyles}>
                  {desc}
                </TextSecondary>
              )}
            </TextBox>
          ))}
      </TextContent>
    </Touchable>
  );
};

type StyledProps = StylesType & {
  hasStyles: boolean;
};

const Touchable = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 5px ${props => props.theme.gray};
  elevation: 1;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const IconBox = styled.View<StyledProps>`
  flex-direction: row;
  flex: 1;
  height: 100px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${props => props.theme.borderRadius}px;
  border-top-right-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props =>
    props.isPrimary
      ? props.theme.primary
      : props.isSecondary
      ? props.theme.secondary
      : props.isSecondaryDark
      ? props.theme.secondaryDark
      : props.isSecondaryLigth
      ? props.theme.secondaryLigth
      : props.isDanger
      ? props.theme.error
      : 'transparent'};
`;
const TextContent = styled.View<StyledProps>`
  flex: 4;
  flex-direction: row;
  margin-left: 16px;
  height: 100px;
  align-items: flex-start;
  justify-content: center;
  border-top-end-radius: ${props => props.theme.borderRadius}px;
  border-bottom-end-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const TextBox = styled.View<StyledProps>`
  flex: 1;
  height: 100px;
  align-items: flex-start;
  justify-content: center;
  border-top-end-radius: ${props => props.theme.borderRadius}px;
  border-bottom-end-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const Text = styled.Text<StyledProps>`
  color: ${props => props.theme.lightGray};
  font-weight: 200px;
  font-size: 14px;
`;
const TextSecondary = styled.Text<StyledProps>`
  color: ${props =>
    props.isPrimary
      ? props.theme.primary
      : props.isSecondary
      ? props.theme.secondary
      : props.isSecondaryDark
      ? props.theme.secondaryDark
      : props.isSecondaryLigth
      ? props.theme.secondaryLigth
      : props.isDanger
      ? props.theme.error
      : 'transparent'};
  font-weight: 200px;
  font-size: 16px;
  margin-top: 8px;
  text-transform: ${p => (!p.hasStyles ? 'none' : 'uppercase')};
`;
export default Card as CardType;
