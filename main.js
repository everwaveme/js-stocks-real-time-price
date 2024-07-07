
async function getCoreData() {
    //API urls
    const aaplQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=AAPL&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const cpQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=CP&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const deQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=DE&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const googlQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=GOOGL&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const hdQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=HD&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const msftQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=MSFT&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const neeQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=NEE&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const tscoQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=TSCO&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const txnQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=TXN&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';
    const vooQuoteAPI = 'https://finnhub.io/api/v1/quote?symbol=VOO&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0';

    //Requests
    const aaplPrice = await fetch(aaplQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const aaplPercent = await fetch(aaplQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const cpPrice = await fetch(cpQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const cpPercent = await fetch(cpQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const dePrice = await fetch(deQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const dePercent = await fetch(deQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const googlPrice = await fetch(googlQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const googlPercent = await fetch(googlQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const hdPrice = await fetch(hdQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const hdPercent = await fetch(hdQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const msftPrice = await fetch(msftQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const msftPercent = await fetch(msftQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const neePrice = await fetch(neeQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const neePercent = await fetch(neeQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const tscoPrice = await fetch(tscoQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const tscoPercent = await fetch(tscoQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const txnPrice = await fetch(txnQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const txnPercent = await fetch(txnQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    const vooPrice = await fetch(vooQuoteAPI).then(res => res.json()).then(data => parseFloat(data.c).toFixed(2));
    const vooPercent = await fetch(vooQuoteAPI).then(res => res.json()).then(data => parseFloat(data.dp).toFixed(2));

    //Arrays for price and percent data
    const priceDataArr = [
        aaplPrice,
        cpPrice,
        dePrice,
        googlPrice,
        hdPrice,
        msftPrice,
        neePrice,
        tscoPrice,
        txnPrice,
        vooPrice
    ];

    const percentDataArr = [
        aaplPercent,
        cpPercent,
        dePercent,
        googlPercent,
        hdPercent,
        msftPercent,
        neePercent,
        tscoPercent,
        txnPercent,
        vooPercent
    ];

    //Loops for price and percent change
    const priceOutput = document.querySelectorAll('.price-output');
    const percentOutput = document.querySelectorAll('.percent-output');

    for (let i = 0; i < 10; i++) {
        priceOutput[i].textContent = priceDataArr[i];
        
        if (percentDataArr[i] > 0) {
            percentOutput[i].textContent = `+${percentDataArr[i]}%`;
        } else {
            percentOutput[i].textContent = `${percentDataArr[i]}%`;
        }

    }
    





    // const portList = document.querySelector('.portfolio-list');
    // // const portListItem = document.querySelector('.portfolio-list-item');

    // portList.innerHTML = '';


}

getCoreData();


