import redis from 'redis';
import produtoController from './controller-produto.js'
let redisClient;

(async () => {
    // usa URL/host/port a partir de variáveis de ambiente, com fallback para localhost:6379
    redisClient = redis.createClient({
        url: process.env.REDIS_URL || `redis://${process.env.REDIS_HOST || '127.0.0.1'}:${process.env.REDIS_PORT || 6379}`,
        socket: {
            // reconexão simples
            reconnectStrategy: retries => Math.min(retries * 50, 2000)
        }
    });

    redisClient.on('error', (error) => console.error(`REDIS Error: ${error}`));
    redisClient.on('connect', () => console.log("REDIS: Conectado"));

    try {
        await redisClient.connect();
    } catch (err) {
        console.error('REDIS: falha ao conectar', err);
        process.exit(1);
    }

    obter(1).then((x) => console.log(JSON.stringify(x)));
    obter(2).then((x) => console.log(JSON.stringify(x)));
    obter(1).then((x) => console.log(JSON.stringify(x)));
})();

const obter = async (codigo) => {
    let isCached = false, result;
    const cacheResults = await redisClient.get(`Prod${codigo}`);

    if (cacheResults) {
        isCached = true; result = JSON.parse(cacheResults);
    } else {
        result = await produtoController.obterProduto(codigo);
        // só cacheia se existir resultado; define expiração (1 hora) para evitar stale cache
        if (result) {
            await redisClient.set(`Prod${codigo}`, JSON.stringify(result), { EX: 3600 });
        }
    }

    return { fromCache: isCached, produto: result };
}
