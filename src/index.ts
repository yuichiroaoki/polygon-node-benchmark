import { config as dotEnvConfig } from "dotenv";
import { ERC20Token } from "./constants/addresses";
import { getPriceOnUniV3 } from "./price/uniswap/v3/getPrice";
import { getBigNumber } from "./utils";
dotEnvConfig();

export const main = async () => {
  const numberoFTests = 3;
  let processTime = 0;

  for (let i = 0; i < numberoFTests; i++) {
    const startTime = Date.now();
    await getPriceOnUniV3(
      ERC20Token.DAI.address,
      ERC20Token.USDC.address,
      getBigNumber(100),
      500
    );
    processTime += Date.now() - startTime;
  }
  console.log(`Total process time: ${processTime} ms`);
  console.log(`Average process time: ${processTime / numberoFTests} ms`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
