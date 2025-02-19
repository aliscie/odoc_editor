import {withRef, withVariants} from '@udecode/cn';
import {PlateElement} from '@udecode/plate-common';
import {cva} from 'class-variance-authority';

const headingVariants = cva('', {
    variants: {
        isFirstBlock: {
            false: '',
            true: 'mt-0',
        },
        variant: {
            h1: 'mb-1 mt-[0.3em] font-heading text-4xl font-bold',
            h2: 'mb-px mt-[0.2em] font-heading text-2xl font-semibold tracking-tight',
            h3: 'mb-px mt-[0.1em] font-heading text-xl font-semibold tracking-tight',
            h4: 'mt-[0em] font-heading text-lg font-semibold tracking-tight',
            h5: 'mt-[0em] text-lg font-semibold tracking-tight',
            h6: 'mt-[0em] text-base font-semibold tracking-tight',
        },
    },
});

const HeadingElementVariants = withVariants(PlateElement, headingVariants, [
    'isFirstBlock',
    'variant',
]);

export const HeadingElement = withRef<typeof HeadingElementVariants>(
    ({children, isFirstBlock, variant = 'h1', ...props}, ref) => {
        const {editor, element} = props;

        const Element = variant!;

        return (
            <HeadingElementVariants
                asChild
                isFirstBlock={element === editor.children[0]}
                ref={ref}
                variant={variant}
                {...props}
            >
                <Element>{children}</Element>
            </HeadingElementVariants>
        );
    }
);
