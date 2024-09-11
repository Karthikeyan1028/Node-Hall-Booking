import express from "express";
import AppRoutes from "./src/routes/Booking.js";

let PORT = 3001;
let app = express();

app.use(express.json());
app.use("/", AppRoutes);

app.listen(PORT, () => console.log(`App is listening to ${PORT}`));