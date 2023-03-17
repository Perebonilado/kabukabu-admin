import { NextPage } from "next";
import React from "react";

import AppLayout from "@/layouts/AppLayout";
import AppHead from "@/components/common/AppHead";
import ActiveTripsTable from "@/components/modules/dashboard/ActiveTripsTable";
import PendingApplicationContainer from "@/components/modules/dashboard/PendingApplicationContainer";
import WelcomeMessage from "@/components/modules/dashboard/WelcomeMessage";
import SummaryCardContainer from "@/components/modules/dashboard/SummaryCardContainer";
import TripsIcon from "@/components/icons/TripsIcon";
import SosIcon from "@/components/icons/SosIcon";
import WithdrawalIcon from "@/components/icons/WithdrawalIcon";

const mockPendingApplications = [
  {
    fullName: "Mark Anthony",
    location: "Lagos, Nigeria",
    image: "/testUser.jpg",
  },
  {
    fullName: "Mark Anthony",
    location: "Lagos, Nigeria",
    image: "/testUser.jpg",
  },
  {
    fullName: "Mark Anthony",
    location: "Lagos, Nigeria",
    image: "/testUser.jpg",
  },
];

const mockSummaryCardData = [
  {
    title: "Total trips",
    value: "30",
    icon: <TripsIcon />,
    iconBg: "#FFBF00",
  },
  {
    title: "Active trips",
    value: "30",
    icon: (
      <span style={{ color: "#fff" }}>
        <TripsIcon />
      </span>
    ),
    iconBg: "#2C3FEF",
  },
  {
    title: "SOS",
    value: "5",
    icon: (
      <span style={{ color: "#ffffff" }}>
        <SosIcon />
      </span>
    ),
    iconBg: "#EF2C5B",
  },
  {
    title: "Pending trips",
    value: "30",
    icon: <TripsIcon />,
    iconBg: "#FFBF00",
  },
  {
    title: "Total Earnings",
    value: "N500,000",
    icon: <WithdrawalIcon />,
    iconBg: "#FFBF00",
  },
];

const Dashboard: NextPage = () => {
  return (
    <>
      <AppHead title="Kabukabu | Dashboard" />
      <AppLayout>
        <WelcomeMessage name="Samson" />

        <div className="pt-12 flex max-md:flex-col">
          {/* summarycard/table */}
          <div className="w-[65%] max-md:w-full flex flex-col gap-12">
            <SummaryCardContainer data={mockSummaryCardData} />

            <ActiveTripsTable />
          </div>

          {/* pending applications */}
          <div
            className="w-[35%] 
          flex flex-col gap-10 items-center px-4 
          max-md:w-full max-md:flex-row
          max-md:pt-10
          max-sm:flex-col
          "
          >
            <PendingApplicationContainer
              data={mockPendingApplications}
              title="Pending Drivers Applications"
            />
            <PendingApplicationContainer
              data={mockPendingApplications}
              title="Pending SHARP Applications"
            />
          </div>
        </div>

        {/* charts */}
        <div></div>
      </AppLayout>
    </>
  );
};

export default Dashboard;
