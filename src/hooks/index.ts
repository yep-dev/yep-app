import {useCallback, useState} from "react";

export const useApi = (fetcher: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const callApi = useCallback(async (payload?: any) => {
    try {
      setLoading(true);
      const response = await fetcher(payload);
      setData(response.data);
      setError('');
      return response.data;
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [fetcher]);

  return {callApi, data, loading, error};
}