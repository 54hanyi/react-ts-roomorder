import { NavigateFunction } from 'react-router-dom';

const waitNavigate = (navigate: NavigateFunction, path: string, time: number) => {
  setTimeout(() => {
    navigate(path);
  }, time);
};

export default waitNavigate;
