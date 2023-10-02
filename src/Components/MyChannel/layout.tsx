import React from "react";
import TopHeader from "./TopHeader";
import { TabSection } from "./TabSection";
import { useRouter } from "next/router";

const ChannelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto p-8">
      <TopHeader />
      <TabSection />
      {children}
    </div>
  );
};

export default ChannelLayout;
