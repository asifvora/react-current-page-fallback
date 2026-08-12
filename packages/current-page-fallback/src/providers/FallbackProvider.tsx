import * as React from 'react';
import ProgressBar from 'react-topbar-progress-indicator';

export type FallbackType = NonNullable<React.ReactNode> | null;

export interface FallbackContextType {
    updateFallback: (fallbackElement: FallbackType) => void;
}

export const FallbackContext = React.createContext<FallbackContextType>({
    updateFallback: () => { },
});

interface FallbackProviderProps {
    children: React.ReactNode | React.ReactElement | null;
    loadingBarColor?: string;
    initialLoadingScreen?: React.ReactNode;
}

// eslint-disable-next-line react/destructuring-assignment
export const FallbackProvider: React.FC<FallbackProviderProps> = ({
    children,
    loadingBarColor = '#fff86d',
    initialLoadingScreen,
}) => {
    const [fallback, setFallback] = React.useState<FallbackType>(null);

    const updateFallback = React.useCallback((fallbackElement: FallbackType) => {
        setFallback(() => fallbackElement);
    }, []);

    React.useEffect(() => {
        ProgressBar.config({
            barColors: {
                '0': loadingBarColor,
                '1.0': loadingBarColor,
            },
            shadowBlur: 0,
            barThickness: 4,
        });
    }, [loadingBarColor]);

    const renderChildren = React.useMemo(() => children, [children]);

    return (
        <FallbackContext.Provider value={{ updateFallback }}>
            <React.Suspense
                fallback={
                    <>
                        {initialLoadingScreen || <ProgressBar />}
                        {fallback}
                    </>
                }
            >
                {renderChildren}
            </React.Suspense>
        </FallbackContext.Provider>
    );
};