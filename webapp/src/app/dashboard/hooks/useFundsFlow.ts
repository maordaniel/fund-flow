import { useFundingGraph } from "@/app/api/useFundingGraph";
import { ChainAddress } from "@/app/types/chainAddress";
import { FundingResData } from "@/app/types/fundingRecord";
import { createFundsGraphElements } from "@/app/utils/createGraphElements";
import { Edge, Node } from "reactflow";

type FundsFlowData = {
  readonly isLoading?: boolean;
  readonly funds?: FundingResData;
  readonly nodes: Node<ChainAddress>[];
  readonly edges: Edge[];
};

export const useFundsFlow = (sourceAddress: ChainAddress): FundsFlowData => {
  const { isLoading, funds } = useFundingGraph(sourceAddress);
  const { nodes, edges } = createFundsGraphElements(
    funds?.edges,
    sourceAddress.address
  );

  return {
    funds,
    nodes,
    edges,
    isLoading,
  };
};
