import app from "./backend/app.js";

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})