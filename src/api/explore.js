import api from "./apiConfig";

export const explore = async (type) => {
    try {
        const response = await api.get("videos", {
            params: {
                type,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};
