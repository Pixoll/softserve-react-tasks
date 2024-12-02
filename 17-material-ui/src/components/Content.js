import FavoriteIcon from "@mui/icons-material/Favorite";
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { itemData } from "./data";

export default function Content() {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("md"));
    const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const columnCount = isLarge ? 3 : isMedium ? 2 : 1;

    return (
        <ImageList cols={columnCount} style={{ columnCount }}>
            {itemData.map((item, index) =>
                <ImageListItem key={index}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/${item.img}`}
                        alt={item.title}
                    />
                    <ImageListItemBar
                        title={item.title}
                        actionIcon={<FavoriteIcon/>}
                    />
                </ImageListItem>
            )}
        </ImageList>
    );
};
