import useSWR from "swr";

export interface MediaType {
  description: string;
  sources: string;
  subtitle: string;
  thumb: string;
  title: string;
  watched: string;
  liked: string;
}

interface CategoryType {
  name: string;
  videos: Array<MediaType>;
}

interface DataType {
  categories: Array<CategoryType>;
}

const fetcher = (args: string) =>
  fetch(args)
    .then((res) => res.json())
    .then((data) => JSON.parse(data));

export default function useMedia() {
  const { data, error, isLoading } = useSWR<DataType>(`/api/getMedia`, fetcher);

  return {
    medias: data?.categories[0]?.videos,
    isLoading,
    isError: error,
  };
}
