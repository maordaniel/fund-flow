import { Handle, NodeProps, Position } from "reactflow";
import { FC } from "react";
import { ChainAddress } from "@/app/types/chainAddress";

interface AddressNodeData extends ChainAddress {
  readonly isSource?: boolean;
}

export const FundNode: FC<NodeProps<AddressNodeData>> = (node) => {
  const { data } = node;
  const { address, name, isSource } = data;

  const backgroundColor = isSource ? "[#f1f9ff]" : "white";

  return (
    <div
      className={`bg-${backgroundColor} h-20 border-2 border-[#d9eefb] p-4 rounded-lg w-60 flex flex-col justify-center`}
    >
      <Handle
        style={{
          borderWidth: "0",
          background: "none",
        }}
        type="target"
        id={Position.Left}
        position={Position.Left}
        isConnectable={false}
      />
      <Handle
        style={{
          borderWidth: "0",
          background: "none",
        }}
        type="source"
        id={Position.Right}
        position={Position.Right}
        isConnectable={false}
      />
      <p className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
        {name}
      </p>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600">
        {address}
      </p>
    </div>
  );
};
