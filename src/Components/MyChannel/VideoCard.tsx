import { MediaType } from "@/hooks/useMedia";
import { Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { FaRegEye, FaRegThumbsUp } from "react-icons/fa";

const VideoCard = ({ media }: { media: MediaType }) => {
  const { sources, description, subtitle, thumb, title, watched, liked } =
    media;
  return (
    <div className="flex flex-col gap-4 justify-start items-start">
      <video width="320" height="240" className="rounded-lg" controls>
        <source src={sources} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <div className="flex flex-row gap-2 justify-start items-center my-2">
          <Tooltip
            className="bg-white border"
            placement="bottom"
            content={<p className="text-blue-gray-900 text-xs">Watched</p>}
          >
            <Typography variant="small" className="flex items-center gap-1">
              <FaRegEye />
              {watched}
            </Typography>
          </Tooltip>
          <Tooltip
            className="bg-white border"
            placement="bottom"
            content={<p className="text-blue-gray-900 text-xs">Liked</p>}
          >
            <Typography variant="small" className="flex items-center gap-1">
              <FaRegThumbsUp />
              {liked}
            </Typography>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
