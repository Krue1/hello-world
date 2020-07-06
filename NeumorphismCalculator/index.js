const vm = new Vue({
  el: '#calculator',
  data: {
    equation: '0',
    isDecimalAdded: false,
    isOperatorAdded: false,
    isStarted: false,
  },
  methods: {
    // When pressed 'AC'
    clear() {
      this.equation = '0';
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;
      this.isStarted = false;
    },
    // check if the character is [+,-,*,/]
    isOperator(character) {
      return ['+', '-', '×', '÷'].includes(character);
    },
    append(character) {
      //start
      if (this.equation === '0' && !this.isOperator(character)) {
        if (character !== '.') {
          this.equation = String(character);
        } else {
          this.equation += character;
          this.isDecimalAdded = true;
          this.isOperatorAdded = true;
        }
        this.isStarted = true;
        return;
      }

      // If enter number
      if (!this.isOperator(character)) {
        if (character !== '.') {
          this.equation += String(character);
          this.isOperatorAdded = false;
        }
        if (
          character === '.' &&
          !this.isDecimalAdded &&
          !this.isOperatorAdded
        ) {
          this.equation += String(character);
          this.isDecimalAdded = true;
          this.isOperatorAdded = true;
        }
        return;
      }

      //Added operator
      if (this.isOperator(character)) {
        //two operators appear together
        if (this.isOperatorAdded) {
          this.equation = this.equation.split('');
          this.equation[this.equation.length - 1] = character;
          this.equation = this.equation.join('');
        } else {
          this.equation += character;
          this.isDecimalAdded = false;
          this.isOperatorAdded = true;
        }
        return;
      }
    },
    // When pressed '±'
    toggle() {
      if (this.isStarted) {
        if (this.isOperatorAdded) {
          this.equation = this.equation.split('');
          this.equation.splice(this.equation.length - 1, 1);
          this.equation = this.equation.join('');
          this.equation += '*(-1)';
          this.calculate();
        } else {
          // this.equation = this.equation.split('');
          // let lastOperatorPosition = 0;
          // for (let i = 0; i < this.equation.length - 1; i++) {
          //   if (this.isOperator(this.equation[i])) {
          //     lastOperatorPosition = i;
          //   }
          // }
          // if (this.equation[lastOperatorPosition + 1] !== '-') {
          //   this.equation.splice(lastOperatorPosition + 1, 0, '-');
          // } else {
          //   this.equation.splice(lastOperatorPosition + 1, 1);
          // }
          // this.equation = this.equation.join('');
          this.equation = this.equation.split('');
          if (this.equation[0] === '-') {
            this.equation.splice(0, 1);
          } else {
            this.equation.splice(0, 0, '-');
          }
          this.equation = this.equation.join('');
        }
      }
    },
    calculatePercentage() {
      if (this.isOperatorAdded && !this.isDecimalAdded) {
        this.equation += '0.01';
      } else {
        this.equation += '*0.01';
        this.calculate();
      }
      if (this.equation.split('').includes('.')) {
        this.isDecimalAdded = true;
      }
    },
    calculate() {
      let result = this.equation.replace(/×/g, '*').replace(/÷/g, '/');
      this.equation = parseFloat(eval(result).toFixed(9)).toString();
      if (this.equation.length > 11) {
        this.equation = Number(this.equation).toExponential(3).toString();
      }
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;

      if (this.equation.split('').includes('.')) {
        this.isDecimalAdded = true;
      }
    },
  },
});
