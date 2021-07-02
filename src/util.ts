export const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
