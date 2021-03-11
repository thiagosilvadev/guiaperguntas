const express = require("express");
const routes = express();

const getNavItems = (active) => {
  const arr = [
    {
      nome: "Home",
      href: "/",
      active: false,
    },
    {
      nome: "Perguntar",
      href: "/perguntar",
      active: false,
    },
   
  ];

  arr.forEach((item) => {
    if (item.nome === active) item.active = true;
  });
  return arr;
};

routes.get("/", (req, res) => {
  res.render("index", {
    navItems: getNavItems('Home'),
  });
});
routes.get("/perguntar", (req, res) => {
  res.render("perguntar", {
    navItems: getNavItems('Perguntar'),
  });
});
routes.post("/salvarpergunta", (req, res) => {
  res.send('Form')
});

module.exports = routes;
