// contact-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'contact';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name : {
      first : {
        type: String,
        required: [true, 'First name is required']
      },
      last : {
        type : String
      }
    },
    phone: {
      type: String,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true, 'User phone number required']
    },
    email : {
      type : String,
      required : [true, 'Email is required']
    }
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
