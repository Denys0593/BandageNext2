import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MeetOurTeam`.
 */
export type MeetOurTeamProps = SliceComponentProps<Content.MeetOurTeamSlice>;

/**
 * Component for "MeetOurTeam" Slices.
 */
const MeetOurTeam = ({ slice }: MeetOurTeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for meet_our_team (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MeetOurTeam;
