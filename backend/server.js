const app = require("./app");
const pool = require("./db"); 

const PORT = 3000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});