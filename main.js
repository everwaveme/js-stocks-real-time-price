const applUrl = 'link';

// fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.c)
//     })

fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=cq21q99r01ql95ncg0tgcq21q99r01ql95ncg0u0')
    .then(res => res.json())
    .then(data => {
        console.log(data.dp)
    })

// fetch('https://api.twelvedata.com/logo?symbol=CP&apikey=86f04071ea234cd5b03be4c073a1e6c5')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.url)
//     })




// 86f04071ea234cd5b03be4c073a1e6c5