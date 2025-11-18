const server = require('../src/index.js')
const request = require('supertest');
const db = require('../src/models/index.js');

// Teste de integracao
// Testa o servidor, as rotas, a logica e o banco de dados
// Vai testar um fluxo completo da aplicacao onde realiza uma requisicao de criacao de nota e valida a resposta
// describe('Teste do servidor', () => {
//     it('Criacao de nota', async () => {
//         const response = await request(server)
//             .post('/notas').send({
//                 titulo: "Tarefa Teste",
//                 descricao: "Apenas um Teste"
//             });
//         expect(response.status).toBe(200);
//         expect(response.body.titulo).toBe("Tarefa Teste");
//     });
// });

// ============== Testes criados por Inteligência Artificial =================

// Variável para armazenar o ID da nota criada,
// permitindo que os testes de GET, PUT e DELETE a utilizem.
let createdNoteId;

describe('Teste de Integração Completo da API /notas', () => {

    // --- 1. POST: Criação de Nota (CREATE) ---
    it('Deve criar uma nova nota (POST /notas) e retornar status 200', async () => {
        const newNote = {
            titulo: "Tarefa Teste",
            descricao: "Apenas um Teste"
        };

        const response = await request(server)
            .post('/notas') // Assumindo que a rota está montada em '/notas' no seu index.js
            .send(newNote);

        // Validações
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.titulo).toBe(newNote.titulo);

        // Armazena o ID para os testes subsequentes
        createdNoteId = response.body.id;
    });

    // --- 2. GET (Todas): Leitura de Notas (READ ALL) ---
    it('Deve retornar uma lista de notas (GET /notas) e incluir a nota criada', async () => {
        const response = await request(server).get('/notas');

        // Validações
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        // Verifica se a lista não está vazia e contém a nota recém-criada
        expect(response.body.length).toBeGreaterThan(0);
        const createdNoteExists = response.body.some(note => note.id === createdNoteId);
        expect(createdNoteExists).toBe(true);
    });

    // --- 3. GET (Por ID): Leitura de Nota Específica (READ ONE) ---
    it('Deve retornar a nota correta pelo ID (GET /notas/:id)', async () => {
        const response = await request(server).get(`/notas/${createdNoteId}`);

        // Validações
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', createdNoteId);
        expect(response.body.titulo).toBe("Tarefa Teste");
    });

    // --- 4. PUT: Atualização de Nota (UPDATE) ---
    it('Deve atualizar a nota existente (PUT /notas/:id)', async () => {
        const updatedData = {
            titulo: "Tarefa Teste ATUALIZADA",
            descricao: "Descrição também atualizada"
        };

        const response = await request(server)
            .put(`/notas/${createdNoteId}`)
            .send(updatedData);

        // O seu PUT retorna `res.end()`, então esperamos status 200 e um body vazio
        expect(response.status).toBe(200);
        expect(response.body).toEqual({}); // Verifica se o body está vazio

        // Opcional: Testa o GET novamente para garantir que a atualização ocorreu no DB
        const getResponse = await request(server).get(`/notas/${createdNoteId}`);
        expect(getResponse.body.titulo).toBe(updatedData.titulo);
    });

    // --- 5. DELETE: Exclusão de Nota (DELETE) ---
    it('Deve deletar a nota (DELETE /notas/:id)', async () => {
        const response = await request(server).delete(`/notas/${createdNoteId}`);

        // O seu DELETE retorna `res.end()`, então esperamos status 200 e um body vazio
        expect(response.status).toBe(200);
        expect(response.body).toEqual({}); // Verifica se o body está vazio

        // Opcional: Testa o GET novamente para garantir que a nota foi excluída
        const getResponseAfterDelete = await request(server).get(`/notas/${createdNoteId}`);
        // Dependendo de como seu ORM/DB se comporta, pode retornar 404, 200 com null/vazio, etc.
        // Assumindo que findByPk retorna null e, consequentemente, res.json(null) retorna 200:
        expect(getResponseAfterDelete.status).toBe(200);
        expect(getResponseAfterDelete.body).toBe(null);
    });

    afterAll(async () => {
        if (createdNoteId) {
            // Deleta o registro de teste usando o ID que foi criado.
            // Isso garante que apenas os dados do teste sejam removidos.
            await db.Nota.destroy({ where: { id: createdNoteId } });
        }
        
        // Opcional: Em alguns setups, pode ser necessário fechar a conexão com o DB
        await db.sequelize.close();
        server.listen().close();
    });
});

// ============== Fim dos testes criados por Inteligência Artificial =================

