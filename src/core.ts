import cn from 'classnames';

interface BaseIconProps {
  height?: number;
  width?: number;
  className?: string;
}

export interface IconProps extends BaseIconProps {
  size?: number;
  fill?: string | boolean;
}

export const castIconProps = (props: IconProps): BaseIconProps => {
  const { size, height, width, className, fill = true } = props;

  return {
    height: size ? size : height,
    width: size ? size : width,
    className: cn(className, fill && `fill-current`),
  };
};

export type IconFC = React.FC<IconProps>;
