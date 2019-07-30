const { Post } = require("../../../models/post");
const express = require("express");
const router = express.Router();

// route POST/api/post/create
// Create New Post
// access PUBLIC

router.post("/create", (req, res) => {
  const { title, status, description, category } = req.body;

  const newPost = new Post({
    title,
    status,
    description,
    category
  });
  newPost
    .save()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

router.get("/get", (req, res) => {
  Post.find()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  Post.findByIdAndDelete(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

router.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, res) => {
    if (err) console.log(err);
    console.log(res);
  })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});
// router.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   Post.findById(id)

//     .then(post => {
//       if (!post) return Promise.reject({ error: "Post not found" });
//       const { title, status, description, category } = req.body;
//       const newPost = new Post({
//         title,
//         status,
//         description,
//         category
//       });
//       post.post = newPost;
//       return post.save()
//       .then(post => console.log(post))
//     })

//     .catch(console.log);
// });
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// Get posts with the same category
router.get("/category", (req, res) => {
  const { category } = req.body;
  Post.find({ category: category })
    .then(post => console.log(post))
    .catch(err => res.status(400).json(err));
});

router.get("/latestnews", (req, res) => {
  Post.find()
    .sort({ createdDate: -1 })
    .limit(3)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});
module.exports = router;
