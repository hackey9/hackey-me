import React, {FC, PropsWithChildren} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";


type P = PropsWithChildren<{}>;

const MeetLayout: FC<P> = ({children}: P) => {

    return (
        <MeetLayoutElement>
            {children}
        </MeetLayoutElement>
    );
}
export default MeetLayout;


const MeetLayoutElement = styled(motion.div)`
  min-height: 100%;
  
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
MeetLayoutElement.displayName = "MeetLayoutElement";