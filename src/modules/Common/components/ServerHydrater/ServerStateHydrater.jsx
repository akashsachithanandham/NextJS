'use client';

import React, { useEffect } from 'react'

function ServerStateHydrater({
  dataKey = 'other',
  data = {}
}) {

  useEffect(() => {
    if(window.serverState) {
      window.serverState = { ...window.serverState, [dataKey]: data};
    }
    else {
      window.serverState = { [dataKey]: data };
    }
  })

  return null;
}

export default ServerStateHydrater