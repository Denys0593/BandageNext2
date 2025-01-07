import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactUsSupport`.
 */
export type ContactUsSupportProps =
  SliceComponentProps<Content.ContactUsSupportSlice>;

/**
 * Component for "ContactUsSupport" Slices.
 */
const ContactUsSupport = ({ slice }: ContactUsSupportProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_us_support (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default ContactUsSupport;
