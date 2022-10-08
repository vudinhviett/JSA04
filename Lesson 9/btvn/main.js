const api = 'https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST/'
const overview = document.getElementById('data-overview')
const data_full = document.getElementById('data-city')
const getData = async () => {
    try {
        const res = await fetch(api, {
            method: 'GET'
        });
        const data = await res.json();
        console.log('Data: ', data);
        overview.innerHTML = `
        Tổng quan: <br>
        Ca mắc: ${data.infected} <br>
        Tử vong: ${data.deceased} <br>
        Hồi phục: ${data.recovered}
        `
        
        // studentListDoc.innerHTML = '';
        for (let x of data.detail) {
            data_full.innerHTML += `<td>${x.name}</td><td>${x.cases}</td><td>${x.death}</td><td>${x.casesToday}</td>`;
        }

    } catch (e) {
        console.log(e);
    }
};
getData()