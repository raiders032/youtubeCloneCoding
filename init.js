import app from "./app";

const PORT = 3000;

const handleListening = () =>
  console.log(`listening at http://localhost:${PORT}`);

app.listen(PORT, handleListening);
