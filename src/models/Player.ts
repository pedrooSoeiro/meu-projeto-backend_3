/*A palavra-chave "export" é utilizada para exportar a classe Player,
permitindo que ela seja importada e utilizadas em outros aquivos de projetos
Já a palavra-chave "class" é utilizada para definir uma classe em TypeScript.*/

export class Player {
    healDamage(heal: any) {
        throw new Error("Method not implemented.");
    }
    /*A palavra-chave "public" é usada para definir propriedades píblicas da classe
    permitindo que elas seja acessadas e modificadas de fora da classe.*/

    //atributos da classe Player
    public name: string;
    public health: number;
    public level: number;


    //CONSTRUTOR CLASSE PLAYER

    /*O construtor é um método especial que é chamado quando uma nova instância da classe é criada.
    */

    constructor (name: string, health: number = 100, level: number = 1) {
    /*A palavra chave this é usada para referenciar a instância da classe atual
    pegue o heath por exemplo e de a ele o valor de 100 */

        this.name = name; //inicia o nome
        this.health = health; //inicia a vida
        this.level = level; //inicia o level
    }

    //METODOS DA CLASSE PLAYER
    /* Metodos sao funcoes que pertencem a uma classe e podem ser chamadas em instancias*/ 

    public attack(): string{
        //calcula o dano com base no nivel do player
        const damage = this.level * 10;
        /* A palavra-chave "return" é usada para retornar um valor de uma função ou metodo.*/
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /* O metodo takeDamage é usado para reduzir a vida do player que recebeu o dano */
    public takeDamage(damage: number): string{
        this.health -= damage;
        //realiza uma pesquisa se o player vai ter a vida =0 ou menor a 0 apos receber o dano
        if (this.health <= 0) {
            this.health = 0; //se a verificação funcionar isso garante que a vida ficara em 0
            //e o player que recebeu o dano vai morrer
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} levou ${damage} de dano! E agora tem ${this.health} de vida restante.`;
    }
    public heal(heal: number): string {
    // Adiciona o valor da cura à vida atual
    this.health += heal;

    // Define o teto máximo de vida (ex: 100) para evitar que passe do limite
    const maxHealth = 100;
    if (this.health > maxHealth) {
        this.health = maxHealth;
    }

    return `O player ${this.name} foi curado! E agora tem ${this.health} de vida restante.`;
}
}



