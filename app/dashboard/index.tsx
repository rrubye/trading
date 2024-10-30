import AdBoard from "@/components/Adboard";
import ChatBoard from "@/components/Chatboard";
import Conclusion from "@/components/Conclusion";
import ContactBoard from "@/components/ContactBoard";
import VoteBoard from "@/components/VoteBoard";
import WorkFlow from "@/components/WorkFlow";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <AdBoard />
      <ContactBoard />
      <WorkFlow />
      <VoteBoard />
      <ChatBoard />
      <Conclusion />
    </div>
  );
};

export default Dashboard;
