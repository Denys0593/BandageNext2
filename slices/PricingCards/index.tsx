import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PricingCards`.
 */
export type PricingCardsProps = SliceComponentProps<Content.PricingCardsSlice>;

/**
 * Component for "PricingCards" Slices.
 */
const PricingCards = ({ slice }: PricingCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pricing_cards (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PricingCards;
