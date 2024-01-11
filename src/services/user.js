import { fetchInterceptor } from '../utilities/fetch-interceptor';

const UserServices = {
  getUserProfileById: async (_userId) => {
    return await fetchInterceptor(`user/${_userId}`);
  },
};

export default UserServices;
