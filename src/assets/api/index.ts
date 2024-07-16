import axios from 'axios';
import { ApiResponse } from '../../types/api';
import { RoomItem } from '../../types/room';

const api = import.meta.env.VITE_API_LINK;

export const fetchRoomList = async (): Promise<ApiResponse<RoomItem[]>> => {
  try {
    const response = await axios.get<ApiResponse<RoomItem[]>>(`${api}/api/v1/rooms`);
    console.log('API Response:', response.data);  
    return response.data;
  } catch (error) {
    console.error('Error fetching room list:', error);
    throw error;
  }
};
