import { TokenHandlerMiddleware } from './token-handler.middleware';

describe('TokenHandlerMiddleware', () => {
  it('should be defined', () => {
    expect(new TokenHandlerMiddleware()).toBeDefined();
  });
});
