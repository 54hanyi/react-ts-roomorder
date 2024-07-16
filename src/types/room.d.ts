type RoomInfoItem = {
  title: string;
  isProvide: boolean;
};

export type RoomItem = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  layoutInfo: RoomInfoItem[];
  facilityInfo: RoomInfoItem[];
  amenityInfo: RoomInfoItem[];
  status: number;
  createdAt?: string;
  updatedAt?: string;
};