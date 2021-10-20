import { observable, action, makeObservable, autorun, set } from 'mobx';
class MainStore {
    @observable result = '0';
    @observable _text = '0';
    @observable operator = '0';
    @observable temp1 = '0';
    @observable resultText = "0";
    @observable kontrol = "0";

    @action setText(text, text1) {
        this._text = text;
        this.resultText = text1;

    }

    @action setOperator(operator) {
        if (this.operator == "0") {
            this.operator = operator;
            this.temp1 = this._text;
            this._text = this._text + " " + this.operator;
            this.resultText = "";
            if (this.result != "0") {
                this._text = this.result + " " + this.operator;
                this.kontrol = this.result;
            }
        }


    };

    @action getText() {
        if (this.operator == "/") {
            if (this.kontrol != "0") {
                this.operator = "0";
                return this.result = parseFloat(this.result / this.resultText).toFixed(2);
            } else {
                this.operator = "0";
                return this.result = parseFloat(this.temp1 / this.resultText).toFixed(2);
            }
        } else if (this.operator == "X") {
            if (this.kontrol != "0") {
                this.operator = "0";
                return this.result = parseFloat(parseFloat(this.result) * parseFloat(this.resultText)).toFixed(2);
            } else {
                this.operator = "0";
                return this.result = parseFloat(parseFloat(this.temp1) * (this.resultText)).toFixed(2);
            }
        } else if (this.operator == "-") {
            if (this.kontrol != "0") {
                this.operator = "0";
                return this.result = parseFloat(this.result - this.resultText).toFixed(2);
            } else if (this._text == "10 -BEN") {
                return this.result = "Bir hiç..."
            } else {
                this.operator = "0";
                return this.result = parseFloat(this.temp1 - this.resultText).toFixed(2);
            }
        } else if (this.operator == "+") {
            if (this.kontrol != "0") {
                this.operator = "0";
                return (this.result = parseFloat(parseFloat(this.result) + parseFloat(this.resultText))).toFixed(2);
            } else {
                this.operator = "0";
                return this.result = parseFloat(parseFloat(this.temp1) + parseFloat(this.resultText)).toFixed(2);
            }
        } else if (this.operator == "%") {
            if (this.kontrol != "0") {
                console.log("if")
                this.operator = "0";
                return this.result = Math.floor(this.result % this.resultText);
            } else {
                this.operator = "0";
                console.log("else")
                this.result = Math.floor(this.temp1 % this.resultText);
                console.log(this.result);
                if (this.result == 0) {
                    this.operator = "0";
                    console.log("else içi if");
                    return this.result = "0";
                } else {
                    this.operator = "0";
                    console.log("else içi else");
                    return this.result;
                }


            }
        }
    }

    @action removeString() {
        if (this._text != "0") {
            if (this._text.length == 1) {
                this._text = "0";
                this.resultText = "0";
                return this._text && this.resultText;
            }
            else {
         
                this._text = this._text.slice(0, -1);
                this.resultText = this.resultText.slice(0, -1);
                return this._text && this.resultText;
            }
        }
        else {
            if (this._text.length == 1) {
                return this._text = "0";
            }
        }

    }

    constructor() {
        makeObservable(this)
    };
}

export default new MainStore();
