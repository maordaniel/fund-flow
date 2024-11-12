import React, { FC, memo, MouseEvent } from "react";
import {
  Edge,
  FitViewOptions,
  MarkerType,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import {
  customEdges,
  nodeTypes,
} from "@/app/components/charts/FlowChart.constants";
import { ChainAddress } from "@/app/types/chainAddress";

const fitViewOptions: FitViewOptions = {
  padding: 0.5,
};

type FlowChartProps = {
  nodes: Node<ChainAddress>[];
  edges: Edge[];
  className?: string;
  preventScrolling?: boolean;
  children?: JSX.Element | JSX.Element[];
  onNodeClick: (_: MouseEvent, node: Node<ChainAddress>) => void;
};

const FlowChart: FC<FlowChartProps> = ({
  nodes,
  edges,
  className,
  children,
  onNodeClick,
}) => {
  const [nodesState, , onNodesChange] = useNodesState(nodes);
  const [edgesState, , onEdgesChange] = useEdgesState(edges);

  return (
    <ReactFlow
      fitView
      onNodeClick={onNodeClick}
      nodes={nodesState}
      edges={edgesState}
      fitViewOptions={fitViewOptions}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={customEdges}
      className={className}
      defaultEdgeOptions={{
        zIndex: 0,
        markerEnd: { type: MarkerType.ArrowClosed },
      }}
    >
      {children}
    </ReactFlow>
  );
};

export default memo(FlowChart);
