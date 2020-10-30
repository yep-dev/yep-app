import { useCallback, useMemo, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useApi = (fetcher: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const callApi = useCallback(
    async (payload?: any) => {
      try {
        setLoading(true);
        const response = await fetcher(payload);
        setData(response.data);
        setError('');
        return response.data;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        setError(e);
        return e;
      } finally {
        setLoading(false);
      }
    },
    [fetcher]
  );

  return {
    callApi,
    data,
    loading,
    error,
  };
};

export const useAction = (actions: any) => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [
    actions,
    dispatch,
  ]);
};
