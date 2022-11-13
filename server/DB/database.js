const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const dbparams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };

    await mongoose.connect(
        "mongodb+srv://ps:Ps%4033127@cluster0.bgeexce.mongodb.net/?retryWrites=true&w=majority",
        dbparams,
    );

    console.log('Connected to db...');

  } catch (error) {
    console.log('Error connecting  to db...',error);
  }
};
