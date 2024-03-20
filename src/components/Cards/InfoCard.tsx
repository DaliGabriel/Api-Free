import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

interface InfoCardProps {
  isLoading?: boolean;
  content?: React.ReactNode;
  imageUrl?: string;
  altImage?: string;
  error?: boolean;
  cardActionArea?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  isLoading,
  content,
  imageUrl,
  altImage,
  error,
  cardActionArea = true,
}) => {
  return (
    <>
      {error && (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={
                "https://lh3.googleusercontent.com/_mruGfyg4GvStbvd4jmO36feG6f_f9a1uleCaw5V0EurPd9iyTFFal6ypXEc5v6vXF_fFl-6AQDj9at442qvFBGQEoFh2OrMFIEL1Mnxaaea9kfqAwc=w1400-v0"
              }
              alt={altImage}
              style={{ height: "350px", objectFit: "contain" }}
            />

            <CardContent>
              <Typography variant="h5" textAlign={"center"}>
                Server error :(
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      {((isLoading && !error && !imageUrl) || !content) && (
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            height={350}
            width={345}
          />
        </>
      )}
      {(imageUrl || (content && !error && !isLoading)) && (
        <Card sx={{ maxWidth: 345 }}>
          {cardActionArea && (
            <CardActionArea>
              {imageUrl && (
                <CardMedia
                  component="img"
                  image={imageUrl}
                  alt={altImage}
                  style={{ height: "350px", objectFit: "contain" }}
                />
              )}
              <CardContent>{content}</CardContent>
            </CardActionArea>
          )}
          {!cardActionArea && (
            <>
              {imageUrl && (
                <CardMedia
                  component="img"
                  image={imageUrl}
                  alt={altImage}
                  style={{ height: "350px", objectFit: "contain" }}
                />
              )}
              <CardContent>{content}</CardContent>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default InfoCard;
