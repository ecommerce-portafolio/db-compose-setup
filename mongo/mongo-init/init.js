print("Ejecutando script de inicialización");
db = db.getSiblingDB("ecommerce");

// Crear usuario de base de datos
db.createUser({
  user: "ecommerce",
  pwd: "qwerty",
  roles: [{ role: "readWrite", db: "ecommerce" }],
});

// CREACIÓN DE PERMISOS
print("Creando colección permissions");
db.createCollection("permissions");

print("Insertando permisos de prueba");
db.permissions.insertMany([
  { area: "Productos", action: "ver" },
  { area: "Productos", action: "editar" },
  { area: "Productos", action: "eliminar" },
  { area: "Órdenes", action: "ver" },
  { area: "Órdenes", action: "editar" },
  { area: "Órdenes", action: "eliminar" },
  { area: "Usuarios", action: "ver" },
  { area: "Usuarios", action: "editar" },
  { area: "Usuarios", action: "eliminar" },
]);

// CREACIÓN DE ROLES
print("Creando colección roles");
db.createCollection("roles");

print("Insertando roles de prueba");
db.roles.insertMany([
  {
    name: "admin",
    description: "Administrador con acceso completo",
    permissions: [],
  },
  {
    name: "moderator",
    description: "Moderador con acceso limitado a productos",
    permissions: [],
  },
  {
    name: "customer",
    description: "Cliente con permisos básicos",
    permissions: [],
  },
]);

// Asignar permisos a roles
print("Asignando permisos a roles");
const adminRole = db.roles.findOne({ name: "admin" });
const moderatorRole = db.roles.findOne({ name: "moderator" });
const customerRole = db.roles.findOne({ name: "customer" });

// Obtener permisos
const allPermissions = db.permissions.find().toArray();
const productPermissions = db.permissions.find({ area: "Productos" }).toArray();
const basicPermissions = db.permissions
  .find({ area: "Productos", action: "ver" })
  .toArray();

// Actualizar roles con los permisos correspondientes
db.roles.updateOne(
  { _id: adminRole._id },
  { $set: { permissions: allPermissions } }
);
db.roles.updateOne(
  { _id: moderatorRole._id },
  { $set: { permissions: productPermissions } }
);
db.roles.updateOne(
  { _id: customerRole._id },
  { $set: { permissions: basicPermissions } }
);

// CREACIÓN DE USUARIOS
print("Creando colección users");
db.createCollection("users");

print("Insertando usuarios de prueba");
db.users.insertMany([
  {
    nombre: "sebastian",
    email: "seba@ecommerce.cl",
    phone: "987654321",
    address: "calle falsa",
    password: "qwerty",
    role: adminRole._id,
  },
  {
    nombre: "nicolas",
    email: "nico@ecommerce.cl",
    phone: "987654322",
    address: "calle falsa 123",
    password: "asdfgh",
    role: moderatorRole._id,
  },
]);

print("Script de inicialización completado");
