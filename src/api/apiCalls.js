import axios from "axios";

export const signUpUser = (body) => {
    return axios.post("/api/v1/employee/signup", body);
}

export const loginUser = creds => {
    const { email, password } = creds;
    return axios.get(`/api/v1/employee/login/${email}?password=${password}`);
}

export const signUpAdmin = (body, adminKey) => {
    return axios.post("/api/v1/admins/signup", body, {headers: {key: adminKey}});
}

export const loginAdmin = (creds) => {
    const { email, password, adminKey } = creds;
    return axios.get(`/api/v1/admins/login/${email}?password=${password}`, {headers: {key: adminKey}});
}

export const getUser = (email) => {
    return axios.get(`/api/v1/employee/get/email/${email}`);
}

export const getUserWithId = (id) => {
    return axios.get(`/api/v1/employee/get/id/${id}`);
}

export const getUsers = (page = 0, size = 3) => {
    return axios.get(`/api/v1/employee/allEmployees?page=${page}&size=${size}&sort=createdDate,DESC`);
}

export const getAdmin = (email) => {
    return axios.get(`/api/v1/admins/get/admin/${email}`);
}

export const setAuthorizationHeader = (userData) => {
    if(userData.isLoggedIn) {
        const { email, password } = userData;
        const userInfo = email + ":" + password;
        const convertBasic = btoa(userInfo);
        const authorizationHeaderValue = "Basic " + convertBasic;
        axios.defaults.headers['Authorization'] = authorizationHeaderValue;
    }
    else {
        delete axios.defaults.headers['Authorization'];
    }
};

export const updateUser = (id, form) => {
    return axios.put(`/api/v1/employee/update/${id}`, form);
}

export const updateAdmin = (id, form, adminKey) => {
    return axios.put(`/api/v1/admins/update/${id}`, form, {headers: {key: adminKey}});
}

export const createContact = (body) => {
    return axios.post("/api/v1/contacts/create", body);
}

export const gettAllMessage = (pageNumber, pageSize, pageSort) => {
    return axios.get(`/api/v1/contacts/getpage?page=${pageNumber}&size=${pageSize}&sort=${pageSort}`);
}

export const deleteMessage = (id) => {
    return axios.delete(`/api/v1/contacts/delete/${id}`);
}

export const createPermission = (body) => {
    return axios.post("/api/v1/permissions", body);
}

export const getPermission = (id) => {
    return axios.get(`/api/v1/permissions/get/${id}`);
}

export const getAllPermission = (pageNumber, pageSize, pageSort) => {
    return axios.get(`/api/v1/permissions/get/all?page=${pageNumber}&size=${pageSize}&sort=${pageSort}`);
}

export const getAllPermissionForEmployee = (employeeId, pageNumber, pageSize, pageSort) => {
    return axios.get(`/api/v1/permissions/get/employee/${employeeId}?page=${pageNumber}&size=${pageSize}&sort=${pageSort}`);
}

export const updatePermission = (id, body) => {
    return axios.put(`/api/v1/permissions/update/${id}`, body);
}

export const deletePermission = (id) => {
    return axios.delete(`/api/v1/permissions/delete/${id}`);
}