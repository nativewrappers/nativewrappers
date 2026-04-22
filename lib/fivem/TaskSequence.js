var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Tasks } from "./Tasks";
class TaskSequence {
  static {
    __name(this, "TaskSequence");
  }
  static nullTask;
  handle = 0;
  isClosed;
  count;
  constructor(handle) {
    handle === void 0 ? this.create() : this.handle = handle;
    if (!TaskSequence.nullTask) {
      TaskSequence.nullTask = new Tasks(null);
    }
    this.isClosed = false;
    this.count = 0;
  }
  create() {
    this.handle = OpenSequenceTask();
  }
  dispose() {
    ClearSequenceTask(this.handle);
    this.handle = 0;
  }
  close(repeat = false) {
    if (this.isClosed) return;
    SetSequenceToRepeat(this.handle, repeat);
    CloseSequenceTask(this.handle);
    this.isClosed = true;
  }
  get Handle() {
    return this.handle;
  }
  get AddTask() {
    if (this.isClosed) {
      throw new Error("You can't add tasks to a closed sequence!");
    }
    this.count += 1;
    return TaskSequence.nullTask;
  }
  get IsClosed() {
    return this.isClosed;
  }
  get Count() {
    return this.count;
  }
}
export {
  TaskSequence
};
