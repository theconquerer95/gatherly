import * as React from 'react';
import { Text, TextInput, type TextInputProps, View } from 'react-native';
import { cn } from 'utils/classnames';

type InputProps = TextInputProps & {
  label?: string;
  required?: boolean;
  wrapperClassName?: string;
};

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      className,
      placeholderClassName,
      label,
      required,
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <View className={wrapperClassName}>
        {label && (
          <View className="flex-row items-center mb-2">
            <Text className="text-muted-foreground">{label}</Text>
            {required && <Text className="text-red-500">*</Text>}
          </View>
        )}
        <TextInput
          ref={ref}
          className={cn(
            'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
            props.editable === false && 'opacity-50 web:cursor-not-allowed',
            className,
          )}
          placeholderClassName={cn(
            'text-muted-foreground',
            placeholderClassName,
          )}
          {...props}
        />
      </View>
    );
  },
);

Input.displayName = 'Input';

export { Input };
