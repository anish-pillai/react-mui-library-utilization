import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        underline when hover
      </Link>
      <Link href="#" color="secondary" underline="none">
        underline none
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          underline none with h6
        </Link>
      </Typography>
      <Link href="#" color="secondary" underline="none" variant="body2">
        variant body2
      </Link>
    </Stack>
  );
};

export default MuiLink;
