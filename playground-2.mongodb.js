// Create a MongoDB database
use('computer_assembly_platform');

// Create a collection for components
db.createCollection("components", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name", "supplier_id"],
         properties: {
            name: { bsonType: "string" },
            description: { bsonType: "string" },
            price: { bsonType: "decimal" },
            stock_quantity: { bsonType: "int" },
            supplier_id: { bsonType: "int" }
         }
      }
   }
});

// Create a collection for suppliers
db.createCollection("suppliers", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name"],
         properties: {
            name: { bsonType: "string" },
            contact_person: { bsonType: "string" },
            email: { bsonType: "string" },
            phone: { bsonType: "string" }
         }
      }
   }
});

// Create a collection for equipment
db.createCollection("equipment", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["type"],
         properties: {
            type: { bsonType: "string" },
            production_date: { bsonType: "date" },
            cost_value: { bsonType: "decimal" }
         }
      }
   }
});

// Create a collection for equipment production
db.createCollection("equipment_production", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["equipment_id", "component_id", "labor_type", "labor_cost"],
         properties: {
            equipment_id: { bsonType: "int" },
            component_id: { bsonType: "int" },
            labor_type: { bsonType: "string" },
            labor_cost: { bsonType: "decimal" }
         }
      }
   }
});

// Create a collection for clients
db.createCollection("clients", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name"],
         properties: {
            name: { bsonType: "string" },
            email: { bsonType: "string" },
            phone: { bsonType: "string" }
         }
      }
   }
});

// Create a collection for equipment sales
db.createCollection("equipment_sales", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["equipment_id", "client_id", "sale_date", "sale_price"],
         properties: {
            equipment_id: { bsonType: "int" },
            client_id: { bsonType: "int" },
            sale_date: { bsonType: "date" },
            sale_price: { bsonType: "decimal" }
         }
      }
   }
});

// Create a collection for user profiles
db.createCollection("user_profiles", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["username", "password", "role"],
         properties: {
            username: { bsonType: "string" },
            password: { bsonType: "string" },
            role: { bsonType: "string" },
            created_at: { bsonType: "date" }
         }
      }
   }
});

// Create a collection for user permissions
db.createCollection("user_permissions", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["user_id"],
         properties: {
            user_id: { bsonType: "int" },
            can_manage_components: { bsonType: "bool" },
            can_manage_equipment: { bsonType: "bool" },
            can_manage_clients: { bsonType: "bool" },
            can_manage_users: { bsonType: "bool" }
         }
      }
   }
});
