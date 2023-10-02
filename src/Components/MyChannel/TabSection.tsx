import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TabSection() {
  const path = usePathname();

  const data = [
    {
      label: "HOME",
      pathName: "/my-channel",
      href: "/channel/my-channel",
    },
    {
      label: "PLAYLISTS",
      pathName: "/playlists",
      href: "/channel/my-channel/playlists",
    },
    {
      label: "CHANNELS",
      pathName: "/channels",
      href: "/channel/my-channel/channels",
    },
    {
      label: "ABOUT",
      pathName: "/about",
      href: "/channel/my-channel/about",
    },
  ];

  return (
    <Navbar shadow={false}>
      <div className="flex items-center gap-8">
        {data.map(({ label, href }, i) => (
          <ul key={i} className="mb-4 mt-2 flex items-center gap-6">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link
                href={href}
                className={`flex items-center transition-all duration-500 after:transition-all after:duration-500 before:transition-all before:duration-500 hover:text-[#FFD670] ${
                  path === href ? "text-[#FFD670]" : ""
                }`}
              >
                {label}
              </Link>
            </Typography>
          </ul>
        ))}
      </div>
      <div className="max-w-full h-[1px] bg-gray-500/30"></div>
    </Navbar>
  );
}
