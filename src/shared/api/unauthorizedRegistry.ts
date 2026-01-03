export class UnauthorizedRegistry {
  private static instance: UnauthorizedRegistry;
  private _requests: Array<() => void> = [];

  private constructor() {}

  public static getRegistry() {
    if (!UnauthorizedRegistry.instance) {
      UnauthorizedRegistry.instance = new UnauthorizedRegistry();
    }
    return UnauthorizedRegistry.instance;
  }

  public addRequest(request: () => void) {
    this._requests.push(request);
  }

  public clearRequests() {
    this._requests = [];
  }

  public getRequests() {
    return this._requests;
  }
}
