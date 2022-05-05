type Procedure = (...args: any[]) => void;

export function debounce<F extends Procedure>(
  func: F,
  wait = 300,
  immediate = true
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined | null;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this;
    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (timeout) timeout = null;

      if (!immediate) func.apply(context, args);
    }, wait);

    if (callNow) func.apply(context, args);
  };
}