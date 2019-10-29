// Classes
class MudaCor {
    constructor() {
        this.r = this.geraNumero(255);
        this.g = this.geraNumero(255);
        this.b = this.geraNumero(255);
    };

    geraNumero(num) {
        return Math.floor(Math.random() * num);
    };

    geraRGB() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
};
