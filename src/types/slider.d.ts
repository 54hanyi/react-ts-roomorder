export interface SliderItemType {
  title: string;
  description: string;
  diningTime: string;
  imgId: number;
}

export interface SliderItemProps {
  Item: SliderItemType;
  imgData: ImageItem;
}

export interface SliderListProps {
  sliderList: SliderItemType[];
  sliderImgList: ImageItem[];
}