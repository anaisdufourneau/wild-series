// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions
const browse = (req, res) => {
  res.json(categories);
};

const read = (req, res) => {
  const parseId = parseInt(req.params.id, 10);
  const category = categories.find((p) => p.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
/* Here you code */

// Export them to import them somewhere else

module.exports = {
  browse,
  read,
  /* Here you export */
};
