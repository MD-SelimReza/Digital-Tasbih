const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrementBtn = document.getElementById('alhamdulillahIncrementBtn');
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrementBtn');

const allahuakbarDisplay = document.getElementById('allahuakbarDisplay');
const allahuakbarIncrementBtn = document.getElementById('allahuakbarIncrementBtn');
const allahuakbarDecrementBtn = document.getElementById('allahuakbarDecrementBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let allhamdulillahInitialValue = 0;
let allahuakbarInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert`Subhan Allah Complete.`;
    }

    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

subhanAllahDecrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert`You can't added negative value.`;
    }

    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

alhamdulillahIncrementBtn.addEventListener('click', function () {
    if (allhamdulillahInitialValue === 33) {
        return alert`Allhamdulillah Complete.`;
    }

    allhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = allhamdulillahInitialValue;
})

alhamdulillahDecrementBtn.addEventListener('click', function () {
    if (allhamdulillahInitialValue === 0) {
        return alert`You can't added negative value.`;
    }

    allhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = allhamdulillahInitialValue;
})

allahuakbarIncrementBtn.addEventListener('click', function () {
    if (allahuakbarInitialValue === 33) {
        return alert`Allahuakbar Complete.`;
    }

    allahuakbarInitialValue += 1;
    allahuakbarDisplay.innerText = allahuakbarInitialValue;
})

allahuakbarDecrementBtn.addEventListener('click', function () {
    if (allahuakbarInitialValue === 0) {
        return alert`You can't added negative value`;
    }

    allahuakbarInitialValue -= 1;
    allahuakbarDisplay.innerText = allahuakbarInitialValue;
})

resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuakbarDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    allhamdulillahInitialValue = 0;
    allahuakbarInitialValue = 0;
})


