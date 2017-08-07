export const getClassName = prefix => {
  if (typeof window !== 'undefined' && window.location && window.location.pathname) {
    if (window.location.pathname === '/education') {
      return ` ${prefix}--education`;
    } else if (window.location.pathname === '/work-experience') {
      return ` ${prefix}--work-experience`;
    } else if (window.location.pathname === '/skills') {
      return ` ${prefix}--skills`;
    } else {
      return '';
    }
  }

  return '';
};
