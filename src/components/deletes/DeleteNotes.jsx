
import { useContext } from "react";

import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

//components

import DeleteNote from "./DeleteNote";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {deletedNotes.map((deleteNote) => (
            <Grid item>
              <DeleteNote note={deleteNote} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;
