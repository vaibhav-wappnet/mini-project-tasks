
console.log("script lag gai bhai!");
// showAddFiles();

let getFile = document.getElementById("upload");
// console.log(getFile);

let addBtn = document.getElementById("btnAdd");

addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let files = localStorage.getItem("files");

    getFile.value == 0 ? alert("Please select a file") : alert(`${getFile.value} File added successfully!`);
    files === null ? filesObj = [] : filesObj = JSON.parse(files);
    filesObj.push(getFile.value)

    localStorage.setItem("files", JSON.stringify(filesObj));
    getFile.value = null;
    console.log(getFile);
    console.log(filesObj);
    // console.log(localStorage);

    // showAddFiles();
});


const showAddFiles = () => {

    let files = localStorage.getItem("files");
    files === null ? filesObj = [] : filesObj = JSON.parse(files);

    let html = "";

    filesObj.forEach((file, index) => {
        html += `
            <div class="added-files">
                <ul>
                    <li>${index + 1}. ${file}</li>
                </ul>
            </div>
            <div class="buttons">
                <button class="btn" id="delete">delete</button>
                <button class="btn"id="re-upload">upload again</button>
            </div>`;
    });

    let fileElm = document.getElementById("files");
    // filesObj.length != 0 ? fileElm.innerHTML = html : fileElm.innerHTML = `No files uploaded here. <br> Use <b> add files </b> section to upload files`;

    // if (filesObj.length != 0) {
    //     fileElm.innerHTML = html;
    // }
    // else {
    //     fileElm.innerHTML = `No files uploaded here. <br> Use <b> add files </b> section to upload files`;
    // }
    fileElm.innerHTML = html;
}

showAddFiles();


