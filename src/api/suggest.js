import api from "./apiConfig";

const suggest = async (page = "1", per_page) => {
    try {
        const response = await api.get("users/suggested", {
            params: { page, per_page },
        });

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
};

export default suggest;
