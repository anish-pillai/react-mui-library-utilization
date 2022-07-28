import React, { useState } from "react";

import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ country });
  console.log({ countries });
  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  const handleChangeCountries = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChangeCountry}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChangeCountries}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
