import { useCallback, useEffect, useRef } from 'react';

const useScrollStretch = (duration, delay, width) => {
  const dom = useRef();

  
  const handleScroll = useCallback(([entry])=>{
    const {current} = dom;
    if(entry.isIntersecting){
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubc-bezier(0,0,0.2,1)';
      current.style.transitionDelay=`${delay}s`;
      current.style.opacity=1;
      current.style.width = `${width}em`;
    }
  },[delay, duration, width],);

  useEffect(()=>{
    let observer;
    const {current} = dom;

    if(current){
      observer = new IntersectionObserver(handleScroll, {threshold:0.7});
      observer.observe(current);

      return ()=> observer && observer.disconnect()
    };
  },[handleScroll]);
  return {
    ref: dom,
    style:{
      opacity:0,
      width:'1px',
    }
  };
};

export {useScrollStretch};