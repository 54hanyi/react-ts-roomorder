import React from 'react';

interface IndexBarProps {
  currentIndex: number;
  totalCount: number;
  progressImages: string[]; // 進度條的圖片數組
}

const IndexBar: React.FC<IndexBarProps> = ({
  currentIndex,
  totalCount,
  progressImages,
}) => {
  const percentage = (currentIndex / (totalCount - 1)) * 100;

  return (
    <div className="relative w-full h-3">
      <div className="absolute w-full h-full">
        <img src={progressImages[0]} alt="進度條背景" className="w-full h-full" />
      </div>
      <div
        className="absolute h-full bg-no-repeat bg-contain"
        style={{
          width: `${percentage}%`,
          backgroundImage: `url(${progressImages[1]})`,
        }}
      />
    </div>
  );
};

export default IndexBar;
