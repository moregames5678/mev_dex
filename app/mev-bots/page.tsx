import React from 'react';
import { DeployWithMd, RDC } from './(components)';
import { SlotInfo } from '../dashboard/(components)';

const MevBots = () => {
  return (
    <div>
      <SlotInfo />
      <DeployWithMd className="mt-6" />
      <RDC/>
    </div>
  );
};

export default MevBots;
