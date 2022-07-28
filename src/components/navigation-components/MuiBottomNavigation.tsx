import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <Stack spacing={2}>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 100,
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
        <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
      </BottomNavigation>

      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
        <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
      </BottomNavigation>
    </Stack>
  );
};

export default MuiBottomNavigation;
