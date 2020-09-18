import {motion} from "framer-motion";
import React, {FC} from "react";
import styled from "styled-components";


const AvatarImage: FC = () => {

    return (
        <AvatarImageElement/>
    );
}
export default AvatarImage;


const AvatarImageElement = styled(motion.div)`
  width: 100%;
  height: 100%;
  
  background-image: url("/static/images/ava.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-origin: content-box;
`;
AvatarImageElement.displayName = "AvatarImageElement";