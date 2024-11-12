"use client";

import { useQuery } from "@tanstack/react-query";
import { ChainAddress } from "@/app/types/chainAddress";
import { FundingResData } from "@/app/types/fundingRecord";

export const useFundingGraph = ({ chainId, address }: ChainAddress) => {
  const { isLoading, data: funds } = useQuery<FundingResData>({
    queryKey: ["funds", chainId, address],
    queryFn: () =>
      fetch(
        `http://localhost:8000/api/v1/funding/graph/${chainId}/${address}`
      ).then((res) => res.json()),
  });

  return {
    funds,
    isLoading,
  };
};
