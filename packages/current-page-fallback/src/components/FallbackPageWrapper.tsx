import * as React from 'react';
import { usePageRoute } from '../hooks/usePageRoute';

interface PageWrapperProps {
    children?: React.ReactNode | React.ReactElement | any
}

export const FallbackPageWrapper: React.FC<PageWrapperProps> = ({ children }: PageWrapperProps) => {
    const { onLoad } = usePageRoute();

    const render = React.useMemo(() => children, [children]);

    React.useEffect(() => {
        onLoad(render);
    }, [onLoad, render]);

    return render;
};

export default FallbackPageWrapper;