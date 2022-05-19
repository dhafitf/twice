import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useData(endpoint: any) {
  const fetcher = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(endpoint, fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  } as const;
}
