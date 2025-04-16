import { REDIS_HOST, REDIS_PORT, REDIS_PASS } from '@/constants';
import Redis from 'ioredis';

const redis = new Redis({
  host: REDIS_HOST,
  port: Number(REDIS_PORT),
  db: 0,
  password: REDIS_PASS,
})

redis.on("connect", () => console.log("🔴 Conectado a Redis"));
redis.on("error", (err) => console.error("Redis Error:", err));

export default redis;
