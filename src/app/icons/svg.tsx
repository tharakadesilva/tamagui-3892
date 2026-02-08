import { Path, Svg as RNSvg } from 'react-native-svg';
import { ColorTokens, createStyledContext, SizeTokens, styled, withStaticProperties } from 'tamagui';

export const SvgContext = createStyledContext<{
    color: ColorTokens;
    size: SizeTokens;
}>({
    color: '$color',
    size: '$4',
})

export const StyledSvg = styled(
    RNSvg,
    {
        name: 'Svg',
        context: SvgContext,
        variants: {
            color: {
                '...color': (val) => ({
                    stroke: val,
                }),
            },
            size: {
                '...size': (val) => ({
                    height: val,
                    width: val,
                }),
            },
        } as const,
    },
    {
        accept: {
            height: 'size',
            stroke: 'color',
            width: 'size',
        },
    },
);

export const Svg = withStaticProperties(StyledSvg, {
    Props: SvgContext.Provider,
    Path: Path,
});
