const kitchenP = require("./lib/kitchen.js").promises;

(async () => {
  const totalYeastProofed = await kitchenP.proofYeast({ yeast: 100 });
  console.log("✅ The yeast is good.");

  const totalDoughPrepared = await kitchenP.makeKneadDough({
    flour: 50,
    salt: 8,
    sugar: 5,
    oil: 3,
    water: 10,
    yeast: 15,
  });
  console.log(`✅ We got ${totalDoughPrepared} grs of pizza dough`);

  const totalDough = await kitchenP.riseDough({ dough: totalDoughPrepared });
  console.log(`✅ ${totalDough} grs of pizza dough was risen`);

  await kitchenP.preheatOven({ time: 15 }), console.log(`✅ Oven preheatted`);

  const toppings = await kitchenP.prepareToppings({
    cheese: 15,
    pepperoni: 22,
    onion: 45,
    mushroom: 13,
  });
  console.log(`✅ Toppings prepared`);

  const totalDoughFlattened = await kitchenP.flattenDough({ dough: totalDough });

  console.log(`✅ ${totalDoughFlattened} grs of pizza dough was flattened`);

  const pizza = await kitchenP.sprinkleToppings({
    ...toppings,
    dough: totalDoughFlattened,
  });
  console.log(`✅ Dough spread with tomato sauce and sprinkled with toppings`);

  await kitchenP.bakePizza(pizza);
  console.log(`🍕 Pizza is ready. Buen provecho 😋!`);
})();
