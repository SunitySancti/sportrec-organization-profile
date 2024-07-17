import { useRef } from 'react'

import type { ReactNode } from 'react'

import './styles.scss'
import { useElementWidth } from 'hooks'

interface ReorderableLayoutProps {
    children: ReactNode;
    limits?: {
        leftColumn: [number, number]; // [minWidth, maxWidth] in px
        rightColumn: [number, number]; // [minWidth, maxWidth] in px
    };
    ordering?: {
        single?: number[]; // children's indexes
        double?: [number[], number[]];
    };
    gap?: number // intercolumn gap in px
}

const ReorderableLayout = ({
    ordering,
    limits,
    children,
    gap = 20
} : ReorderableLayoutProps,
) => {
    // dealing with responsive magic
    const layoutRef = useRef<HTMLDivElement>(null);
    const layoutWidth = useElementWidth(layoutRef);
    const isSingleColumn = limits
        ? layoutWidth < (limits.leftColumn[0] + gap + limits.rightColumn[0])
        : true;
    
    // reordering
    const { single: singleCustomOrdering,
            double: doubleCustomOrdering } = ordering || {};

    const reorder = (children: ReactNode, ordering?: number[]) => {
        if(ordering && Array.isArray(children)) {
            return ordering.map(idx => children[idx])
        } else {
            return children
        }
    }
    
    return (
        <div
            className='reorderable-layout'
            style={{ gap }}
            ref={ layoutRef }
        >
            { isSingleColumn
                ? <div className='column' style={{
                    minWidth: limits?.leftColumn[0],
                    maxWidth: limits?.leftColumn[1],
                    gap
                }}>
                    { reorder(children, singleCustomOrdering) }
                </div>
                : <>
                    <div className='column' style={{
                        minWidth: limits?.leftColumn[0],
                        maxWidth: limits?.leftColumn[1],
                        gap
                    }}>
                        { reorder(children, (doubleCustomOrdering || [])[0]) }
                    </div>
                    <div className='column' style={{
                        minWidth: limits?.rightColumn[0],
                        maxWidth: limits?.rightColumn[1],
                        gap
                    }}>
                        { reorder(children, (doubleCustomOrdering || [])[1]) }
                    </div>
                </>
            }
        </div>
    );
};

export default ReorderableLayout;