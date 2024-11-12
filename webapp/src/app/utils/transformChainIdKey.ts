import { FundingRecord } from "@/app/types/fundingRecord";
import { ChainIds } from "../types/chainAddress";

type FundingRecordRes = Omit<FundingRecord, "chainId"> & { chain_id: ChainIds };

export const transformChainIdKey = (
  records: FundingRecordRes[]
): FundingRecord[] =>
  records.map((record) => ({ ...record, chainId: record.chain_id }));
