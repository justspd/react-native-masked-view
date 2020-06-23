// @flow
import { type Element, type Node } from 'react';

import { ViewPropTypes } from 'react-native';

export type InvertedMaskedViewProps = typeof ViewPropTypes &
  $ReadOnly<{|
    children: Node,
    /**
     * Should be a React element to be rendered and applied as the
     * mask for the child element.
     */
    maskElement: Element<any>,
  |}>;
