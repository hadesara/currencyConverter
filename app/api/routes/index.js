module.exports = {
  index: function(req, res) {
    console.log(currentDir + 'app/client/views/index');
    res.render(currentDir + 'app/client/views/index');
  }
};
  