export const Delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));
