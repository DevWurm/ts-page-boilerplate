import { greet } from './greet';

describe('greet', () => {
    test('it should greet', () => {
        expect(greet('World')).toEqual('Hello World')
    });
});
