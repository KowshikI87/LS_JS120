/* eslint-disable max-len */
// eslint-disable-next-line max-lines-per-function
function createInvoice(services = {}) {
  let invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    amountRemaining: 0,

    total() {
      return this.phone + this.internet;
    },

    updateAmountRemaining(amount) {
      this.amountRemaining += amount;
      if (this.amountRemaining < 0) {
        this.amountRemaining = 0;
      }
    },

    addPayment(payment) {
      this.updateAmountRemaining(-payment.total());
    },

    addPayments(payments) {
      payments.forEach(payment => {
        this.updateAmountRemaining(-payment.total());
      });
    },

    amountDue() {
      return this.amountRemaining;
    }

  };
  //initialize amountRemaining
  invoice.updateAmountRemaining(invoice.total());
  return invoice;
}


function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return services.amount || (this.phone + this.internet);
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0

//LS solution works too but it looks like we hhahave complete different ways
//of doing this problem
//they don't keep amount remaining as a property but instead keep payments instead