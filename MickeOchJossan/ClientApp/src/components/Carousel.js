import React from "react";
import { Carousel } from "react-responsive-carousel";
const Carouselstyle = {
    backgroundColor: "white"
};
const imgcontainerstyle = {
    height: '400px',
    backgroundColor: "white",

};
const imgstyle = {
    height: '100%',
    width: 'auto',
};

export default () => (
    <Carousel autoPlay showThumbs={false} showIndicators={false} showStatus={false} style={Carouselstyle}>
        <div style={imgcontainerstyle} className="imageBackground2">
            <img style={imgstyle} src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/71253486_525056318250455_2380634989885652992_n.jpg?_nc_cat=109&_nc_oc=AQl6nzx_fGv-zMjDtb--Rtd9DMu6ZjDldaYqD-CjrU6CmlOxEMc45UZTNviDaTyLcZo&_nc_ht=scontent-arn2-1.xx&oh=d287e817561e4a74783224fb6aab091c&oe=5E318505" />
        </div>    

        <div style={imgcontainerstyle} className="imageBackground1">
            <img style={imgstyle} src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/71072965_2527861850568063_3611604953728024576_n.jpg?_nc_cat=108&_nc_oc=AQlDUY7g7nYLEuYIjscgECLK85IuQYafkQUSQHUVwrgt7cnvJvZM7G_fbimZ6Fg10tg&_nc_ht=scontent-arn2-1.xx&oh=be07c9302887ecf253c5ab4ef7ac91e2&oe=5E25565A"/>
        </div>
    </Carousel>
);
