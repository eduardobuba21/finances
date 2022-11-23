// theme
import { theme } from '@src/theme';
// components
import { Text } from './Text';
import { Icon } from './Icon';
import { View, ViewProps } from 'react-native';

// ----------------------------------------------------------------------

type Props = {
  variant?: 'error' | 'warning' | 'info' | 'success';
} & ViewProps;

// ----------------------------------------------------------------------

export function Alert({ variant = 'error', ...rest }: Props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.props.padding.element,
        backgroundColor: theme.palette.error.dark,
        borderRadius: theme.props.borderRadius.element,
      }}
    >
      <Icon name={variant} />
      <Text variant="subtitle1" style={{ marginLeft: theme.props.padding.element }}>
        {rest.children}
      </Text>
    </View>
  );
}
