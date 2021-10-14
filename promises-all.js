const kitchenP = require("./lib/kitchen.js").promises;

kitchenP
  .proofYeast({ yeast: 100 })
  .then((data) => {
    console.log("✅ The yeast is good.");
    return kitchenP.makeKneadDough({
      flour: 50,
      salt: 8,
      sugar: 5,
      oil: 3,
      water: 10,
      yeast: 15,
    });
  })
  .then((data) => {
    console.log(`✅ We got ${data} grs of pizza dough`);

    return kitchenP.riseDough({ dough: data });
  })
  .then((totalDough) => {
    console.log(`✅ ${totalDough} grs of pizza dough was risen`);
    return Promise.all([
      kitchenP.preheatOven({ time: 15 }),
      kitchenP.prepareToppings({
        cheese: 15,
        pepperoni: 22,
        onion: 45,
        mushroom: 13,
      }),
      kitchenP.flattenDough({ dough: totalDough }),
    ]);
  })
  .then((response) => {
    console.log(`✅ Oven preheatted`);
    
    const toppings = response[1];
    console.log(`✅ Toppings prepared`);

    const totalDoughFlattened = response[2];
    console.log(`✅ ${totalDoughFlattened} grs of pizza dough was flattened`);

    return kitchenP.sprinkleToppings({
      ...toppings,
      dough: totalDoughFlattened,
    });
  })
  .then((pizza) => {
    console.log(
      `✅ Dough spread with tomato sauce and sprinkled with toppings`
    );

    return kitchenP.bakePizza(pizza);
  })
  .then(() => {
    console.log(`🍕 Pizza is ready. Buen provecho 😋!`);
  });
