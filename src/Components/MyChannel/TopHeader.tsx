import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

const channel = {
  name: "Gadgets Gallery",
  handle: "@gadgets_gallery",
  logo: "https://logo.com/image-cdn/images/kts928pd/production/24c348b85e1e735f35bf108b2c2e6aa517cadde1-731x731.png?w=1080&q=72",
  videos: 10,
  subscribers: 100,
};

const TopHeader = () => {
  return (
    <Card shadow={false} className="w-full">
      <CardBody className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <figure className="relative w-52 h-52 mx-4">
            <Image
              src={channel.logo}
              alt="Channel Logo"
              width={200}
              height={200}
              className=" rounded-full"
            />
          </figure>
          <div className="flex flex-col gap-2 justify-start items-start">
            <Typography variant="h2" color="black" className="">
              {channel.name}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="">
              {channel.handle}
            </Typography>
            <Typography color="gray" className="font-normal">
              {channel.videos > 0
                ? `${channel.videos} videos in this channel`
                : "No video is here"}
            </Typography>
            <Typography color="gray" className="font-normal">
              {channel.subscribers > 0
                ? `${channel.subscribers} subscribers`
                : "No subscriber yet."}
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More About This Channel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-end items-start">
          <Button variant="outlined" className="rounded-full">
            Personalize Your Channel
          </Button>
          <Button variant="outlined" className="rounded-full">
            Organize Your Videos
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopHeader;
