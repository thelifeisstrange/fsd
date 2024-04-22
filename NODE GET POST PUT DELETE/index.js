const express = require("express")
const app = express()

app.listen("3000", () => {
    console.log("Server is running on http://localhost:3000")
})

app.route("/").get((req, res) => {

    res.sendFile("C:\\Users\\SPL4\\Desktop\\B_61\\get.json");
});
app.route("/").post((req, res) => {

    res.sendFile("C:\\Users\\SPL4\\Desktop\\B_61\\post.json");
});
app.route("/").put((req, res) => {

    res.sendFile("C:\\Users\\SPL4\\Desktop\\B_61\\put.json");
});
app.route("/").delete((req, res) => {

    res.sendFile("C:\\Users\\SPL4\\Desktop\\B_61\\delete.json");
});