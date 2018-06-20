const createAccount = amount => {
  let balance = 0
  let depositHistory = []

  return {
    deposit: (num) => {
      balance += num
      depositHistory.push({type: 'deposit', amount: num})
    },
    withdraw: (num) => {
      balance -= num
      depositHistory.push({type: 'withdrawal', amount: num})
    },
    getBalance: () => {
      return balance
    },
    getHistory: () => {
      return deepCopy(depositHistory)
    }
  }
}

function deepCopy (arr) {
	var out = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		var item = arr[i];
		var obj = {};
		for (var k in item) {
			obj[k] = item[k];
		}
		out.push(obj);
	}
    return out;
}

const account = createAccount()
const checking = createAccount()
