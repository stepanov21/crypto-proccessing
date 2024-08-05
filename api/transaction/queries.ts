import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchWallets } from "./fetchers";

enum QueryKeys {
  WALLETS = "walletsAll",
}

export const useWallets = () =>
  useQuery({
    queryKey: [QueryKeys.WALLETS],
    queryFn: fetchWallets,
});

// export const prefetchNews = async (queryClient: QueryClient) =>
//   await queryClient.prefetchQuery({
//     queryKey: [QueryKeys.NEWS],
//     queryFn: fetchNews,
//   });

// export const useSingleNews = (newsId: string) =>
//   useQuery({
//     queryKey: [QueryKeys.NEWS, newsId],
//     queryFn: () => fetchNewsById(newsId),
//   });

// export const prefetchSingleNews = async (
//   queryClient: QueryClient,
//   newsId: string,
// ) =>
//   await queryClient.prefetchQuery({
//     queryKey: [QueryKeys.NEWS, newsId],
//     queryFn: () => fetchNewsById(newsId),
//   });