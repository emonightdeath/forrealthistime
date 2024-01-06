import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  scale1: z.number(),
  translateX1: z.number(),
  translateY1: z.number(),
  scale2: z.number(),
  translateX2: z.number(),
  translateY2: z.number(),
  clipIndex: z.number(),
  gOpacity: z.number(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  scale1: 1,
  translateX1: 200,//1050,
  translateY1: 0,//-3550,
  scale2: .4,
  translateX2: -900,//-78,
  translateY2: 2200,//-212,
  clipIndex: 1,
  gOpacity: 0,
};

export const DURATION_IN_FRAMES = 300;
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1440;
export const VIDEO_FPS = 30;

export const DURATION1 = 1170;
export const DURATION2 = 2910;
export const DURATION3 = 1590;
export const DURATION4 = 1170;
export const DURATION5 = 5490;
export const DURATION6 = 3090;
export const DURATION7 = 1890;
export const DURATION8 = 720;
export const DURATION9 = 450;
