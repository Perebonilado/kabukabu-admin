import Button from "@/components/ui/Button/Button";
import React, { FC } from "react";

import ActiveTripsTableCell from "./ActiveTripsTableCell";

interface Props {
  from: string;
  to: string;
  rider: string;
  driver: string;
}

const ActiveTripsTableRow: FC<Props> = (props) => {
  return (
    <div className="w-full min-w-[600px] border-b-[#E6E6E6] border-b p-3 flex justify-between gap-2">
      {Object.entries(props).map(([title, body], idx) => {
        return <ActiveTripsTableCell key={idx} title={title} body={body} />;
      })}
      <div className="flex items-center">
        <Button title="View Trip" size="small" variant="contained" color="tetiary"/>
      </div>
    </div>
  );
};

export default ActiveTripsTableRow;
