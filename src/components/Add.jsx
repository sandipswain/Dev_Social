import React, { useState } from "react";
import { makeStyles, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 10,
  },
}));
export const Add = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};
