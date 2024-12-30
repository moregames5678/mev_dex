import React from 'react';
import { DeployWithMd, NoActiveBots, RDC } from './(components)';
import { SlotInfo, UserTransaction } from '../dashboard/(components)';

const MevBots = () => {
  return (
    <div>
      <SlotInfo />
      <DeployWithMd className="mt-6" />
      <RDC />
      <div className="mt-8">
        <UserTransaction />
      </div>
      <NoActiveBots className="mt-6" />
    </div>
  );
};

export default MevBots;
