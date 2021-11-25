import cn from 'classnames';

interface BaseIconProps {
  height?: number;
  width?: number;
  className?: string;
  'data-testid'?: string;
}

export interface IconProps extends BaseIconProps {
  size?: number;
  fill?: string | boolean;
  testId?: string;
}

export const castIconProps = (props: IconProps): BaseIconProps => {
  const { size, height, width, className, fill = true, testId } = props;

  return {
    height: size ? size : height,
    width: size ? size : width,
    // TODO: avoid using this global class
    className: cn(className, fill && `fill-current`),
    'data-testid': testId,
  };
};

export type IconFC = React.FC<IconProps>;
