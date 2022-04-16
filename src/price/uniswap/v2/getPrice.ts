import { config as dotEnvConfig } from "dotenv";
import { BigNumber, ethers } from "ethers";
dotEnvConfig();
import * as UniswapV2Router from "../../../abis/IUniswapV2Router02.json";
import { getBigNumber } from "../../../utils";

const maticProvider = new ethers.providers.JsonRpcProvider(
  process.env.POLYGON_RPC_URL
);

export const getPriceOnUniV2 = async (
  tokenIn: string,
  tokenOut: string,
  amountIn: BigNumber,
  routerAddress: string
): Promise<BigNumber> => {
  const V2Router = new ethers.Contract(
    routerAddress,
    UniswapV2Router.abi,
    maticProvider
  );
  const amountsOut = await V2Router.getAmountsOut(amountIn, [
    tokenIn,
    tokenOut,
  ]);
  if (!amountsOut || amountsOut.length !== 2) {
    return getBigNumber(0);
  }
  return amountsOut[1];
};
