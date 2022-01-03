import cn from 'classnames';

interface BaseIconProps {
  height?: number;
  width?: number;
  className?: string;
  style?: Record<string, string>;
  'data-testid'?: string;
}

export interface IconProps extends BaseIconProps {
  size?: number;
  fill?: string | boolean;
  testId?: string;
}

export const castIconProps = (props: IconProps): BaseIconProps => {
  const { size, height, width, className, testId } = props;

  return {
    height: size ? size : height,
    width: size ? size : width,
    className,
    style: { fill: 'currentColor' },
    'data-testid': testId,
  };
};

export type IconFC = React.FC<IconProps>;
