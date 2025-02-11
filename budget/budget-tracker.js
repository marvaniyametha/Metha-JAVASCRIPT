let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");

let budgetAmount = 0;

// Set Budget
totalAmountButton.addEventListener("click", () => {
    const budgetValue = parseFloat(totalAmount.value);
    if (isNaN(budgetValue) || budgetValue <= 0) {
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        budgetAmount = budgetValue;
        amount.innerText = budgetAmount;
        balanceValue.innerText = budgetAmount - parseFloat(expenditureValue.innerText);
        totalAmount.value = "";
    }
});

// Add Expense to List
checkAmountButton.addEventListener("click", () => {
    const expenseTitle = productTitle.value;
    const expenseAmount = parseFloat(userAmount.value);

    if (!expenseTitle || isNaN(expenseAmount) || expenseAmount <= 0) {
        productTitleError.classList.remove("hide");
        return;
    }

    productTitleError.classList.add("hide");
    const currentExpenditure = parseFloat(expenditureValue.innerText) + expenseAmount;
    expenditureValue.innerText = currentExpenditure;
    balanceValue.innerText = budgetAmount - currentExpenditure;

    const listItem = document.createElement("div");
    listItem.classList.add("sublist-content");
    listItem.innerHTML = `
        <p class="product">${expenseTitle}</p>
        <p class="amount">${expenseAmount}</p>
        <button class="edit fa-solid fa-pen-to-square"></button>
        <button class="delete fa-solid fa-trash-can"></button>
    `;
    list.appendChild(listItem);

    // Add event listeners for dynamically created buttons
    listItem.querySelector(".edit").addEventListener("click", () => editExpense(listItem, expenseTitle, expenseAmount));
    listItem.querySelector(".delete").addEventListener("click", () => deleteExpense(listItem, expenseAmount));

    // Clear input fields
    productTitle.value = "";
    userAmount.value = "";
});

// Edit Expense
function editExpense(listItem, title, amount) {
    productTitle.value = title;
    userAmount.value = amount;
    listItem.remove();
    updateBudgetAfterExpense(amount, false);
}

// Delete Expense
function deleteExpense(listItem, amount) {
    listItem.remove();
    updateBudgetAfterExpense(amount, true);
}

// Update Budget and Expenses
function updateBudgetAfterExpense(amount, isDelete) {
    const currentExpenditure = parseFloat(expenditureValue.innerText);
    const newExpenditure = isDelete ? currentExpenditure - amount : currentExpenditure + amount;
    expenditureValue.innerText = newExpenditure;
    balanceValue.innerText = budgetAmount - newExpenditure;
}
