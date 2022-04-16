# Polygon Node Benchmark

## Usage

### 1. Set up environment variables

You'll need a POLYGON_RPC_URL environment variable.

Then, you can create a .env file with the following.

```
POLYGON_RPC_URL=<your-POLYGON_RPC_URL>
```

If you run this benchmark on your own polygon node, you can use the following.

```
POLYGON_RPC_URL=http://localhost:8545
```

### 2. Install dependencies with the following command:

```
yarn install
```

### 3. Run the benchmark with the following command:

```
yarn server
```

## Result

### Environment

Compute Engine  
RAM 16GB  
us central1-a

### RPC Polygon node

Total process time: 912 ms  
Average process time: 9.12 ms

Total process time: 898 ms  
Average process time: 8.98 ms

### RPC Alchemy

Total process time: 26336 ms  
Average process time: 263.36 ms
