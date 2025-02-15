import api from '../services/api';

export const useApi = () => ({
    validateToken: async (token: string) => {
        const res: any = await api.post('/auth/login', { token });
        return res.data;
    },

    login: async (email: string, password: string, type: string | any) => {
        const res: any = await api.post('/auth/login', {
            email,
            password,
            type,
        });
        return res.data;
    },

    logout: async () => {
        const res = await api.post('/logout');
        return res.data;
    },

    registerUser: async (name: string, email: string, password: string, confirmPassword: string) => {
        const res: any = await api.post('/user', {
            name,
            email,
            password,
            confirmPassword,
        });
        return res.data;
    },

    registerCompany: async (
        companyName: string,
        email: string,
        cnpj: string,
        password: string,
        passwordConfirmation: string,
    ) => {
        const res: any = await api.post('/company', {
            companyName,
            email,
            cnpj,
            password,
            passwordConfirmation,
        });
        return res.data;
    },

    createJob: async (JobData: any) => {
      const token = localStorage.getItem('authToken');
      const headers = {
        Authorization: `Bearer ${token}`,
    };  
      const res: any = await api.post('/job', {JobData}, {headers})
        return res.data;
      },

    userRecoveryPassword: async (email: string) => {
      const res: any = await api.patch('/user/recovery_password', {
        email,
      });
      return res.data;
    },
  
    companyRecoveryPassword: async (email: string) => {
      const res: any = await api.patch('/company/recovery-password', {
        email,
      });
      return res.data;
    },
    
    userUpdatePassword: async (password: string, confirmPassword: string, recoverPasswordToken: string) => {
      const res: any = await api.patch('/user/update_password', {
        password,
        confirmPassword,
        recoverPasswordToken,
      });
      return res.data;
    },

    companyUpdatePassword: async (password: string, confirmPassword: string, recoverPasswordToken: string) => {
      const res: any = await api.patch('/company/update_password', {
        password,
        confirmPassword,
        recoverPasswordToken,
      });
      return res.data;
    },

      getJobs: async (page: number = 1) => {
        const url = `/job?order=ASC&page=${page}&take=10&orderByColumn=id`;
        const res: any = await api.get(url);
          return res.data;
      },

      getJob: async (id: number) => {
        const url = `/job/${id}`
        const res: any = await api.get(url);
          return res.data;
      },

      getJobsByCompany: async (id: string) => {
        const res: any = await api.get(`/job/all/${id}`);
        return res.data;
      },

      searchJobs: async (keyword: string) => {
        const url = `/job/search/${keyword}`
        console.log(url)
        const res: any = await api.get(url);
        console.log(res)
          return res.data;
      },
});
