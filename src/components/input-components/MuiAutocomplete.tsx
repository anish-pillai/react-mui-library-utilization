import { useState } from "react";

import { Autocomplete, Stack, TextField } from "@mui/material";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ value });
  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />

      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField {...params} label="Any Skill using freeSolo" />
        )}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />

      <Autocomplete
        options={skillOptions}
        renderInput={(params) => (
          <TextField {...params} label="Skill used as object" />
        )}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
