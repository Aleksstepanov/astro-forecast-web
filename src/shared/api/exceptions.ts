export interface IApiExceptionData {
  errors?: Record<string, string[]>;
  detail: string;
  instance: string;
}

export interface IApiExceptionOptions {
  status?: number;
  data?: IApiExceptionData;
}

export class ApiException extends Error {
  status?: number;
  data?: IApiExceptionData;

  constructor(message: string, options?: IApiExceptionOptions) {
    super(message);
    this.name = 'ApiException';
    this.status = options?.status;
    this.data = options?.data;
  }
}

export class AbortException extends ApiException {
  constructor(message = '', options?: IApiExceptionOptions) {
    super(message, options);
    this.name = 'AbortException';
  }
}

export class UnauthorizedException extends ApiException {
  constructor(message: string, options?: IApiExceptionOptions) {
    super(message, options);
    this.name = 'UnauthorizedException';
    this.status = options?.status || 401;
  }
}
