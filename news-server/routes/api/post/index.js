const { Post } = require("../../../models/post");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const nodemailer = require("nodemailer");

// route api/posts
// CREATE A NEW POST
// access PUBLIC

router.post("/posts", (req, res) => {
  const { title, status, author, description, category, imgUrl } = req.body;
  // if (image_name && image_name.length > 0) {
  //   const serverName = require("os").hostname();
  //   const serverPort = require("../../../server").settings.port;
  //  imgUrl = `${serverName}:${serverPort}/open_images?image_name=${req.body.image_name}`
  // }
  const newPost = new Post({
    title,
    status,
    author,
    description,
    category,
    imgUrl
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

// UPLOAD IMAGES
router.post("/upload_images", (req, res) => {
  let formidable = require("formidable");
  // parse a file upload
  var form = new formidable.IncomingForm();
  form.uploadDir = "./uploads";
  form.keepExtensions = true; // lấy cả đuôi
  form.maxFieldsSize = 10 * 1024 * 1024; // 10 MB
  form.multiples = true; // cho phép upload nhiều hình
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({
        result: "failed",
        data: {},
        message: `Cannot upload files. Error is ${err}`
      });
    }
    var arrayOfFiles = [];
    if (files[""] instanceof Array) {
      arrayOfFiles = files[""];
    } else {
      arrayOfFiles.push(files[""]);
    }
    if (arrayOfFiles.length > 0) {
      var fileNames = [];
      arrayOfFiles.forEach(eachFile => {
        // fileNames.push(eachFile.path);
        fileNames.push(eachFile.path.split("\\")[1]);
      });
      res.json({
        result: "ok",
        data: fileNames,
        numerOfImages: fileNames.length,
        message: "Upload image successfully"
      });
    } else {
      res.json({
        result: "failed",
        data: {},
        numerOfImages: 0,
        message: "No image to upload"
      });
    }
  });
});

// OPEN IMAGES ON BROWSER
// route api/open_images?image_name=

router.get("/open_images", (req, res) => {
  let imageName = "uploads/" + req.query.image_name;
  fs.readFile(imageName, (err, imageData) => {
    if (err) {
      res.status(400).json({
        result: "failed",
        message: `Cannot read the image. Error is ${err}`
      });
      return;
    }
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(imageData); // send the file to the browser
  });
});

// Send email with Nodemailer
router.post("/send", (req, res) => {
  const output = `
    <p>You have a new contact message</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.title}</li>
      <li>Name: ${req.body.description}</li>
      <li>Name: ${req.body.category}</li>
      <li>Name: ${req.body.author}</li>
    </ul>
    <h3>This is a message</h3>
    <p>${req.body.description}</p>

  `;
  let transporter = nodemailer.createTransport({
    host: "mail.mrs.com.vn",
    port: 587,
    sercuse: false,
    auth: {
      user: "tom@mrs.com.vn",
      pass: "0965003905t"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Node mailer contact" <tom@mrs.com.vn>',
    to: "tuyentn3393@gmail.com",
    subject: "Node ",
    text: "Hello",
    html: output
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Preview ", nodemailer.getTestMessageUrl(info));
  });
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
