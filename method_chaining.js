// Input:
// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

// Output:
// 143545000


function computeAmount() {
    const temp = {
        total : 0,
        thousand: function(num) {
            this.total = this.total + num * Math.pow(10,3);
            return this;
        },
        lacs: function(num) {
            this.total = this.total + num * Math.pow(10,5);
            return this;
        },
        crore: function(num) {
            this.total = this.total + num * Math.pow(10,7);
            return this;
        },
        value: function() {
            return this.total;
        }
    }

    return temp;
}

const total =  computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(total);