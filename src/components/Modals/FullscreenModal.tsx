import React from 'react';
import { StyleProp } from 'react-native';
import styled from 'styled-components/native';
import SwipeModal from './SwipeModal';
import ButtonBase from '../Button';
/**
 *  A component to manage modals through app.
 *  @param isShowed indicates if modal is showed
 *  @param onClose a function to be called when the modal closes.
 *  @param style a styles extra to be showed on the modal.
 *  @param title (optional) an text showed in the top of modal
 */

type StylesType = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
  isDanger?: boolean;
};

type FullscreenType = React.FC<
  StylesType & {
    isShowed: boolean;
    style?: StyleProp<any>;
    onClose: () => void;
  }
>;

const FullscreenModal: FullscreenType = ({
  onClose,
  isShowed,
  style,
  ...styleProps
}) => {
  return (
    <SwipeModal isShowed={isShowed} onClose={onClose} {...styleProps}>
      <Subtitle style={style} {...styleProps}>
        {' '}
        Confirm your order{' '}
      </Subtitle>
      {/* <Image
        source={
          transactionData.currency === 'AGVC'
            ? require('assets/icons/agave_coin_icon.png')
            : require('assets/icons/ethereum_icon.png')
        }
      /> */}
      <Label style={style} {...styleProps}>
        lol
      </Label>
      <SmallText style={style} {...styleProps}>
        lol
      </SmallText>

      <Button text={'send'} isPrimary onPress={() => console.log('hey')} />
      <SmallText style={style} {...styleProps}>
        This transaction is operated by
      </SmallText>
      <SmallText style={style} {...styleProps}>
        Toopago SA. CV.
      </SmallText>
    </SwipeModal>
  );
};
type StyledProps = StylesType & {};
const Header = styled.View`
  background-color: ${props => props.theme.primary};
`;
const SmallText = styled.Text<StyledProps>`
  color: #000000;
  margin-top: 15px;
`;
const Button = styled(ButtonBase)`
  margin-bottom: 16px;
`;
const Subtitle = styled.Text<StyledProps>`
  color: #000000;
  margin-top: 15px;
`;
const Label = styled.Text<StyledProps>`
  color: #000000;
`;

export default FullscreenModal;
