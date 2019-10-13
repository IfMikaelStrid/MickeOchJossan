import React from "react";
import { Carousel } from "react-responsive-carousel";
const Carouselstyle = {
    backgroundColor: "white"
};
const imgcontainerstyle = {
    height: '100%',
    maxHeight: "600px",
    backgroundColor: "white",
};
const imgstyle = {
    height: '100%',
    // width: 'auto',
};

export default () => (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} >
        <div className="imageBackground2 imageCrop">
            <img className="polaroidImage" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/71253486_525056318250455_2380634989885652992_n.jpg?_nc_cat=109&_nc_oc=AQl6nzx_fGv-zMjDtb--Rtd9DMu6ZjDldaYqD-CjrU6CmlOxEMc45UZTNviDaTyLcZo&_nc_ht=scontent-arn2-1.xx&oh=d287e817561e4a74783224fb6aab091c&oe=5E318505" />
        </div>
        <div className="imageBackground1 imageCrop">
            <img className="polaroidImage" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/71072965_2527861850568063_3611604953728024576_n.jpg?_nc_cat=108&_nc_oc=AQlDUY7g7nYLEuYIjscgECLK85IuQYafkQUSQHUVwrgt7cnvJvZM7G_fbimZ6Fg10tg&_nc_ht=scontent-arn2-1.xx&oh=be07c9302887ecf253c5ab4ef7ac91e2&oe=5E25565A"/>
        </div>
        <div className="imageBackground1 imageCrop">
            <img className="polaroidImage" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/70976773_510208403113420_6903728043588583424_n.jpg?_nc_cat=101&_nc_oc=AQmTV_wXDbylaNo6Ma2yHCMBNrFFyswgiRT9f4ydSOM3EWutoJZLwUDtchtwjTTiVgg&_nc_ht=scontent-arn2-1.xx&oh=e326614d83f5863aa914c0d142624d3d&oe=5E224D7E" />
        </div>
        <div className="imageBackground1 imageCrop">
            <img className="polaroidImage" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/71867913_727943760964937_1309515638556852224_n.jpg?_nc_cat=106&_nc_oc=AQn49CG1vseu_96vtoM8JFwcuDh7V1k7FnB8vjfoKp0wmXJjs0Jhohz5uUICC-lJktE&_nc_ht=scontent-arn2-1.xx&oh=64d9f217123e1388fcb1ab928abe5e8e&oe=5E1A4676" />
        </div>
    </Carousel>
);
/*
<div className="imageBackground1 imageCrop">
    <img className="polaroidImage" src="" />
</div>
 */