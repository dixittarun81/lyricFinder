import React from 'react';
import styles from './track.module.css';
import {Card, CardContent,CardActions, Typography, Grid,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';



const TrackList = (props) => {
    const {track} = props;
    return(
        <Grid item component ={Card} xs={12} md={3} className={styles.card} >
        <CardContent>
            <Typography variant="h5" color="textSecondary" >Track: {track.track_name}</Typography>
            
            
            <Typography variant="h5">Album: {track.album_name}</Typography>
        </CardContent>
        <CardActions>
            <Button size="medium" color="primary">
                <Link to={`lyrics/track/${track.track_id}`}>
                    View Lyrics
                </Link>
            </Button>
        </CardActions>

        </Grid>
    )
}
export default TrackList;