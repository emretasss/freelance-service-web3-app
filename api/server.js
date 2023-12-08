import { MongoClient, ServerApiVersion } from 'mongodb';

import { configDotenv } from 'dotenv';

import express from 'express';






    












configDotenv();
const uri = process.env.MONGO;





const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

const app =express();
app.listen
( 8800, ()=>{
    run();
    console.log("Server is running on port 3000");
    });

    







