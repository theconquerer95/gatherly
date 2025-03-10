import React, { useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Input } from '@design/Input';

type InputOTPProps = {
  length?: number;
  onComplete?: (value: string) => void;
};

const OTPInput = ({ length = 4, onComplete }: InputOTPProps) => {
  const inputRefs = useRef<Array<React.ElementRef<typeof Input> | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return; // Prevent multiple characters

    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all inputs are filled
    const values = inputRefs.current.map(ref => ref?.props?.value || '');
    if (values.every(val => val !== '')) {
      onComplete?.(values.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    e.preventDefault();
    if (e.nativeEvent.key === 'Backspace') {
      const currentRef = inputRefs.current[index];
      if (!currentRef?.props?.value && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <Pressable style={styles.container}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <Input
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.input}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#6b7280',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default OTPInput;
