const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const posted = await Post.findAll({
      include: [{ model: User }],
    });
    const posts = posted.map(post => post.get({ plain: true }));
    //  const con = console.log(posts)
    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  try {
    res.render("signUp");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get the specific post with all of its comments.
router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["user_name"],
            },
          ],
        },
      ],
    });
    const singlePost = post.get({ plain: true });

    res.render("post", {
      singlePost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err, message: "Something went wrong." });
  }
});

module.exports = router;
