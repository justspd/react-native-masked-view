// CREDITS: These types are based on the original work made by all the people who contributed to @types/react-native

import * as React from 'react';
import * as ReactNative from 'react-native';

interface InvertedMaskedViewProps extends ReactNative.ViewProps {
  maskElement: React.ReactElement;
}

declare class InvertedMaskedViewComponent extends React.Component<
  InvertedMaskedViewProps
> {}
declare const InvertedMaskedViewBase: ReactNative.Constructor<
  ReactNative.NativeMethodsMixin
> &
  typeof InvertedMaskedViewComponent;
export default class InvertedMaskedView extends InvertedMaskedViewBase {}
