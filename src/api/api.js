import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c0534878-40b3-45b4-914f-ed2dbbe9515b"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfileData(userId) {
        return instance.get("profile/" + userId)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get("auth/me");
    }
}