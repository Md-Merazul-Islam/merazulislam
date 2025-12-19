import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                name?: string;
                class?: string;
                role?: string;
                'aria-label'?: string;
            };
        }
    }
}

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                name?: string;
                class?: string;
                role?: string;
                'aria-label'?: string;
            };
        }
    }
}
