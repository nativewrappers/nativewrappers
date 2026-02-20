export type StateBagChangeHandler = (bagName: string, key: string, value: any, reserved: number, replicated: boolean) => void;
