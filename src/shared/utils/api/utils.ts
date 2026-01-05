/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnauthorizedRegistry } from './unauthorizedRegistry';
import { AbortRegistry } from './abortRegistry';
import type { TRequestId } from './types';
import { ApiException, UnauthorizedException } from './exceptions';

export type TFetcher = (...args: any[]) => Promise<any>;

export type TUnauthorizedRequestHandler = <F extends TFetcher, S extends boolean | void = void>(
  request: F,
  catchUnauthorizedException?: S,
) => (
  ...args: Parameters<F>
) => S extends void ? Promise<Awaited<ReturnType<F>>> : Promise<Awaited<ReturnType<F>> | void>;

export const handleUnauthorizedRequest: TUnauthorizedRequestHandler =
  <F extends TFetcher, S = boolean | void>(request: F, catchUnauthorizedException?: S) =>
  async (...args) => {
    try {
      return await request(...args);
    } catch (error) {
      const exception = error as ApiException;

      if (exception instanceof UnauthorizedException) {
        UnauthorizedRegistry.getRegistry().addRequest(() => {
          request(...args);
        });

        if (catchUnauthorizedException) return;
      }

      throw exception;
    }
  };

export const clearUnauthorizedRequests = () => UnauthorizedRegistry.getRegistry().clearRequests();

export const runUnauthorizedRequests = () => {
  const reg = UnauthorizedRegistry.getRegistry();
  reg.getRequests().forEach((r) => r());
  reg.clearRequests();
};

export const abortRequest = (id: TRequestId) => {
  AbortRegistry.getRegistry().runController(id);
};
