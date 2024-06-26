import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"


export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1636369667845-863a64542cb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>)}
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
