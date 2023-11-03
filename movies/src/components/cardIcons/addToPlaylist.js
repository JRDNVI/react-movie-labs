import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToPlaylist = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
    };

    return (
        <IconButton aria-label="Add to playlist" onClick={handleAddToPlaylist}>
            <PlaylistAdd color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToPlaylistIcon;