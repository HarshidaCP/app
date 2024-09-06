import { useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

const pokemon = () => {
    const [poke, setPoke] = useState([]);
    axios.get('https://dummyapi.online/api/pokemon').then((res) => {
        setPoke(res.data)
        console.log(res.data)
    })
    return (
        <div>

            <Grid container spacing={2}>
                {
                    poke.map((val) => {
                        return (
                            <Grid item xs={8}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="pokemon img"
                                        height="140"
                                        image={val.image_url}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.pokemon}
                                        </Typography>
                                        <div>
                                            <Typography
                                                gutterBottom
                                                variant='h6'
                                                component="p"
                                                sx={{ color: "text.secondary" }}
                                            ></Typography>
                                        </div>
                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default pokemon