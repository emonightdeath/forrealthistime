import { z } from "zod";
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  useCurrentFrame,
  staticFile,
  interpolate,
} from "remotion";
import { CompositionProps } from "../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import { Greenscreen } from "./7-Greenscreen";

loadFont();

// Introduction
export const Main1 = ({ 
  scale1,
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity,
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>
        <AbsoluteFill style={{
          backgroundColor: "white",
          opacity: opacity,
        }}>
          <div style={{
            margin: "auto",
            fontSize: 100,
            color: "black",
          }}>
            <p>Welcome!</p>
            <p>Press Play or 'Spacebar'</p>
          </div>
        </AbsoluteFill>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={1080}>
        <Greenscreen opacity={gOpacity} file={"v1.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
      
    </AbsoluteFill>
  );
};

// Problem Solver
export const Main2 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )
  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

        <AbsoluteFill style={{
          backgroundColor: "white",
          opacity: opacity,
        }}>
          <div style={{
            margin: "auto",
            fontSize: 100,
            color: "black",
          }}>
            My Background
          </div>
        </AbsoluteFill>

        
      <Sequence from={0} durationInFrames={940}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          opacity: slowIn,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-abt1.png"}/>
        </div>
      </Sequence>
      <Sequence from={940} durationInFrames={940}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-abt2.png"}/>
        </div>
      </Sequence>
      <Sequence from={1880} durationInFrames={940}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-abt3.png"}/>
        </div>
      </Sequence>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={2920}>
        <Greenscreen opacity={gOpacity} file={"v2.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

// Entreprenuership
export const Main3 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

        <AbsoluteFill style={{
          backgroundColor: "white",
          opacity: opacity,
        }}>
          <div style={{
            margin: "auto",
            fontSize: 100,
            color: "black",
          }}>
            How to Save the World
          </div>
        </AbsoluteFill>

      <Sequence from={0} durationInFrames={375}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
          opacity: slowIn,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-mm1.png"}/>
        </div>
      </Sequence>

      <Sequence from={375} durationInFrames={375}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-mm2.png"}/>
        </div>
      </Sequence>

      <Sequence from={750} durationInFrames={375}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-mm3.png"}/>
        </div>
      </Sequence>

      <Sequence from={1125} durationInFrames={375}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-mm4.png"}/>
        </div>
      </Sequence>
      
      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={1500}>
        <Greenscreen opacity={gOpacity} file={"v3.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

//Why Philanthropy?
export const Main4 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

      <AbsoluteFill style={{
        backgroundColor: "white",
        opacity: opacity,
      }}>
        <div style={{
          margin: "auto",
          fontSize: 100,
          color: "black",
        }}>
          Why Philanthropy?
        </div>
      </AbsoluteFill>

      <Sequence from={0} durationInFrames={360}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
          opacity: slowIn,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-philo1.png"}/>
        </div>
      </Sequence>
      <Sequence from={360} durationInFrames={360}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-philo2.png"}/>
        </div>
      </Sequence>
      <Sequence from={720} durationInFrames={360}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-philo3.png"}/>
        </div>
      </Sequence>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={1080}>
        <Greenscreen opacity={gOpacity} file={"v4.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

//Online System Administration
export const Main5 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity  
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

      <AbsoluteFill style={{
        backgroundColor: "white",
        opacity: opacity,
      }}>
        <div style={{
          margin: "auto",
          fontSize: 100,
          color: "black",
        }}>
          Integrated Systems are Happy Systems
        </div>
      </AbsoluteFill>

      <Sequence from={0} durationInFrames={1350}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
          opacity: slowIn,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-sysadmin1.png"}/>
        </div>
      </Sequence>
      <Sequence from={1350} durationInFrames={1350}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-sysadmin3.png"}/>
        </div>
      </Sequence>
      <Sequence from={2700} durationInFrames={1350}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-sysadmin2.png"}/>
        </div>
      </Sequence>
      <Sequence from={4050} durationInFrames={1350}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-sysadmin4.png"}/>
        </div>
      </Sequence>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={5400}>
        <Greenscreen opacity={gOpacity} file={"v5.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

//KPI Finances Dashboard - video 6, currently 3000 frames, 4 pictures, 750 each
export const Main6 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

      <AbsoluteFill style={{
        backgroundColor: "white",
        opacity: opacity,
      }}>
        <div style={{
          margin: "auto",
          fontSize: 100,
          color: "black",
        }}>
          Dashboards for Data
        </div>
      </AbsoluteFill>

      <Sequence from={0} durationInFrames={750}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
          opacity: slowIn,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-kf1.png"}/>
        </div>
      </Sequence>

      <Sequence from={750} durationInFrames={750}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-kf2.png"}/>
        </div>
      </Sequence>

      <Sequence from={1500} durationInFrames={750}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-kf3.png"}/>
        </div>
      </Sequence>

      <Sequence from={2250} durationInFrames={750}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-kf4.png"}/>
        </div>
      </Sequence>
      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={3000}>
        <Greenscreen opacity={gOpacity} file={"v6.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

//Programmatic Video Content
export const Main7 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

        <AbsoluteFill style={{
          backgroundColor: "white",
          opacity: opacity,
        }}>
          <div style={{
            margin: "auto",
            fontSize: 100,
            color: "black",
          }}>
            How This Video Was Made
          </div>
        </AbsoluteFill>

      <Sequence>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
          opacity: slowIn,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-remo1.png"}/>
        </div>
      </Sequence>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={1800}>
        <Greenscreen opacity={gOpacity} file={"v7.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

//Value to your organization
export const Main8 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const slowIn = interpolate(
    frame,
    [0,120,150],
    [0,0,1],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

        <AbsoluteFill style={{
          backgroundColor: "white",
          opacity: opacity,
        }}>
          <div style={{
            margin: "auto",
            fontSize: 100,
            color: "black",
            justifyContent: "center",
          }}>
            Fitting Well in Your Organization
          </div>
        </AbsoluteFill>

      <Sequence from={0} durationInFrames={315}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
          opacity: slowIn,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-why1.png"}/>
        </div>
      </Sequence>
      <Sequence from={315} durationInFrames={315}>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
          boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.75)",
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-why2.png"}/>
        </div>
      </Sequence>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={1080}>
        <Greenscreen opacity={gOpacity} file={"v8.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};

//Contact Me
export const Main9 = ({ 
  scale1, 
  translateX1, 
  translateY1, 
  scale2, 
  translateX2, 
  translateY2, 
  clipIndex,
  gOpacity 
}: z.infer<typeof CompositionProps>) => {
  
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0,60,90],
    [1,1,0],
  )

  const volumeDown = interpolate(
    frame,
    [0,90],
    [1,.05],
    {
      extrapolateRight: "clamp",
    }
    
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "rgb(91,9,121)",
      background: "linear-gradient(344deg, rgba(91,9,121,1) 0%, rgba(0,149,255,1) 100%)",
      }}>

      <AbsoluteFill style={{
        backgroundColor: "white",
        opacity: opacity,
      }}>
        <div style={{
          margin: "auto",
          fontSize: 100,
          color: "black",
        }}>
          Thank you again!
        </div>
      </AbsoluteFill>
        
      <Sequence>
        <div style={{
          transform: `scale(${scale1}) translateX(${translateX1}px) translateY(${translateY1}px)`,
        }}>
          <Img src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/img-contact1.png"}/>
        </div>
      </Sequence>

      <div style={{
        //padding: "100px",
        transform: `scale(${scale2}) translateX(${translateX2}px) translateY(${translateY2}px)`,
      }}>
        <Sequence from={90} durationInFrames={1080}>
        <Greenscreen opacity={gOpacity} file={"v9.mp4"}></Greenscreen>
        {/* <Video src={staticFile("v1.mp4")}/> */}
        </Sequence>
      </div>

      <Audio src={"https://cloud-object-storage-cos-standard-4e2.s3.us-east.cloud-object-storage.appdomain.cloud/music.mp3"} volume={volumeDown}/>
    </AbsoluteFill>
  );
};
