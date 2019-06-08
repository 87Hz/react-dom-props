import 'jest';
import { pickSvgProps } from './pickSvgProps';

describe('pickSvgProps should work', () => {
  it('should return svgProps only', () => {
    const props = { some: 'value', focusable: true };
    const svgProps = { focusable: true };

    expect(pickSvgProps(props)).toEqual(svgProps);
  });
});
