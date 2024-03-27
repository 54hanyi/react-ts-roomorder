export type RoomItem = {
  title: string;
  content: string;
  price: string;
  imgListName: string;
  size: number;
  bed: number;
  people: number;
};

export const roomList: RoomItem[] = [
  {
    title: "尊爵單人房",
    content:
      "享受高級的住宿體驗，尊爵單人房提供給您舒適寬敞的空間和精緻的裝潢。",
    price: "NT$ 8,000",
    imgListName: "room2",
    size: 20,
    bed: 1,
    people: 1,
  },
  {
    title: "尊爵雙人房",
    content:
      "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
    price: "NT$ 10,000",
    imgListName: "room2",
    size: 24,
    bed: 1,
    people: 2,
  },
  {
    title: "景觀雙人房",
    content: "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
    price: "NT$ 11,000",
    imgListName: "room3",
    size: 26,
    bed: 1,
    people: 2,
  },
  {
    title: "豪華雅緻房",
    content:
      "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
    price: "NT$ 12,000",
    imgListName: "room4",
    size: 28,
    bed: 1,
    people: 4,
  },
  {
    title: "景觀尊榮家庭房",
    content:
      "景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。",
    price: "NT$ 15,000",
    imgListName: "room5",
    size: 32,
    bed: 3,
    people: 6,
  },
];
