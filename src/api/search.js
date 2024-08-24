import api from "./apiConfig";

export const search = async (q, type = "less") => {
    try {
        const response = await api.get("users/search", {
            params: {
                q,
                type,
            },
        }); 
        
        return response.data.data || [];
    } catch (error) {
        console.log(error);
    }
};
