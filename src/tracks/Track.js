import React, { Component } from 'react';
import {Consumer} from '../context';
import Spinner from '../components/Spinner';
import TrackList from './TrackList';
import {Typography, Grid } from '@material-ui/core';
import styles from './track.module.css';

export default class Track extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {track_list} = value;
                    const {heading} = value
                    console.log(value);
                    if(track_list===undefined || track_list.length === 0){
                        return <Spinner/>
                    }else{
                        return(
                            <React.Fragment>
                                <Typography variant="h5" style={{textAlign: 'center',fontWeight:'bold'}} >
                                {heading}
                                </Typography>
                                <div className={styles.container}>
                                <Grid container spacing={3} justify="center">
                                    {track_list.map(item => (
                                    <TrackList key={item.track.track_id} track={item.track}/>
                                    ))}
                                </Grid>
                                    
                                </div>
                                

                            </React.Fragment>
                        );
                    }
                    
                }
                }
            </Consumer>
        )
    }
}
