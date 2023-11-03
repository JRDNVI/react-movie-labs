import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext)

    return (
        <IconButton aria-label="Add to playlist">
            <PlaylistAdd color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToPlaylistIcon;