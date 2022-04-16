import { ethers } from "ethers";
import { sendPostRequest } from "./request";

export const getBlockNumber = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = { jsonrpc: "2.0", method: "eth_blockNumber", params: [], id: 0 };

  if (!process.env.POLYGON_RPC_URL) {
    throw new Error("POLYGON_RPC_URL is not defined");
  }

  const response = await sendPostRequest(
    process.env.POLYGON_RPC_URL,
    data,
    config
  );
  const blockNumber = ethers.BigNumber.from(response.result);
  return blockNumber;
};
