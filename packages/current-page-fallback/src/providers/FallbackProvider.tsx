import React from 'react';
import ProgressBar from 'react-topbar-progress-indicator';

// Progress Bar -> Configuration
ProgressBar.config({
    barColors: {
        '0': '#fff86d',
        '1.0': '#fff86d',
    },
    shadowBlur: 0,
    barThickness: 4,
});

export type FallbackType = NonNullable<React.ReactNode> | null;

export interface FallbackContextType {
    updateFallback: (fallbackElement: FallbackType) => void;
}

export const FallbackContext = React.createContext<FallbackContextType>({
    updateFallback: () => { },
});

interface FallbackProviderProps {
    children: React.ReactNode | React.ReactElement | null
}

// eslint-disable-next-line react/destructuring-assignment
export const FallbackProvider: React.FC<FallbackProviderProps> = ({
    children,
}) => {
    const [fallback, setFallback] = React.useState<FallbackType>(null);

    const updateFallback = React.useCallback((fallbackElement: FallbackType) => {
        setFallback(() => fallbackElement);
    }, []);

    const renderChildren = React.useMemo(() => children, [children]);

    return (
        <FallbackContext.Provider value={{ updateFallback }}>
            <React.Suspense
                fallback={<><ProgressBar />{fallback}</>}
            >
                {renderChildren}
            </React.Suspense>
        </FallbackContext.Provider>
    );
};