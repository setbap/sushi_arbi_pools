import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/material/styles";
import { toChecksumAddress } from "web3-utils";
import { useMemo } from "react";
const useStyles = makeStyles((theme: any) => ({
  root: {
    marginRight: theme.spacing(2),
    // background: "transparent",
    color: theme.palette.text.secondary,
  },
}));

export default function TokenIcon({ id, ...rest }: { id: string }) {
  // @ts-ignore
  const classes = useStyles();
  const src = useMemo(
    () =>
      `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/${toChecksumAddress(
        id
      )}/logo.png`,
    [id]
  );
  return <Avatar classes={{ root: classes.root }} src={src} {...rest} />;
}
