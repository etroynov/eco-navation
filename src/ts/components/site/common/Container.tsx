import * as React from 'react';

export default ({ className, children } : { className?: string; children: Element}) => (
  <div className={`uc-container ${className}`}>{children}</div>
);
