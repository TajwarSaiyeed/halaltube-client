import IntroVideoCard from "@/Components/MyChannel/IntroVideoCard";
import VideoCard from "@/Components/MyChannel/VideoCard";
import ChannelLayout from "@/Components/MyChannel/layout";
import useMedia, { MediaType } from "@/hooks/useMedia";
import { Typography } from "@material-tailwind/react";
import React from "react";

const index = () => {
  const { medias, isLoading, isError } = useMedia();

  React.useEffect(() => {
    console.log(medias);
  });

  if (isError)
    return (
      <div className="w-full max-w-screen-2xl mx-auto p-8 h-screen flex justify-center items-center">
        Failed to load, reload again.
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full max-w-screen-2xl mx-auto p-8 h-screen flex justify-center items-center">
        Loading
      </div>
    );

  return (
    <ChannelLayout>
      <div className="py-4 px-8">
        <section id="introduction" className="my-4">
          <Typography variant="h4" className="py-4">Introduction</Typography>
          <div>
            {medias !== undefined ? (
              <IntroVideoCard media={medias[0]}></IntroVideoCard>
            ) : (
              "No video."
            )}
          </div>
        </section>
        <section id="featured" className="my-4">
          <Typography variant="h4" className="py-4">Featured</Typography>
          <div className="grid grid-cols-4 gap-4">
            {medias?.slice(0, 4)?.map((media, i) => (
              <div key={i}>
                <VideoCard media={media} />
              </div>
            ))}
          </div>
        </section>
        <section id="recent"></section>
      </div>
    </ChannelLayout>
  );
};

export default index;
