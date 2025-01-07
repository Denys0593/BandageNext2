import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PricingAfterHeader`.
 */
export type PricingAfterHeaderProps =
  SliceComponentProps<Content.PricingAfterHeaderSlice>;

/**
 * Component for "PricingAfterHeader" Slices.
 */
const PricingAfterHeader = ({
  slice,
}: PricingAfterHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pricing_after_header (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default PricingAfterHeader;
