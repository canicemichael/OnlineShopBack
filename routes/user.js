const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

// UPDATE USER
router.put("/:id", verifyToken, (req, res) => {
    
})

module.exports = router