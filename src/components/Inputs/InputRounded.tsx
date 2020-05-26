import React from 'react';
import { InputProps, Input } from './Input';
import { styles } from './styles';

interface InputRoundedProps extends InputProps {}

export const InputRounded = React.forwardRef<any, InputRoundedProps>(
  (props, ref) => (
    <Input {...props} ref={ref} containerStyle={styles.inputRounded} />
  )
);
