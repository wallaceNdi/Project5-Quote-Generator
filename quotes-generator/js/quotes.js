/*
 Object of Quotes with different fragments or parts of sentences. The describe function
 uses Math.random to get a random number to a max of the length in the array
 newQuote then adds these fragments together and the value is returned
 */

let newQuote;
const Quotes = {
    init (fragmentList1, fragmentList2, fragmentList3, fragmentList4) {
        this.fragmentList1 = fragmentList1;
        this.fragmentList2 = fragmentList2;
        this.fragmentList3 = fragmentList3;
        this.fragmentList4 = fragmentList4;
    },
    describe: function () {
        const fragment1 = Math.floor(Math.random() * (this.fragmentList1.length));
        const fragment2 = Math.floor(Math.random() * (this.fragmentList2.length));
        const fragment3 = Math.floor(Math.random() * (this.fragmentList3.length));
        const fragment4 = Math.floor(Math.random() * (this.fragmentList4.length));
        newQuote = (this.fragmentList1[fragment1] + " " + this.fragmentList2[fragment2] + " " + this.fragmentList3[fragment3] + this.fragmentList4[fragment4]);
        return newQuote;
    }
};

const wisdom = Object.create(Quotes);
wisdom.init([
        "Hold fast to dreams",
        "Count your age by friends",
        "Turn your wounds into wisdom",
        "Never laugh at live dragons"
    ],
    [
        "life is a broken-winged bird",
        "count your life by smiles",
        "angry people are not always wise"
    ],
    [
        "that cannot fly",
        "not tears",
        "Think before you speak"
    ],
    [
        "!",
        ".",
        "!!"
    ]);

const faith = Object.create(Quotes);
faith.init(
    [
        "Believe in yourself",
        "Keep your dreams alive",
        "Remember all things are possible"
    ],
    [
        " Have faith in your abilities",
        "To achieve anything requires faith",
        "We do what we want to do"
    ],
    [
        "With confidence you can be successful",
        "Belief in yourself, vision and hard work",
        "And become successful"
    ],
    [
        "!",
        "."
    ]
);

const p = document.createElement('p');
const button = document.createElement('button');
const removeQoutebutton = document.createElement('button');
const container = document.getElementById('quote_container');
const form = document.createElement('form');
const amountInput = document.createElement('input');
const qouteOption = document.getElementById('preference-qoute');

amountInput.setAttribute('type', 'text');
amountInput.setAttribute('value', '');
amountInput.setAttribute('placeholder', 'number of quote');

container.appendChild(p);

container.appendChild(form);
form.appendChild(amountInput);;
removeQoutebutton.innerHTML = 'remove Quote';

let startMessage = 'Select the amount of quotes below then choose quote type above';

let errorValue = 'warning select between 1 and 5 quotes';

p.innerHTML = startMessage;
p.className = "message";

/*
 Creates a  label
 */
function createLabel() {
   
    label = document.createElement('label');
    label.setAttribute('for', value);
    label.innerHTML = text;
    form.appendChild(label);
    
}

// dropdown form to select quote type
 qouteOption.addEventListener('change',($event) => {
    $event.preventDefault();
  let quote = $event.target.value

      amountOfQuote(quote)
})

/*
 Select the amount of quotes to be printed 
 */
function amountOfQuote(quote) {
    amountInput.setAttribute('value', amountInput.value);
    let amount = amountInput.value;
    p.className = "error";
    if (amount > 5 || amount <= 0) {
        p.innerHTML = errorValue;
    } else {
        p.innerHTML = '';
        p.className = "quote";
        for (let i = 0; i < amountInput.value; i += 1) {
            showQuotes(quote);

        }
        amountInput.value = '';
       form.appendChild(removeQoutebutton);
       
    }

}
/*
 print the quote depending on which quote has been choosen
 */
function showQuotes(quote) {
    if (quote === 'faith') {
        p.innerHTML += faith.describe() + "<br>";
    } else {
        p.innerHTML += wisdom.describe() + "<br>";
    }
}

/*
 event listener that clears the quotes should the user decide he doesn't
 want to see any more quotes. Once clicked this button is then removed
 */
removeQoutebutton.addEventListener('click', ($event) => {
    $event.preventDefault();
    p.innerHTML = startMessage;
    removeQoutebutton.remove();
    p.className = "message";
});

