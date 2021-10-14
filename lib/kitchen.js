const MAX = 10000;
const MIN = 3000;

function getRandomArbitrary() {
  return Math.random() * (MAX - MIN) + MIN;
}

module.exports = {
  proofYeast: function (ingredients, cb) {
    console.log("🔪 Prooffing the yeast...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, ingredients.yeast);
    }, getRandomArbitrary());
  },

  makeKneadDough: function (ingredients, cb) {
    console.log("🔪 Making and kneading the pizza dough...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(
        false,
        Object.values(ingredients).reduce((acc, value) => acc + value, 0)
      );
    }, getRandomArbitrary());
  },

  riseDough: function (ingredients, cb) {
    console.log("🔪 Rising the pizza dough...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, ingredients.dough);
    }, getRandomArbitrary());
  },

  flattenDough: function (ingredients, cb) {
    console.log("🔪 Flattening the pizza dough...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, ingredients.dough);
    }, getRandomArbitrary());
  },

  preheatOven: function (ingredients, cb) {
    console.log("🔪 Preheating oven...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, ingredients.time);
    }, getRandomArbitrary());
  },

  prepareToppings: function (ingredients, cb) {
    console.log("🔪 Preparing toppings...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, ingredients);
    }, getRandomArbitrary());
  },

  sprinkleToppings: function (ingredients, cb) {
    console.log("🔪 Spreading tomato sauce and sprinkling toppings...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, ingredients);
    }, getRandomArbitrary());
  },

  bakePizza: function (pizza, cb) {
    console.log("🔪 Beaking pizza...");
    setTimeout(function () {
      console.log("🔔 Done.");
      cb(false, pizza);
    }, getRandomArbitrary());
  },

  promises: {
    proofYeast: function (ingredients) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Prooffing the yeast...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(ingredients.yeast);
        }, getRandomArbitrary());
      });
    },

    makeKneadDough: function (ingredients, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Making and kneading the pizza dough...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(
            Object.values(ingredients).reduce((acc, value) => acc + value, 0)
          );
        }, getRandomArbitrary());
      });
    },

    riseDough: function (ingredients, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Rising the pizza dough...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(ingredients.dough);
        }, getRandomArbitrary());
      });
    },

    flattenDough: function (ingredients, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Flattening the pizza dough...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(ingredients.dough);
        }, getRandomArbitrary());
      });
    },

    preheatOven: function (ingredients, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Preheating oven...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(ingredients.time);
        }, getRandomArbitrary());
      });
    },

    prepareToppings: function (ingredients, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Preparing toppings...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(ingredients);
        }, getRandomArbitrary());
      });
    },

    sprinkleToppings: function (ingredients, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Spreading tomato sauce and sprinkling toppings...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(ingredients);
        }, getRandomArbitrary());
      });
    },

    bakePizza: function (pizza, cb) {
      return new Promise(function (resolve, reject) {
        console.log("🔪 Beaking pizza...");
        setTimeout(function () {
          console.log("🔔 Done.");
          resolve(pizza);
        }, getRandomArbitrary());
      });
    },
  },
};
