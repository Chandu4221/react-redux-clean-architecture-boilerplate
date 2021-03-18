import apiInstance from "../apiInstance";

const todosService = {
  async getAll() {
    const response = await apiInstance.get("/todos");
    return response.data;
  },
};

export default todosService;
