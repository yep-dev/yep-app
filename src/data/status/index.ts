import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../slices';

interface DeviceStatus {
  type: string;
}

export interface StatusState {
  machine: DeviceStatus | null;
  arm: DeviceStatus | null;
}

const initialState: StatusState = {
  machine: null,
  arm: null,
};

const slice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (
      state,
      { payload }: PayloadAction<{ device: string; type: string }>
    ) => ({
      ...state,
      [payload.device]: payload.type,
    }),
  },
});

const createStatusSelectors = () => {
  const status = (state: RootState) => state.status;
  return {
    status,
  };
};

const status = {
  selectors: createStatusSelectors(),
  ...slice,
};

export default status;
