import React from 'react';
import { PerformanceOfTypes, SlotInfo, UserProfit, UserTransaction } from './(components)';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <SlotInfo />

      <div className="flex gap-[30px]">
        <UserProfit />
        <PerformanceOfTypes />
      </div>

      <UserTransaction />
    </div>
  );
};

export default Dashboard;
