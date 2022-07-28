import React, { useState } from "react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";

const MuiCheckbox = () => {
  const [value, setValue] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ value });
  console.log({ skills });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={value}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              value="js"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
