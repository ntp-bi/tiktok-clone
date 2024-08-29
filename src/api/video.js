import api from "./apiConfig";

export const video = async (type, page = "1") => {
    try {
        const response = await api.get("videos", {
            params: {
                type,
                page,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};
