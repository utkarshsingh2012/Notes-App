import { useContext } from "react";

import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import {UnarchiveOutlined as Unarchive, DeleteOutlined as Delete, Note} from "@mui/icons-material"

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`

const Archive = ({archive}) => {


  const { archiveNotes, setNotes, setArchiveNotes, setDeletedNotes} = useContext(DataContext);
  


  const unArchiveNote = (archive) => {
    const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
    setNotes(updatedNotes);
    setArchiveNotes( preArr => [Note, ...preArr]);
  }

  const deleteNote = (archive) => {
    const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
    setNotes(updatedNotes);
    setDeletedNotes( preArr => [ archive , ...preArr]);
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive 
          fontSize="small"
          style={{ marginLeft: 'auto'}}
          onClick = {() => unArchiveNote(archive)}
        />
        <Delete 
          fontSize="small"
          onClick = {() => deleteNote(archive)}
        />
      </CardActions>
    </StyledCard>
  )
}

export default Archive
