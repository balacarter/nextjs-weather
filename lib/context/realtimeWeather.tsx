'use client';

import {
  ActionDispatch,
  createContext,
  ReactNode,
  Reducer,
  useReducer,
} from 'react';
import { WeatherResponse } from '../types';

type action = {
  type: string;
  data?: WeatherResponse;
};
export const RealTimeContext = createContext<WeatherResponse | null>(null);
export const RealTimeDispatchContext = createContext<ActionDispatch<
  [action]
> | null>(null);

export const realtimeReducer: Reducer<WeatherResponse | null, action> = (
  data: WeatherResponse | null,
  action: action
) => {
  switch (action.type) {
    case 'set': {
      if (action.data) data = action.data;
      return data;
    }
    default: {
      throw Error(`'Unkown action: ', ${action.type}`);
    }
  }
};

export function RealTimeProvider({
  initialData,
  children,
}: {
  initialData: WeatherResponse;
  children: ReactNode;
}) {
  const [data, dispatch] = useReducer(realtimeReducer, initialData);

  return (
    <RealTimeContext.Provider value={data}>
      <RealTimeDispatchContext.Provider value={dispatch}>
        {children}
      </RealTimeDispatchContext.Provider>
    </RealTimeContext.Provider>
  );
}
