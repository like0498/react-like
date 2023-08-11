import { AttributifyAttributes } from 'windicss/types/jsx';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    p?: string;
    font?: string;
    shadow?: string;
    text?: string;
    bg?: string;
    border?: string;
    cursor?: string;
    w?: string;
    h?: string;
    flex?: string;
    align?: string;
    justify?: string;
    items?: string;
    opacity?: string;
    animate?: string;
    pos?: string;
    m?: string;
    left?: string;
    transform?: string;
    translate?: string;
    overflow?: string;
    rounded?: string;
    display?: string;
    leading?: string;
    relative?: string;
    first?: string;
    fixed?: string;
    top?: string;
    absolute?: string;
    bottom?: string;
    box?: string;
    z?: string;
    right?: string;
  }
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}