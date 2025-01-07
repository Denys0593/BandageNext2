import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GrowYours`.
 */
export type GrowYoursProps = SliceComponentProps<Content.GrowYoursSlice>;

/**
 * Component for "GrowYours" Slices.
 */
const GrowYours = ({ slice }: GrowYoursProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for grow_yours (variation: {slice.variation}) Slices
    </section>
  );
};

export default GrowYours;
