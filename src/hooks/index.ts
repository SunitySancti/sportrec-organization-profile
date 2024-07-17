import { useState,
         useEffect } from 'react'
    
import type { RefObject } from 'react'

export const useElementWidth = (ref: RefObject<HTMLElement>) => {
    
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
        const { current } = ref;
        if(!current) {
            return
        }
        const resizeObserver = new ResizeObserver(() => {
            setWidth(current.offsetWidth);
            // setIsSingleColumn(
            //     layout.offsetWidth < breakpointWidth
            // )
        });
        resizeObserver.observe(current);
    
        return () => {
            resizeObserver.disconnect();
        }
    },[ ref.current ]);

    return width
}