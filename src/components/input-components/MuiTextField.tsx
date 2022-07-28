import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/*  outlined is default variant*/}
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type="password"
          InputProps={{
            endAdornment: <VisibilityIcon />,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
