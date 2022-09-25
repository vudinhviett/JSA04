/** 
 * API: Giao diện lập trình ứng dụng
*/
/**
 * @param {string} selector .class, #id, [name="abc"], ..etc
 * @return Html element
 */

const select = (selector) => document.querySelector(selector);


const baseUrl = 'https://633020b8f5fda801f8db1f9f.mockapi.io'
const endpoint = 'students'

const getData = async () => {
    try {
        const res = await fetch(baseUrl + '/' + endpoint, {
            method: 'GET'
        });
        const data = await res.json();
        console.log('Data: ', data);
        const studentListDoc = select('.student-list');
        studentListDoc.innerHTML = '';
        for (let x of data) {
            studentListDoc.innerHTML += `<p>${x.name}</p>`;
        }
    } catch (e) {
        console.log(e);
    }
};
const getStudenListBtn = select('#get-student-list-btn');
getStudenListBtn.onclick = () => {
    getData();
};

select('#create-new-student-btn').onclick = () => {
    fetch(baseUrl + '/' + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: select('#new-student-name').value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            alert('Thêm mới thành công')
        })
        .catch((e) => console.log(e))
}
    