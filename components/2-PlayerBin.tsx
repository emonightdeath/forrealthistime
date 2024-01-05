import React, { useRef, useEffect } from "react";
import z from "zod";
import { Player, PlayerRef, CallbackListener } from "@remotion/player";
import { 
  Main1,
  Main2,
  Main3,
  Main4,
  Main5,
  Main6,
  Main7,
  Main8,
  Main9,
 } from "./5-MainClips";
import { 
  DURATION1,
  DURATION2,
  DURATION3,
  DURATION4,
  DURATION5,
  DURATION6,
  DURATION7,
  DURATION8,
  DURATION9,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH
} from "../types/constants"
import { CompositionProps } from "../types/constants";

const c1d: React.CSSProperties = {
  width: "90%",
  margin: "auto",
  boxShadow: "0px 0px 20px 10px #c3c3c3",
  borderRadius: 5,
};

const player: React.CSSProperties = {
  width: "100%",
};

export const PlayerBin: React.FC<{
  inputProps: z.infer<typeof CompositionProps>;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}> = ({ inputProps, setNum }) => { // - { text, setText, inputProps }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const playerRef1 = useRef<PlayerRef>(null);
  const playerRef2 = useRef<PlayerRef>(null);
  const playerRef3 = useRef<PlayerRef>(null);
  const playerRef4 = useRef<PlayerRef>(null);
  const playerRef5 = useRef<PlayerRef>(null);
  const playerRef6 = useRef<PlayerRef>(null);
  const playerRef7 = useRef<PlayerRef>(null);
  const playerRef8 = useRef<PlayerRef>(null);
  const playerRef9 = useRef<PlayerRef>(null);
  const playerRefIndex = [playerRef1, playerRef2, playerRef3, playerRef4, playerRef5, playerRef6, playerRef7, playerRef8, playerRef9]

  useEffect(() => {
    async function delayedEffect1() {
      await sleep(1000); 
      playerRefIndex[1].current?.play();
      playerRef2.current?.addEventListener("ended", onEnded2);
    }
    async function delayedEffect2() {
      await sleep(1000); 
      playerRefIndex[2].current?.play(); 
      playerRef3.current?.addEventListener("ended", onEnded3);
    }
    async function delayedEffect3() {
      await sleep(1000); 
      playerRefIndex[3].current?.play();
      playerRef4.current?.addEventListener("ended", onEnded4);
    }
    async function delayedEffect4() {
      await sleep(1000); 
      playerRefIndex[4].current?.play();
      playerRef5.current?.addEventListener("ended", onEnded5);
    }
    async function delayedEffect5() {
      await sleep(1000); 
      playerRefIndex[5].current?.play();
      playerRef6.current?.addEventListener("ended", onEnded6);
    }
    async function delayedEffect6() {
      await sleep(1000); 
      playerRefIndex[6].current?.play();
      playerRef7.current?.addEventListener("ended", onEnded7);
    }
    async function delayedEffect7() {
      await sleep(1000); 
      playerRefIndex[7].current?.play();
      playerRef8.current?.addEventListener("ended", onEnded8);
    }
    async function delayedEffect8() {
      await sleep(1000); 
      playerRefIndex[8].current?.play();
      playerRef9.current?.addEventListener("ended", onEnded9);
    }
    async function delayedEffect9() {
      await sleep(1000); 
      playerRefIndex[0].current?.play();
      playerRef1.current?.addEventListener("ended", onEnded1);
    }

    const onEnded1: CallbackListener<"ended"> = () => {setNum(2); delayedEffect1();};
    const onEnded2: CallbackListener<"ended"> = () => {setNum(3); delayedEffect2();};
    const onEnded3: CallbackListener<"ended"> = () => {setNum(4); delayedEffect3();};
    const onEnded4: CallbackListener<"ended"> = () => {setNum(5); delayedEffect4();};
    const onEnded5: CallbackListener<"ended"> = () => {setNum(6); delayedEffect5();};
    const onEnded6: CallbackListener<"ended"> = () => {setNum(7); delayedEffect6();};
    const onEnded7: CallbackListener<"ended"> = () => {setNum(8); delayedEffect7();};
    const onEnded8: CallbackListener<"ended"> = () => {setNum(9); delayedEffect8();};
    const onEnded9: CallbackListener<"ended"> = () => {setNum(1); delayedEffect9();};
    
    if(playerRef1.current) {playerRef1.current?.addEventListener("ended", onEnded1);} 
    if(playerRef2.current) {playerRef2.current?.addEventListener("ended", onEnded2);}
    if(playerRef3.current) {playerRef3.current?.addEventListener("ended", onEnded3);}
    if(playerRef4.current) {playerRef4.current?.addEventListener("ended", onEnded4);}
    if(playerRef5.current) {playerRef5.current?.addEventListener("ended", onEnded5);}
    if(playerRef6.current) {playerRef6.current?.addEventListener("ended", onEnded6);}
    if(playerRef7.current) {playerRef7.current?.addEventListener("ended", onEnded7);}
    if(playerRef8.current) {playerRef8.current?.addEventListener("ended", onEnded8);}
    if(playerRef9.current) {playerRef9.current?.addEventListener("ended", onEnded9);}
   
    return () => {
      playerRef1.current?.removeEventListener("ended", onEnded1);
      playerRef2.current?.removeEventListener("ended", onEnded2);
      playerRef3.current?.removeEventListener("ended", onEnded3);
      playerRef4.current?.removeEventListener("ended", onEnded4);
      playerRef5.current?.removeEventListener("ended", onEnded5);
      playerRef6.current?.removeEventListener("ended", onEnded6);
      playerRef7.current?.removeEventListener("ended", onEnded7);
      playerRef8.current?.removeEventListener("ended", onEnded8);
      playerRef9.current?.removeEventListener("ended", onEnded9);
    };
  }, [inputProps.clipIndex]);

  let componentToRender: JSX.Element
  componentToRender = <Player ref={playerRef1} component={Main1} inputProps={inputProps} durationInFrames={DURATION1} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      
  switch (inputProps.clipIndex) {
    case 1:
      componentToRender = <Player ref={playerRef1} component={Main1} inputProps={inputProps} durationInFrames={DURATION1} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 2:
      componentToRender = <Player ref={playerRef2} component={Main2} inputProps={inputProps} durationInFrames={DURATION2} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 3:
      componentToRender = <Player ref={playerRef3} component={Main3} inputProps={inputProps} durationInFrames={DURATION3} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 4:
      componentToRender = <Player ref={playerRef4} component={Main4} inputProps={inputProps} durationInFrames={DURATION4} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 5:
      componentToRender = <Player ref={playerRef5} component={Main5} inputProps={inputProps} durationInFrames={DURATION5} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 6:
      componentToRender = <Player ref={playerRef6} component={Main6} inputProps={inputProps} durationInFrames={DURATION6} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 7:
      componentToRender = <Player ref={playerRef7} component={Main7} inputProps={inputProps} durationInFrames={DURATION7} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 8:
      componentToRender = <Player ref={playerRef8} component={Main8} inputProps={inputProps} durationInFrames={DURATION8} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
    case 9:
      componentToRender = <Player ref={playerRef9} component={Main9} inputProps={inputProps} durationInFrames={DURATION9} fps={VIDEO_FPS} compositionHeight={VIDEO_HEIGHT} compositionWidth={VIDEO_WIDTH} style={player} controls/>
      break;
  }
      return (
        <div style={c1d}>
          {componentToRender}
        </div>
      );
};
