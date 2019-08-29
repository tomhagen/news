const { Post } = require("../../../models/post");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");

// UPLOAD IMAGES WITH MULTER

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function(req, file, callback) {
    callback(
      null,

      file.originalname
    );
  }
});

// init upload
const upload = multer({
  storage: storage
}).single("images");

router.post("/upload_images", (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.status(400).json({
        result: "failed",
        message: `Cannot upload files. Error is ${err}`
      });
    } else {
      if (req.file === undefined) {
        res.status(400).json({
          result: "failed",
          message: "You are not submit images"
        });
      } else {
        console.log(req.file);
        res.status(200).json({
          result: "ok",
          message: "Upload image successfully",
          path: req.file.originalname
        });
      }
    }
  });
});

// route api/posts
// GET ALL POSTS
// access PUBLIC

router.get("/posts", (req, res) => {
  Post.find()
    .sort({ createdOn: -1 })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});

// route api/posts/:id
// GET DETAIL OF POST
// access PUBLIC

router.get("/posts/slug", (req, res) => {
  // let id = req.query.id;
  const { slug } = req.query;
  Post.findOne({ slug })
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

// route api/posts/trending?limit=
// GET TRENDING POSTS
router.get("/posts/trending", (req, res) => {
  let limit = req.query.limit;
  Post.find({ trending: true })
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

// route api/posts/search?q=
// SEARCH BY TITLE & DESCRIPTION

router.get("/posts/search", (req, res) => {
  let query = `/.*${req.query.q}.*/`;
  console.log(query);
  // Post.find({title:{'$regex' : /.*.*/, $in:['laptop'], '$options' : 'i'} })
  Post.find({ title: query }) // i : case-sensitive, not difference between Lower and Upper
    .select({
      _id: 1,
      title: 1,
      description: 1,
      author: 1,
      createdOn: 1,
      category: 1,
      images: 1
    })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
});
// OPEN IMAGES ON BROWSER
// route api/open?name=

router.get("/open", (req, res) => {
  let imageName = "uploads/" + req.query.name;
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
// Form submit
router.post("/send", (req, res) => {
  const output = `
    <p style={{color:#00A3E4}}>You have a new contact message</p>
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
    from: '"Admin Mailer" <tom@mrs.com.vn>',
    to: "tuyentn3393@gmail.com",
    subject: "News Website Contact",
    text: "Hello",
    html: output
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).json("successs");
    res.status(400).json("error");
    console.log("Preview ", nodemailer.getTestMessageUrl(info));
  });
});

// Send email in Stay Updated
// Get customer email
router.post("/getemail", (req, res) => {
  const output = `
    <p style={{color:#00A3E4}}>You have a new contact message</p>
    <h3>Customer Email:</h3>
    <ul>
      <li>Name: ${req.body.email}</li>
    
    </ul>
    

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
    from: '"Admin Mailer" <tom@mrs.com.vn>',
    to: "tuyentn3393@gmail.com",
    subject: "News Website Contact",
    text: "Hello",
    html: output
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).json("successs");
    res.status(400).json("error");
    console.log("Preview ", nodemailer.getTestMessageUrl(info));
  });
});

// handle slug of news url
const slugWithDate = text => {
  let myText = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
  return myText;
};

// route api/posts
// CREATE A NEW POST
// access PUBLIC

router.post("/posts", (req, res) => {
  const x = Math.floor(Math.random() * 100000 + 1);
  const slug = slugWithDate(req.body.title + "-" + x);
  const {
    title,
    status,
    author,
    description,
    mainContent,
    category,
    images,
    trending
  } = req.body;

  const newPost = new Post({
    title,
    status,
    author,
    description,
    mainContent,
    category,
    images,
    slug,
    trending
  });
  newPost
    .save()
    .then(post => {
      res.status(200).json(post);
      // res.redirect('/admin/posts')
    })
    .catch(err => res.status(400).json(err));
});

// GET DETAIL OF POSTS WITH SLUG
// route api/posts/:slug
// router.get("/posts/slug", (req, res) => {
//   let slug = req.query.slug;
//   Post.findOne({slug})
//     .then(post => res.status(200).json(post))
//     .catch(err => res.status(400).json(err));
// });

module.exports = router;

// UPLOAD IMAGES WITH FORMIDABLE
// router.post("/upload_images", (req, res) => {
//   let formidable = require("formidable");
//   // parse a file upload
//   var form = new formidable.IncomingForm();
//   form.uploadDir = "./uploads";
//   form.keepExtensions = true; // lấy cả đuôi
//   form.maxFieldsSize = 10 * 1024 * 1024; // 10 MB
//   form.multiples = true; // cho phép upload nhiều hình
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       res.json({
//         result: "failed",
//         data: {},
//         message: `Cannot upload files. Error is ${err}`
//       });
//     }
//     var arrayOfFiles = [];
//     if (files[""] instanceof Array) {
//       arrayOfFiles = files[""];
//     } else {
//       arrayOfFiles.push(files[""]);
//     }
//     if (arrayOfFiles.length > 0) {
//       var fileNames = [];
//       arrayOfFiles.forEach(eachFile => {
//         // fileNames.push(eachFile.path);
//         fileNames.push(eachFile.path.split("\\")[1]);
//       });
//       res.json({
//         result: "ok",
//         data: fileNames,
//         numerOfImages: fileNames.length,
//         message: "Upload image successfully"
//       });
//     } else {
//       res.json({
//         result: "failed",
//         data: {},
//         numerOfImages: 0,
//         message: "No image to upload"
//       });
//     }
//   });
// });
