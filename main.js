

// 86f04071ea234cd5b03be4c073a1e6c5
async function getCoreData() {
    const aaplQuoteAPI = 'https://api.twelvedata.com/quote?symbol=AAPL&apikey=86f04071ea234cd5b03be4c073a1e6c5';
    const aaplPriceAPI = 'https://api.twelvedata.com/price?symbol=AAPL&apikey=86f04071ea234cd5b03be4c073a1e6c5';


    const aaplName = await fetch(aaplQuoteAPI).then(res => res.json()).then(data => data.name);
    const aaplTicker = await fetch(aaplQuoteAPI).then(res => res.json()).then(data => data.symbol);
    const aaplExchange = await fetch(aaplQuoteAPI).then(res => res.json()).then(data => data.exchange);
    const aaplPrice = await fetch(aaplPriceAPI).then(res => res.json()).then(data => data.price);
    const aaplPercent = await fetch(aaplQuoteAPI).then(res => res.json()).then(data => data.percent_change);

    console.log(aaplName, aaplTicker, aaplExchange, aaplPrice, aaplPercent)
}

getCoreData();




Promise.all([
    // fetch(aaplQuote).then(r => r.json()),
    // fetch(aaplPrice).then(r => r.json())

])
    .then(coreData => {
        // const portList = document.querySelector('.portfolio-list');
        // const portListItem = document.querySelector('.portfolio-list-item');

        // portList.innerHTML = '';

        // portList.innerHTML = `
        //     <li class="portfolio-list-item">
        //         <div class="portfolio-company-field">
        //             <span>${data.name}</span>
        //         </div>
        //         <div class="portfolio-ticker-field">
        //             <span>${data.symbol}</span>
        //         </div>
        //         <div class="portfolio-exchange-field">
        //             <span>${data.exchange}</span>
        //         </div>
        //         <div class="portfolio-price-field">
        //             <span>-</span>
        //         </div>
        //         <div class="portfolio-percent-field">
        //             <span>${data.percent_change}</span>
        //         </div>
        //     </li>

        // `;

        // console.log(coreData)


    })



// .then(responses => Promise.all(responses.map(res => res.json())))