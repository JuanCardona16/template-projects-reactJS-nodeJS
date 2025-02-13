import app from "../config/app";
import { PORT } from "@/constants";

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} -> http://localhost:${PORT}`);
  console.log("Control + C por stopping the servive")
})

