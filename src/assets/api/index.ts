import { 
  ApiResponse, 
  CheckResponse, 
  FoodTypeSchema, 
  NewsSchema, 
  IOrder, 
  IRoom, 
  MemberRegisterData, 
  VerifyEmailData, 
  ForgotPwdData, 
  MemberUpdateDetailData, 
  MemberUpdatePwdData, 
  Order, 
  OrderPostData, 
  UserLoginData, 
  UserResponse 
} from '@/types';
import { get, post, put, del, handleApiResponse } from '@/utils';

const api = import.meta.env.VITE_API_LINK;

const config = (token?: string) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});

// 使用者 API
export const checkLoginStatus = async (): Promise<CheckResponse> => {
  const response = await get<CheckResponse>(`${api}/api/v1/user/check`, { withCredentials: true });
  return handleApiResponse(response);
};

export const getUser = async (token: string): Promise<UserResponse> => {
  const res = await get<UserResponse>(`${api}/api/v1/user`, config(token));
  return handleApiResponse(res);
};

export const updateUserDetail = async (data: MemberUpdateDetailData, token: string): Promise<ApiResponse<null>> => {
  const res = await put<ApiResponse<null>, MemberUpdateDetailData>(`${api}/api/v1/user/`, data, config(token));
  return handleApiResponse(res);
};

export const updateUserPwd = async (data: MemberUpdatePwdData, token: string): Promise<ApiResponse<null>> => {
  const res = await put<ApiResponse<null>, MemberUpdatePwdData>(`${api}/api/v1/user/`, data, config(token));
  return handleApiResponse(res);
};

export const getOrders = async (id: string | undefined, token: string): Promise<ApiResponse<IOrder[] | IOrder | null>> => {
  const res = await get<ApiResponse<IOrder[] | IOrder>>(`${api}/api/v1/orders/${id ?? ''}`, config(token));
  return handleApiResponse(res);
};

export const deleteOrder = async (id: string | undefined, token: string): Promise<ApiResponse<IOrder | null>> => {
  const res = await del<ApiResponse<IOrder | null>>(`${api}/api/v1/orders/${id}`, config(token));
  return handleApiResponse(res);
};

export const userLogin = async (data: UserLoginData): Promise<UserResponse> => {
  const res = await post<UserResponse, UserLoginData>(`${api}/api/v1/user/login`, data);
  return handleApiResponse(res);
};

export const userRegister = async (data: MemberRegisterData): Promise<UserResponse> => {
  const res = await post<UserResponse, MemberRegisterData>(`${api}/api/v1/user/signup`, data);
  return handleApiResponse(res);
};

export const apiPostGenerateEmailCode = async (data: VerifyEmailData): Promise<ApiResponse<null>> => {
  const res = await post<ApiResponse<null>, VerifyEmailData>(`${api}/api/v1/verify/generateEmailCode`, data);
  return handleApiResponse(res);
};

export const apiPostForgot = async (data: ForgotPwdData): Promise<ApiResponse<null>> => {
  const res = await post<ApiResponse<null>, ForgotPwdData>(`${api}/api/v1/user/forgot`, data);
  return handleApiResponse(res);
};

export const verifyEmail = async (email: string): Promise<ApiResponse<{ isEmailExists: boolean }>> => {
  const res = await post<ApiResponse<{ isEmailExists: boolean }>, { email: string }>(`${api}/api/v1/verify/email`, { email });
  return handleApiResponse(res);
};

export const apiCheckUserIsLogin = async (token: string): Promise<CheckResponse> => {
  const res = await get<CheckResponse>(`${api}/api/v1/user/check`, config(token));
  return handleApiResponse(res);
};

// 最新消息 API
export const apiGetNews = async (id: string | undefined, token: string): Promise<ApiResponse<NewsSchema[] | NewsSchema | null>> => {
  const res = await get<ApiResponse<NewsSchema[] | NewsSchema | null>>(`${api}/api/v1/home/news/${id ?? ''}`, config(token));
  return handleApiResponse(res);
};

// 房型 API
export const apiGetRoomType = async (id: string | undefined, token: string): Promise<ApiResponse<IRoom[] | IRoom | null>> => {
  const res = await get<ApiResponse<IRoom[] | IRoom | null>>(`${api}/api/v1/rooms/${id ?? ''}`, config(token));
  return handleApiResponse(res);
};

// 美味佳餚 API
export const apiGetCulinary = async (id: string | undefined, token: string): Promise<ApiResponse<FoodTypeSchema[] | FoodTypeSchema | null>> => {
  const res = await get<ApiResponse<FoodTypeSchema[] | FoodTypeSchema | null>>(`${api}/api/v1/home/culinary/${id ?? ''}`, config(token));
  return handleApiResponse(res);
};

// 訂單 API
export const postOrder = async (data: OrderPostData, token: string): Promise<ApiResponse<Order | null>> => {
  const res = await post<ApiResponse<Order | null>, OrderPostData>(`${api}/api/v1/orders`, data, config(token));
  return handleApiResponse(res);
};

export const getOrderDetail = async (orderId: string, token: string) => {
  const res = await get<ApiResponse<IOrder>>(`${api}/api/v1/orders/${orderId}`, config(token));
  return handleApiResponse(res);
};
