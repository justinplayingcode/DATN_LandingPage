import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./PostCard.scss"
import { useNavigate } from "react-router-dom";

interface PostCardProps {
    id?:string;
    image: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
}

export default function PostCard(props: PostCardProps) {
    const navigate = useNavigate();

    return (
        <Card sx={{minWidth: "400px", maxWidth: "45%", display: 'flex', flexDirection: 'column', marginBottom: "68px", justifyContent: "space-between"}}>
            <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }} onClick={() => navigate(`/news/${props.id}`)}>
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
                        Tác giả: {props.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Đăng ngày: {props.date}
                    </Typography>                
            </Box>
        </Card>
    );
}