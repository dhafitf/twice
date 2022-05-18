import useSWR from "swr";

export default function useData(endpoint: string) {
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
