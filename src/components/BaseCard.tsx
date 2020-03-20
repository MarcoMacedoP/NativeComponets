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

type ClipboardType = React.FC<
  StylesType & {
    text?: string;
    onPress: () => void;
    style?: StyleProp<any>;
  }
>;

const Clipboard: ClipboardType = ({
  onPress,
  children,
  text,
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
      <TextBox hasStyles={hasStyles} style={style} {...styleProps}>
        <Text {...styleProps} hasStyles={hasStyles}>
          {text}
        </Text>
      </TextBox>
      <IconBox hasStyles={hasStyles} style={style} {...styleProps}>
        {children && children}
      </IconBox>
    </Touchable>
  );
};

type StyledProps = StylesType & {
  hasStyles: boolean;
};

const Touchable = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 5px ${props => props.theme.gray};
  elevation: 1;
  border-radius: 5px;
  background-color: ${props => props.theme.background};
`;
const IconBox = styled.View<StyledProps>`
  flex-direction: row;
  flex: 0.5;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-top-end-radius: 5px;
  border-bottom-end-radius: 5px;
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
const TextBox = styled.View<StyledProps>`
  flex: 4;
  height: 40px;
  margin-left: 16px;
  align-items: flex-start;
  justify-content: center;
  border-top-start-radius: ${props => props.theme.borderRadius}px;
  border-bottom-start-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const Text = styled.Text<StyledProps>`
  color: ${props => props.theme.lightGray};
  font-weight: 200;
  font-size: 14px;
`;
export default Clipboard as ClipboardType;
