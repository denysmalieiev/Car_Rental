import { createClient } from 'redis';

// Redis Connection Setup
let client: any;
async function redisConnection() {
  try {
    client = createClient({
      socket: {
        host: 'localhost',
        port: 6379
      }
    });
    await client.connect();
    console.log('Connected to Redis server');
  } catch (error: any) {
    console.error('Redis connection error:', error.toString());
    throw error
  }
}


// Helper Function to Get the Cached Data
async function get(key:string) {
  try {
    return await client.get(key);
  } catch (error) {
    console.error('Error getting value from Redis:', error);
    return undefined;
  }
}

// Helper Function to Set the Cached Data
async function set(key:string, value:any, expiry:number = 3600) {
  try {
    if (!client) {
      await redisConnection(); // Ensure connection before attempting operations
    }
    await client.set(key, JSON.stringify(value), expiry ? { EX: expiry } : undefined);
  } catch (error) {
    console.error('Error setting value in Redis:', error);
    return undefined;
  }
}

// Helper Function to Delete the Cached Data
async function del(key:string) {
  try {
    if (!client) {
      await redisConnection(); // Ensure connection before attempting operations
    }
    return await client.del(key);
  } catch (error) {
    console.error('Error deleting value in Redis:', error);
    return undefined;
  }
}


// Function to Fetch Cached Data with fallback condition
async function getCachedData(key: string, timeout:number = 500) {
  return Promise.race([
    get(key),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Redis operation timed out')), timeout);
    })
  ]);
}

// Function to Caching the data with fallback condition
async function setCachedData(key: any, data: any, expiry:number = 3600, timeout:number = 2000) {
  return Promise.race([
    set(key, data, expiry),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Redis operation timed out')), timeout);
    })
  ]);
}

// Function to Delete the Cached Data with fallback condition
async function deleteCachedData(key: string, timeout:number = 1000) {
  return Promise.race([
    del(key),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Redis operation timed out')), timeout);
    })
  ]);
}


export { getCachedData, setCachedData, deleteCachedData, redisConnection }; // Export helper functions