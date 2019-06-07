import 'jest';
import { pickHtmlProps, pickSvgProps } from './';

describe('pickHtmlProps should work', () => {
  it('should return htmlProps only', () => {
    const props = { some: 'value', width: 100 };
    const htmlProps = { width: 100 };

    expect(pickHtmlProps(props)).toEqual(htmlProps);
  });
});

describe('pickSvgProps should work', () => {
  it('should return svgProps only', () => {
    const props = { some: 'value', focusable: true };
    const svgProps = { focusable: true };

    expect(pickSvgProps(props)).toEqual(svgProps);
  });
});
