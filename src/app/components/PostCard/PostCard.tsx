import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./PostCard.scss"

interface PostCardProps {
    image: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
}

export default function PostCard(props: PostCardProps) {

    return (
        <Card sx={{minWidth: "400px", maxWidth: "30%", display: 'flex', flexDirection: 'column', marginBottom: "68px" }}>
            <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150 }}
                    image={props.image}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600}}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.subtitle}
                    </Typography>
                </CardContent>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: "20px"}}>
                    <Typography variant="body2" color="text.secondary" sx={{maxWidth: "calc(100% - 150px"}}>
                        {props.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Đăng ngày: {props.date}
                    </Typography>                
            </Box>
        </Card>
    );
}