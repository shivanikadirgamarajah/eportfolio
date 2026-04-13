'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
}

export default function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  loop = true,
  showCursor = true,
  className = '',
}: TypedTextProps) {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        showCursor,
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor]);

  return <span ref={typedRef} className={className} />;
}
