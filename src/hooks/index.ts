import { useState,
         useEffect } from 'react'
    
import type { RefObject } from 'react'

export const useElementWidth = (ref: RefObject<HTMLElement>) => {
    
    const [width, setWidth] = useState(0);
    const { current } = ref;
  
    useEffect(() => {
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
    },[ current ]);

    return width
}