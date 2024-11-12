import React from "react";
import { BaseEdge, EdgeProps, getBezierPath } from "reactflow";

const FundEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) => {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <BaseEdge path={path} markerEnd={markerEnd} style={{ stroke: "#aac0f9" }}   />
  );
}


export default FundEdge