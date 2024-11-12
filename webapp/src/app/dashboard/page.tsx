"use client";

import React, { useState, MouseEvent } from "react";
import { AddressType, ChainAddress, ChainIds } from "@/app/types/chainAddress";
import FlowChart from "@/app/components/charts/FlowChart";
import { useFundsFlow } from "./hooks/useFundsFlow";
import Loader from "@/app/components/Loading";
import DataUnavailable from "@/app/components/DataUnavailable";
import { Node } from "reactflow";

const sourceChainAddress: ChainAddress = {
  address: "0x39cd23328b5ba304ae70bb0c1866e224f727f962",
  chainId: ChainIds.EthereumMainnet,
  type: AddressType.EOA,
};

export default function Dashboard() {
  const [chainAddress, setChainAddress] =
    useState<ChainAddress>(sourceChainAddress);

  const { nodes, edges, funds, isLoading } = useFundsFlow(chainAddress);

  const onNodeClick = (_: MouseEvent, { data }: Node<ChainAddress>) =>
    setChainAddress(data);

  if (isLoading) return <Loader />;
  if (!funds?.edges) return <DataUnavailable />;

  return <FlowChart nodes={nodes} edges={edges} onNodeClick={onNodeClick} />;
}
