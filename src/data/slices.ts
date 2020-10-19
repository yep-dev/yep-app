import { combineReducers } from 'redux';

import status, { StatusState } from './status';

export interface RootState {
  status: StatusState
}

const slices = {} as any;

for (const slice of [status]) {
  slices[slice.name] = slice;
}

const reducers = Object.entries(slices)
  .sort()
  .reduce((result, [name, slice]) => {
    // @ts-ignore
    result[name] = slice.reducer;
    return result;
  }, {});

console.log(reducers);

export const rootReducer = combineReducers(reducers);
