import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ClothesCards`.
 */
export type ClothesCardsProps = SliceComponentProps<Content.ClothesCardsSlice>;

/**
 * Component for "ClothesCards" Slices.
 */
const ClothesCards = ({ slice }: ClothesCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for clothes_cards (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ClothesCards;
