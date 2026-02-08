import { Svg } from "./svg";

// https://sourcegraph.com/github.com/tamagui/tamagui/-/blob/code/packages/lucide-icons/src/icons/Check.tsx
export const Check = Svg.styleable((props, ref) => (
    <Svg
        viewBox="0 0 24 24"
        ref={ref}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <Svg.Path d="M20 6 9 17l-5-5" />
    </Svg>
));
