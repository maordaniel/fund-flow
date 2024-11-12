import { FundingFlowRecord } from "@/app/types/fundingRecord";
import { EDGES_TYPES, NODE_TYPES } from "@/app/components/charts";
import { getGroupLayout } from "./getGroupLayout";

export const createFundsGraphElements = (
  funds: FundingFlowRecord[] = [],
  sourceAddress?: string
) => {
  const nodes = [
    ...funds
      .flatMap((record) => [record.source, record.dest])
      .map((chainAddress) => ({
        type: NODE_TYPES.FUND_NODE,
        id: chainAddress.address,
        data: {
          ...chainAddress,
          isSource: chainAddress.address === sourceAddress,
        },
        position: { x: 0, y: 0 },
      })),
  ];

  const edges = funds.map((record) => ({
    type: EDGES_TYPES.FUND_EDGE,
    id: `edge-${record.source.address}-${record.dest.address}`,
    source: record.source.address,
    target: record.dest.address,
  }));

  return getGroupLayout(nodes, edges, "LR");
};
