import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreeComponent`.
 */
export type FreeComponentProps =
  SliceComponentProps<Content.FreeComponentSlice>;

/**
 * Component for "FreeComponent" Slices.
 */
const FreeComponent = ({ slice }: FreeComponentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for free_component (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FreeComponent;
