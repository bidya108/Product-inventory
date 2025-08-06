const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const agentRoutes = require('./routes/agentRoutes');  
const uploadRoutes = require("./routes/uploadRoutes");
const distributionRoutes = require('./routes/distributionRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/upload", uploadRoutes);
app.use('/api/products', productRoutes); // ✅ Already working
app.use('/api/agents', agentRoutes); 
app.use('/api/distribution', distributionRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected:', mongoose.connection.host))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
