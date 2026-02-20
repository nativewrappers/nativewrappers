import { Tasks } from "./Tasks";
export declare class TaskSequence {
    private static nullTask;
    private handle;
    private isClosed;
    private count;
    constructor(handle?: number);
    private create;
    dispose(): void;
    close(repeat?: boolean): void;
    get Handle(): number;
    get AddTask(): Tasks;
    get IsClosed(): boolean;
    get Count(): number;
}
