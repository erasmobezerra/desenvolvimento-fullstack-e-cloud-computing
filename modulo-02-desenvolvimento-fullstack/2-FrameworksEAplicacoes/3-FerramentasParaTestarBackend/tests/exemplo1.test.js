function sum(a, b) {
    return a + b;
}

// Teste Unitario
// Testa uma funcao isoladamente, sem depender de outras partes do sistema
test('adds 1 + 2 igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});

