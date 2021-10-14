const kitchenP = require("./lib/kitchen.js").promises;

kitchenP.proofYeast({ yeast: 100 })
.then((data) => {
  console.log("✅ The yeast is good.");
  kitchenP
    .makeKneadDough({
      flour: 50,
      salt: 8,
      sugar: 5,
      oil: 3,
      water: 10,
      yeast: 15,
    })
    .then((data) => {
      console.log(`✅ We got ${data} grs of pizza dough`);

      kitchenP.riseDough({ dough: data }).then((totalDough) => {
        console.log(`✅ ${totalDough} grs of pizza dough was risen`);

        kitchenP.preheatOven({ time: 15 }).then((data) => {
          console.log(`✅ Oven preheatted`);

          kitchenP
            .prepareToppings({
              cheese: 15,
              pepperoni: 22,
              onion: 45,
              mushroom: 13,
            })
            .then((toppings) => {
              console.log(`✅ Toppings prepared`);

              kitchenP
                .flattenDough({ dough: totalDough })
                .then((totalDoughFlattened) => {
                  console.log(
                    `✅ ${totalDoughFlattened} grs of pizza dough was flattened`
                  );

                  kitchenP
                    .sprinkleToppings({
                      ...toppings,
                      dough: totalDoughFlattened,
                    })
                    .then((pizza) => {
                      console.log(
                        `✅ Dough spread with tomato sauce and sprinkled with toppings`
                      );

                      kitchenP.bakePizza(pizza).then((pizza) => {
                        console.log(`🍕 Pizza is ready. Buen provecho 😋!`);
                      });
                    });
                });
            });
        });
      });
    });
});
