import type { TRequestId } from './types';

export class AbortRegistry {
  private static instance: AbortRegistry;
  private _abortControllers: Record<string | symbol, () => void> = {};

  private constructor() {}

  public static getRegistry() {
    if (!AbortRegistry.instance) {
      AbortRegistry.instance = new AbortRegistry();
    }
    return AbortRegistry.instance;
  }

  private _getController(id: TRequestId) {
    const emptyController = () => {};
    return this._abortControllers[id] || emptyController;
  }

  public registerController(id: TRequestId) {
    const abortController = new AbortController();
    this._abortControllers[id] = abortController.abort.bind(abortController);
    return abortController;
  }

  public clearController(id: TRequestId) {
    delete this._abortControllers[id];
  }

  public runController(id: TRequestId) {
    const controller = this._getController(id);
    controller();
    this.clearController(id);
  }
}
