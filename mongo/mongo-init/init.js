print("Ejecutando script de inicialización");
db = db.getSiblingDB("ecommerce");

db.createUser({
  user: "ecommerce",
  pwd: "qwerty",
  roles: [{ role: "readWrite", db: "ecommerce" }],
});

print("Creando coleccion usuarios");
db.createCollection("users");

print("Creando usuarios");
db.users.insertMany([
  { nombre: "sebastian", role: "admin" },
  { nombre: "nicolas", role: "admin" },
]);

db.users.find().pretty();
