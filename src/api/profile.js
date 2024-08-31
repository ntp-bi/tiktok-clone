import api from "./apiConfig";

export const profile = async (nickname) => {
    try {
        const response = await api.get(`users/@${nickname}`);
        return response.data.data || [];
    } catch (error) {
        console.log(error);
    }
};
