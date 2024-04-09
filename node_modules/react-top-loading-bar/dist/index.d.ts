import * as React from 'react';
import { CSSProperties } from 'react';
export declare type IProps = {
    progress?: number;
    color?: string;
    shadow?: boolean;
    background?: string;
    height?: number;
    onLoaderFinished?: () => void;
    className?: string;
    containerClassName?: string;
    loaderSpeed?: number;
    transitionTime?: number;
    waitingTime?: number;
    style?: CSSProperties;
    containerStyle?: CSSProperties;
    shadowStyle?: CSSProperties;
};
export declare type LoadingBarRef = {
    continuousStart: (startingValue?: number, refreshRate?: number) => void;
    staticStart: (startingValue?: number) => void;
    complete: () => void;
};
declare const LoadingBar: React.ForwardRefExoticComponent<IProps & React.RefAttributes<LoadingBarRef>>;
export default LoadingBar;
