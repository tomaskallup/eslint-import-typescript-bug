import {someFunc} from '@utils/some-util';
import {Button} from '@atomics';
import {Omit} from '@typings';

import {Box, BoxProps} from '..';

export type OtherProps = Omit<BoxProps, 'name'>;

Box();

Button();

someFunc();
