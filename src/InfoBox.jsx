import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Minimum Temperature: {info.tempMin}&deg;C</p>
                        <p>Maximum Temperature: {info.tempMax}&deg;C</p>
                        <p>Feels like: {info.feelslike}&deg;C</p>
                        <p>Weather is {info.weather}</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}