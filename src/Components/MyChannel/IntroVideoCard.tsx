import { MediaType } from "@/hooks/useMedia";
import { Typography } from "@material-tailwind/react";
import React from "react";

const IntroVideoCard = ({ media }: { media: MediaType }) => {
  const { sources, description, subtitle, thumb, title } = media;
  return (
    <div className="flex flex-row gap-4 justify-start items-start">
      <video width="320" height="240" className="rounded-lg" controls>
        <source src={sources} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <Typography variant="small">{description}</Typography>
      </div>
    </div>
  );
};

export default IntroVideoCard;
