import { NavigateFunction } from 'react-router-dom';
// 延遲載入
const waitNavigate = (navigate: NavigateFunction, path: string, time: number) => {
  setTimeout(() => {
    navigate(path);
  }, time);
};

export default waitNavigate;
