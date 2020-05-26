import React from 'react';
import { InputProps, Input } from './Input';
import { Animated, View } from 'react-native';
import { styles } from './styles';

interface InputWithLabelProps extends InputProps {
  label: string;
}

export const InputWithLabel = React.forwardRef<any, InputWithLabelProps>(
  ({ label, containerStyle, ...props }, ref) => (
    <View style={styles.inputWithLabelContainer}>
      <Input {...props} ref={ref}>
        {({ color }) => (
          <Animated.Text style={[containerStyle, { color }]}>
            {label}
          </Animated.Text>
        )}
      </Input>
    </View>
  )
);
