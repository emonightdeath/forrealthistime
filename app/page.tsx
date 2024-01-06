"use client";

//import { PageRow } from "../components/1-PageRow";
import { PlayerBin }  from "../components/2-PlayerBin";
import { OutlineBin } from "../components/3-OutlineBin";
import { ControlBin } from "../components/4-ControlBin";


import useWindowDimensions from "../components/6-WindowDims";

import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";

const container: React.CSSProperties = {
  maxWidth: 768,
  margin: "auto",
  marginBottom: 20,
};

const b1: React.CSSProperties = {
  width: 540,
  color: "white",
};

const b2: React.CSSProperties = {
  width: 270,
  color: "white",
};

const b3: React.CSSProperties = {
  width: 300,
  color: "white",
};

const Home: NextPage = () => {
  const [scale1_l2, setNum1] = useState<number>(defaultMyCompProps.scale1);
  const [translateX1_l2, setNum2] = useState<number>(defaultMyCompProps.translateX1);
  const [translateY1_l2, setNum3] = useState<number>(defaultMyCompProps.translateY1);
  const [scale2_l2, setNum4] = useState<number>(defaultMyCompProps.scale2);
  const [translateX2_l2, setNum5] = useState<number>(defaultMyCompProps.translateX2);
  const [translateY2_l2, setNum6] = useState<number>(defaultMyCompProps.translateY2);
  const [clipIndex_l2, setNum7] = useState<number>(defaultMyCompProps.clipIndex);
  const [gOpacity_l2, setNum8] = useState<number>(defaultMyCompProps.gOpacity);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      scale1: scale1_l2,
      translateX1: translateX1_l2,
      translateY1: translateY1_l2,
      scale2: scale2_l2,
      translateX2: translateX2_l2,
      translateY2: translateY2_l2,
      clipIndex: clipIndex_l2,
      gOpacity: gOpacity_l2,
    };
  }, [
    scale1_l2, 
    translateX1_l2, 
    translateY1_l2,
    scale2_l2, 
    translateX2_l2, 
    translateY2_l2,
    clipIndex_l2,
    gOpacity_l2,
  ]);

  return (
    <div> 

        <table style={{
          margin: "auto",
        }}>
            <tbody>
              <tr style={{
                height: useWindowDimensions().height,
              }}>

                <td style={b1}> {/* Column 1 - Player */}
                    <PlayerBin setNum={setNum7} inputProps={inputProps}></PlayerBin>
                </td>

                <td style={b2}> {/* Column 2 - Outline of Clips */}
                    <OutlineBin clipIndex={clipIndex_l2} setNum={setNum7}></OutlineBin>
                </td>

                <td style={b3}> {/* Column 3 - Controls for Player */}
                  {/* GREAT ORGANIZATION - THIS IS WHERE A PROBLEM IS */}
                  <ControlBin inputProps={inputProps} setNum1={setNum1} setNum2={setNum2} setNum3={setNum3} setNum4={setNum4} setNum5={setNum5} setNum6={setNum6} setNum8={setNum8}></ControlBin>
                </td>

              </tr>
            </tbody>
        </table>
    </div>
  );
};

export default Home;
