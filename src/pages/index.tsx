import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppHeader from "../components/layout/AppHeader";
import { Toolbar } from "@mui/material";
import Pools from "../../public/arbi.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export interface Token0 {
  id: string;
  name: string;
  symbol: string;
  decimals: string;
  totalSupply: string;
  derivedETH: string;
}

export interface Token1 {
  id: string;
  name: string;
  symbol: string;
  decimals: string;
  totalSupply: string;
  derivedETH: string;
}

export interface Pair {
  token0: Token0;
  token1: Token1;
  id: string;
}

export interface PoolsModel {
  pair: Pair;
  liquidity: string;
  liquidity1d: string;
  liquidity1dChange: number;
  liquidity1dChangePercent?: number;
  volume1d: number;
  volume1dChange: number;
  volume1dChangePercent?: number;
  volume1w: number;
  fees1d: number;
  fees1w: number;
  utilisation1d?: number;
  utilisation2d?: number;
  utilisation1dChange?: number;
  tx1d: number;
  tx2d: number;
  tx1dChange?: number;
  apy: string;
}

const columns = [
  {
    field: "poolName",
    headerName: "Pool Name",
    description: "name of Pool.",
    sortable: false,
    width: 140,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token0.symbol || ""}/${
        params.row.pair.token0.symbol || ""
      }`,
  },
  {
    field: "pair.id",

    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.id || ""}`,
    headerName: "Pool Address",
    width: 160,
    sortable: true,
  },
  {
    field: "pair.1.name",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token0.name || ""}`,
    headerName: "Token 1",
    width: 130,
  },
  {
    field: "pair.1.address",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token0.id || ""}`,
    headerName: "Token 1 Address",
    width: 160,
  },
  {
    field: "pair.1.decimal",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token0.decimals || ""}`,
    headerName: "Token 1 Decimal",
    width: 100,
    sortable: true,
  },
  {
    field: "pair.2.name",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token1.name || ""}`,
    headerName: "Token 2",
    width: 130,
    sortable: true,
  },
  {
    field: "pair.2.address",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token1.id || ""}`,
    headerName: "Token 2 Address",
    width: 120,
  },
  {
    field: "pair.2.decimal",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pair.token1.decimals || ""}`,
    headerName: "Token 2 Decimal",
    width: 100,
    sortable: true,
  },
  { field: "apy", headerName: "APY", width: 70, sortable: true },
];

export default function Index(props: any) {
  const pools = Pools;
  return (
    <>
      <AppHeader />
      <Toolbar />

      <Container maxWidth="lg">
        <Box pt={"2rem"} sx={{ height: "calc(100vh - 120px)", width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={pools}
            getRowId={(row: PoolsModel) => row.pair.id}
          />
        </Box>
      </Container>
    </>
  );
}
export async function getStaticProps() {
  console.log("----------------");

  console.log("----------------");

  return {
    props: {},
  };
}
