👨‍💻 JavaScript - Interfaces e Heranças em Orientação a Objetos 🎧

Explorei muito mais esse mundo da orientação a objetos e de como trabalhar de maneira segura, de maneira confiável, reutilizando código e compartilhando comportamentos dentro dos objetos.
Trabalhei o nosso sistema de tratamento de contas para o ByteBank, então tenho uma classe mãe Conta, onde consego ter todo o comportamento que é compartilhado entre todas as contas. Fez todo sentido essa classe ser abstrata, porque eu não quero que ninguém a instancie diretamente, então trabalhei classes abstratas.

=============================================================================================================

Métodos abstratos porque cada tipo de conta vai ter uma ligeira diferença no método sacar, então eu quero garantir que todo mundo implemente, pergunte se não souber, como isso tem que ser implementado para o nosso cliente, para o ByteBank ter que especificar isso para nós.
O método abstrato serve para definirmos uma interface padrão, que todo mundo vai ter esse método, mas temos que definir como cada um vai realmente executá-lo.

Com os métodos privados conseguirmos chamá-los e reaproveitar mais código. Trabalhamos herança, como temos a nossa classe Conta base, conseguimos herdar dela e só mudar o que precisávamos. Sobrescrever métodos, vimos também sobrescritas de métodos.

Criamos a ContaSalario, ContaCorrente, ContaPoupanca de uma maneira fácil de trabalharmos, sem precisarmos criar outro tipo de conta ou criar algum comportamento específico para cada tipo de conta, e conseguimos.

Se quisermos um comportamento geral que vai ser compartilhado, nós conseguimos trazer para a Conta também. Existem várias formas de trabalhar com conta, encapsulamento, métodos abstratos e classes abstratas.

Trabalhamos agora no final polimorfismo, que é a propriedade superimportante de orientação a objetos, onde tratamos objetos diferentes de uma maneira similar. Temos nosso Diretor, nosso Gerente, nosso Cliente, todos sendo tratados da mesma maneira pelo nosso sistema de autenticação, já que é um único sistema de autenticação e eu quero reutilizar código o máximo possível.

Lógico que sempre pensando nas boas práticas de programação e mantendo a legibilidade e a comunicação no nosso código de uma maneira eficiente.

=============================================================================================================

Foi um curso de orientação a objetos, vimos vários conceitos, mas tem muitas outras coisas de boas práticas que vimos também aqui no meio. E acabamos fazendo um sistema bem interessante, então terminamos nosso sistema de contas, construimos o sistema básico de funcionários e fizemos o sistema de autenticação. 🎆🎇

=============================================================================================================