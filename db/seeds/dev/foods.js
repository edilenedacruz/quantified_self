exports.seed = function(knex, Promise) {
  return knex.raw('')
  .then(() => {
    return Promise.all([
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Banana", 34, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["French Silk Pie", 340, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Orange", 34, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Deep Dish Pizza", 890, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Spinach Salad w/dressing", 240, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Roasted Cauliflower", 80, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Chicken Breast", 210, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Dark Chocolate", 150, new Date]
      // ),
      // knex.raw(
      //   'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      //   ["Beef Jerky", 95, new Date]
      // )
    ]);
  });
};
