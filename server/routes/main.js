const express = require('express');
const router = express.Router();
//const Post = require('../models/Post');
router.get('', async (req, res) => {
  const locals = {
    title: 'Nodejs blog',
    description: 'Simple blog made by Nodejs'
  };
  /*
    try {
      const data = await Post.find();
      res.render('layouts/index', { locals, data });
    } catch (error) {
      console.log(error);
    }
  */
  res.render('layouts/index', { locals });
});

router.get('/about', (req, res) => {
  res.render('layouts/about');
});

module.exports = router;

/*
function insertPostData() {
  Post.insertMany([
    {
      title: "Building a block",
      body: "This is a body text"
    },
  ])
}
insertPostData();
*/
