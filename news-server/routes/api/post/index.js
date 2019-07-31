const { Post } = require("../../../models/post");
const express = require("express");
const router = express.Router();

// route api/posts
// CREATE A NEW POST
// access PUBLIC

router.post("/posts", (req, res) => {
  const { title, status, author, description, category } = req.body;

  const newPost = new Post({
    title,
    status,
    author,
    description,
    category
  });
  newPost
    .save()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts
// GET ALL POSTS
// access PUBLIC

router.get("/posts", (req, res) => {
  Post.find()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/:id
// GET DETAIL OF POST
// access PUBLIC

router.get("/posts/id", (req, res) => {
  let id = req.query.id;
  Post.findById(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/:id
// DELETE A POST
// access PUBLIC

router.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  Post.findByIdAndDelete(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/:id
// UPDATE POSTS
// access PUBLIC

router.put("/posts/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, res) => {
    if (err) console.log(err);
    console.log(res);
  })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/category?type=&limit=
// GET POST BY CATEGORY
// access PUBLIC

router.get("/posts/category", (req, res) => {
  let type = req.query.type;
  let limit = req.query.limit;
  Post.find({ category: type })
    .sort({ createdOn: -1 })
    .limit(Number(limit))
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/time?limit=%skip=
// GET LATEST POST
// access PUBLIC

router.get("/posts/time", (req, res) => {
  Post.find()
    .sort({ createdOn: -1 })
    .limit(Number(req.query.count))
    .skip(Number(req.query.skip))
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/pagniation
// PAGNIATION

router.get("/posts/pagniation", (req, res) => {
  let pageNumber = req.query.pageNumber;
  let pageSize = req.query.pageSize;
  Post.find()
    .sort({ createdOn: -1 })
    .skip(Number((pageNumber - 1) * pageSize))
    .limit(Number(pageSize))
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});
module.exports = router;

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
