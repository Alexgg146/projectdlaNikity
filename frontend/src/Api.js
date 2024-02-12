class api {
  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
  async apiGet() {
    const res = await fetch("http://51.250.87.238/users");
      return await res.json();
  }
  async postUser(data) {
    const res = await fetch("http://51.250.87.238/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
      });
      return await res.json();
  }
  async postEmail(data) {
    const res = await fetch("http://51.250.87.238/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
      });
      return await res.json();
  }
  async deleteUser(id) {
    const res = await fetch(`http://51.250.87.238/users/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
      });
      return await res.json();
  }
}
const myApi = new api();
export default myApi;
