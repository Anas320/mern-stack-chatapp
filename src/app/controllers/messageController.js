const { v4: uuidv4 } = require("uuid");
const { Message } = require("@models");
const { io } = require("../socket/index");

const getMessages = async (req, res) => {
  try {
    const messagesCursor = await Message.find(
      {},
      {
        sort: { timestamp: -1 },
        limit: 50,
      }
    );

    const messages = await messagesCursor.toArray();
    res.send(messages);
  } catch (err) {
    console.error("Error retrieving messages:", err);
    res.status(500).send({ message: "Error retrieving messages" });
  }
};

const sendMessage = async (req, res) => {
  const { content } = req.body;
  const messageId = uuidv4();
  const timestamp = new Date();

  try {
    const message = {
      id: messageId,
      userId: req.userId,
      username: req.username,
      content,
      timestamp,
    };
    await Message.insertOne(message);
    io.emit("newMessage", message);
    res.status(201).send(message);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { getMessages, sendMessage };
