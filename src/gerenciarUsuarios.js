const usuarios = [
    {
        id: 1,
        nome: 'Pedro Araujo',
        email: 'pedro@pgats.com',
        senha: 6789,
        expirado: true
    },
    {
        id: 2,
        nome: 'Jessica Soares',
        email: 'jessicas@pgats.com',
        senha: 123456,
        expirado: false
    },
    {
        id: 3,
        nome: 'Juliana Pereira',
        email: 'juliana@pgats.com',
        senha: 23456,
        expirado: false
    },
    {
        id: 4,
        nome: 'Joao Costa',
        email: 'joao@pgats.com',
        senha: 98765,
        expirado: false
    }
]

export function realizarLogin(email, senha) {
    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios.at(i).email == email){
            if(usuarios.at(i).senha !== senha) {
                throw new Error ('Senha incorreta!');
            };
            if(usuarios.at(i).expirado !== false) {
                throw new Error ('Credencias expiradas!');
            };
            if (usuarios.at(i).senha == senha) {
                return 'Login realizado com sucesso!';
            };
        };
    };
    return 'Email nao encontrado!';

}