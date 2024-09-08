export const fetchDataFromApi = async (endpoint: string) => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message || "Failed to fetch data");
    }
}