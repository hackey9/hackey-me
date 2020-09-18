import {AnimationControls, motion, useAnimation} from "framer-motion";
import React, {FC, PropsWithChildren, ReactNode, useEffect} from "react";
import styled from "styled-components";


type P = PropsWithChildren<{ loading?: boolean, image?: ReactNode }>;

const AvatarCircle: FC<P> = ({loading, image}: P) => {

    const gray = useAnimation();
    const green = useAnimation();
    const img = useAnimation();

    useEffect(() => {

        if (loading) {

            const loadingAnimation = async () => {
                gray.set({
                    opacity: 0,
                });

                green.set({
                    opacity: 0,
                });

                img.set({
                    opacity: 0,
                });

                await gray.start({
                    opacity: 1,
                    r: 260 / 2,
                    strokeWidth: 9,
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                    },
                });

                await gray.start({
                    r: [null, 180 / 2],
                    strokeWidth: [null, 6],
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    },
                });
            };

            loadingAnimation().then();

        } else {


            const loadAnimation = async () => {

                green.set({
                    rotate: -90,
                    offset: 0,
                    opacity: 0,
                    stroke: "#cccccc",
                });

                img.set({
                    opacity: 0,
                });

                await gray.start({
                    r: 180 / 2,
                    strokeWidth: 6,
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                    }
                });

                await green.start({
                    opacity: 1,
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "linear",
                    },
                });

                await green.start({
                    strokeDashoffset: 0,
                    stroke: "#3FE381",
                    transition: {
                        type: "tween",
                        duration: 1.4,
                        ease: "easeOut",
                    }
                });

                await img.start({
                    opacity: 1,
                    transition: {
                        type: "tween",
                        duration: 0.4,
                        ease: "linear",
                    }
                });

            };

            loadAnimation().then();

        }

    }, [gray, green, img, loading]);

    return (
        <AvatarArea>
            <ImageArea controls={img}>{image}</ImageArea>
            <Svg>
                <GrayCircle controls={gray}/>
                <GreenCircle controls={green}/>
            </Svg>
        </AvatarArea>
    );
}
export default AvatarCircle;


const AvatarArea = styled(motion.div).attrs({
    layout: true,
    layoutId: "avatar-area",
})`
  width: 180px;
  height: 180px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  > * { 
    position: absolute;
  }
`;
AvatarArea.displayName = "AvatarArea";


const Svg = styled(motion.svg).attrs({
    layout: true,
    layoutId: "avatar-svg",
    width: 300,
    height: 300,
    viewBox: "0 0 300 300",
})`
  
`;
Svg.displayName = "Svg";


type WithControls = { controls: AnimationControls };

const GrayCircle = styled(motion.circle).attrs<WithControls>(p => ({
    layout: true,
    layoutId: "avatar-gray-circle",
    animate: p.controls,
    cx: 150,
    cy: 150,
    r: 0,
    stroke: "rgba(255,255,255,0.15)",
    strokeWidth: 6,
    fill: "none",
}))<WithControls>``;
GrayCircle.displayName = "GrayCircle";


const GreenCircle = styled(motion.circle).attrs<WithControls>(p => ({
    layout: true,
    layoutId: "avatar-green-circle",
    animate: p.controls,
    cx: 150,
    cy: 150,
    r: 180 / 2,
    stroke: "#3FE381",
    strokeWidth: 6,
    strokeLinecap: "round",
    strokeDasharray: Math.PI * 180,
    strokeDashoffset: Math.PI * 180 - 0.1,
    fill: "none",
}))<WithControls>``;
GreenCircle.displayName = "GreenCircle";


const ImageArea = styled(motion.div).attrs<WithControls>(p => ({
    layout: true,
    layoutId: "avatar-image-area",
    animate: p.controls,
}))<WithControls>`
  width: 150px;
  height: 150px;
  opacity: 1;
`;
ImageArea.displayName = "ImageArea";