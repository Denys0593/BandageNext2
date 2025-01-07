import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContacUs`.
 */
export type ContacUsProps = SliceComponentProps<Content.ContacUsSlice>;

/**
 * Component for "ContacUs" Slices.
 */
const ContacUs = ({ slice }: ContacUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contac_us (variation: {slice.variation}) Slices
    </section>
  );
};

export default ContacUs;
