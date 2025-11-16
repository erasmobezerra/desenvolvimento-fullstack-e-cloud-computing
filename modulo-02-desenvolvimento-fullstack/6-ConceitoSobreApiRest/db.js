import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("loja_node", "root", "Sociologia25",
    { 
        dialect: "mysql", 
        host: "127.0.0.1",
        logging: false // desabilita logs SQL detalhados do Sequelize
    });
    
sequelize.authenticate()
    .then(() => {
        console.log("✓ Conexão com o banco de dados estabelecida com sucesso.");
    })
    .catch((error) => {
        console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
        process.exit(1); // encerra o processo se falhar
    });

export default sequelize;