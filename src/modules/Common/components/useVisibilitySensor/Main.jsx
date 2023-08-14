'use client';

import React, { useEffect, useRef, useState } from 'react'

function useVisibilitySensor({
  targetRef
}) {

  let [ isIntersecting, setIsIntersecting ] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      setIsIntersecting(entries[0].isIntersecting)
    })

    observer.observe(targetRef.current)
  }, [])

  return {
    isIntersecting
  }


}

export default useVisibilitySensor