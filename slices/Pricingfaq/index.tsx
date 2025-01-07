import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Pricingfaq`.
 */
export type PricingfaqProps = SliceComponentProps<Content.PricingfaqSlice>;

/**
 * Component for "Pricingfaq" Slices.
 */
const Pricingfaq = ({ slice }: PricingfaqProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pricingfaq (variation: {slice.variation}) Slices
    </section>
  );
};

export default Pricingfaq;
