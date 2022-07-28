import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1 Heading</Typography>
      <Typography variant="subtitle2">subtitle2 Heading</Typography>

      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        laudantium suscipit quo, neque deleniti quibusdam minima fugiat ex
        maxime quae amet pariatur enim libero odio adipisci facere culpa, sunt
        eveniet?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        quidem. Quos, cumque molestias, id debitis dolorum perferendis iste
        maxime, quas pariatur tenetur architecto cupiditate error minima
        exercitationem voluptate doloribus sunt.
      </Typography>
    </div>
  );
};

export default MuiTypography;
