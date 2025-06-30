// room2
import room2_1_web from "@/assets/images/web/room2-1.webp";
import room2_1_mobile from "@/assets/images/mobile/room2-1.webp";
import room2_2_web from "@/assets/images/web/room2-2.webp";
import room2_2_mobile from "@/assets/images/mobile/room2-2.webp";
import room2_3_web from "@/assets/images/web/room2-3.webp";
import room2_3_mobile from "@/assets/images/mobile/room2-3.webp";
import room2_4_web from "@/assets/images/web/room2-4.webp";
import room2_4_mobile from "@/assets/images/mobile/room2-4.webp";
import room2_5_web from "@/assets/images/web/room2-5.webp";
import room2_5_mobile from "@/assets/images/mobile/room2-5.webp";

// room3
import room3_1_web from "@/assets/images/web/room3-1.webp";
import room3_1_mobile from "@/assets/images/mobile/room3-1.webp";
import room3_2_web from "@/assets/images/web/room3-2.webp";
import room3_2_mobile from "@/assets/images/mobile/room3-2.webp";
import room3_3_web from "@/assets/images/web/room3-3.webp";
import room3_3_mobile from "@/assets/images/mobile/room3-3.webp";
import room3_4_web from "@/assets/images/web/room3-4.webp";
import room3_4_mobile from "@/assets/images/mobile/room3-4.webp";
import room3_5_web from "@/assets/images/web/room3-5.webp";
import room3_5_mobile from "@/assets/images/mobile/room3-5.webp";

// room4
import room4_1_web from "@/assets/images/web/room4-1.webp";
import room4_1_mobile from "@/assets/images/mobile/room4-1.webp";
import room4_2_web from "@/assets/images/web/room4-2.webp";
import room4_2_mobile from "@/assets/images/mobile/room4-2.webp";
import room4_3_web from "@/assets/images/web/room4-3.webp";
import room4_3_mobile from "@/assets/images/mobile/room4-3.webp";
import room4_4_web from "@/assets/images/web/room4-4.webp";
import room4_4_mobile from "@/assets/images/mobile/room4-4.webp";
import room4_5_web from "@/assets/images/web/room4-5.webp";
import room4_5_mobile from "@/assets/images/mobile/room4-5.webp";

// room5
import room5_1_web from "@/assets/images/web/room5-1.webp";
import room5_1_mobile from "@/assets/images/mobile/room5-1.webp";
import room5_2_web from "@/assets/images/web/room5-2.webp";
import room5_2_mobile from "@/assets/images/mobile/room5-2.webp";
import room5_3_web from "@/assets/images/web/room5-3.webp";
import room5_3_mobile from "@/assets/images/mobile/room5-3.webp";
import room5_4_web from "@/assets/images/web/room5-4.webp";
import room5_4_mobile from "@/assets/images/mobile/room5-4.webp";
import room5_5_web from "@/assets/images/web/room5-5.webp";
import room5_5_mobile from "@/assets/images/mobile/room5-5.webp";

import { ImageItem } from "../types/image";

type ImageList = {
  [k: string]: ImageItem[];
};

export const room2: ImageItem[] = [
  { web: room2_1_web, mobile: room2_1_mobile },
  { web: room2_2_web, mobile: room2_2_mobile },
  { web: room2_3_web, mobile: room2_3_mobile },
  { web: room2_4_web, mobile: room2_4_mobile },
  { web: room2_5_web, mobile: room2_5_mobile },
];

export const room3: ImageItem[] = [
  { web: room3_1_web, mobile: room3_1_mobile },
  { web: room3_2_web, mobile: room3_2_mobile },
  { web: room3_3_web, mobile: room3_3_mobile },
  { web: room3_4_web, mobile: room3_4_mobile },
  { web: room3_5_web, mobile: room3_5_mobile },
];

export const room4: ImageItem[] = [
  { web: room4_1_web, mobile: room4_1_mobile },
  { web: room4_2_web, mobile: room4_2_mobile },
  { web: room4_3_web, mobile: room4_3_mobile },
  { web: room4_4_web, mobile: room4_4_mobile },
  { web: room4_5_web, mobile: room4_5_mobile },
];

export const room5: ImageItem[] = [
  { web: room5_1_web, mobile: room5_1_mobile },
  { web: room5_2_web, mobile: room5_2_mobile },
  { web: room5_3_web, mobile: room5_3_mobile },
  { web: room5_4_web, mobile: room5_4_mobile },
  { web: room5_5_web, mobile: room5_5_mobile },
];
export const roomImgList: ImageList = {
  room2,
  room3,
  room4,
  room5,
};
