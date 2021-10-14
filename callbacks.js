const kitchen = require("./lib/kitchen.js");

const pizzaRead = (err, pizza) => {
  console.log(`🍕 Pizza is ready. Buen provecho 😋!`);
}

kitchen.proofYeast({ yeast: 100 }, (err, data) => {
  if (!err) {
    console.log("✅ The yeast is good.");

    kitchen.makeKneadDough(
      { flour: 50, salt: 8, sugar: 5, oil: 3, water: 10, yeast: 15 },
      (err, data) => {
        console.log(`✅ We got ${data} grs of pizza dough`);

        kitchen.riseDough({ dough: data }, (err, totalDough) => {
          console.log(`✅ ${totalDough} grs of pizza dough was risen`);

          kitchen.preheatOven({ time: 15 }, (err, data) => {
            console.log(`✅ Oven preheatted`);
                kitchen.prepareToppings(
                    { cheese: 15, pepperoni: 22, onion: 45, mushroom: 13 },
                    (err, toppings) => {
                      console.log(`✅ Toppings prepared`);
        
                        kitchen.flattenDough({dough: totalDough}, (err, totalDoughFlattened) => {
                            console.log(`✅ ${totalDoughFlattened} grs of pizza dough was flattened`);

                            kitchen.sprinkleToppings({...toppings, dough: totalDoughFlattened}, (err, pizza) => {

                                console.log(`✅ Dough spread with tomato sauce and sprinkled with toppings`);

                                kitchen.bakePizza(pizza, pizzaRead)
                            });

                        });
                    });
          });
        });
      }
    );
  }
});
