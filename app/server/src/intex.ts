import express from "express";
import cors from "cors";

const app = express();


app.use(express.json());
const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>
    console.log(`server running at ${PORT}`));

