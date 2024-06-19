import io from "socket.io-client";

const socket = io(process.env.REACT_APP_BACKEND_APP_URL, {
  transports: ["websocket"],
});

console.log("socket: ", socket);
socket.on("connect", () => {
  console.log("Connected to the server");
  socket.emit("testEvent", { message: "Hello, serversss!" });
});

socket.on("connect_error", (error) => {
  console.error("Connection error:", JSON.stringify(error));
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

socket.on("testResponse", (data) => {
  console.log("Received response from server:", data);
});

export default socket;
