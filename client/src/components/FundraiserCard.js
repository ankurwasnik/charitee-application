import React, {useState, useEffect} from "react";
import { CardMedia,CardContent,CardActions,Button,Typography,Card } from "@mui/material";
/*
 name={e.name} 
 url={e.url}
 imageUrl={e.imageUrl}
 description={e.description}
 beneficiary={e.beneficiary}
*/
const FundraiserCard = (props)=>{
    useEffect(()=>{

    },[]);

    return(
        <div>
            <Card sx={{ maxWidth: 345 , m:2}}>
                <CardMedia
                    component="img"
                    alt={props.description}
                    height="100"
                    image={props.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Website: {props.url}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Beneficiary: {props.beneficiary}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Donate</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
    </div>
    );
}

export default FundraiserCard;