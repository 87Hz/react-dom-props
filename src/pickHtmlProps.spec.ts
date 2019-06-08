import 'jest';
import { pickHtmlProps } from './pickHtmlProps';

describe('pickHtmlProps should work', () => {
  it('should return htmlProps only', () => {
    const props = { some: 'value', width: 100 };
    const htmlProps = { width: 100 };

    expect(pickHtmlProps(props)).toEqual(htmlProps);
  });
});
