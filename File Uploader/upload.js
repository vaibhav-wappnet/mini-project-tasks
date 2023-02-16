console.log("script lag gai bhai!");

let getFile = document.getElementById("upload");
let addBtn = document.getElementById("btnAdd");
let fileText = document.getElementById("fileText");
// console.log(fileText.value);
// console.log(getFile);

addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let files = localStorage.getItem("files");
    // console.log(files);

    if (getFile.value == 0)
        return alert("Please select a file")
    else if (fileText.value == 0) {
        return alert("Please Enter the file name!")
    }
    files === null ? filesObj = [] : filesObj = JSON.parse(files);
    filesObj.push(getFile.value && fileText.value);

    localStorage.setItem("files", JSON.stringify(filesObj));
    getFile.value = null;
    fileText.value = "";

    // console.log(getFile);
    // console.log(filesObj);
    // console.log(localStorage);

    showAddFiles();
});


const showAddFiles = () => {

    let files = localStorage.getItem("files");
    files === null ? filesObj = [] : filesObj = JSON.parse(files);

    let html = "";

    filesObj.map((file, index) => {

        // console.log(file);

        html += `
            <div class="added-files">
                <ul>
                    <li>${index + 1}. ${file}</li>
                </ul>
                <button class="btn" id="delete" onclick="deleteFiles(this.id)">delete</button>
            </div>`;
    });

    let fileElm = document.getElementById("files");

    // console.log('fileElm', fileElm)

    filesObj.length != 0 ? fileElm.innerHTML = html : fileElm.innerHTML = `<p>No files uploaded here. <br> Use <b> add files </b> section to upload files</p>`;
}

// delete files

let deleteFiles = (index) => {
    let files = localStorage.getItem("files");
    files === null ? filesObj = [] : filesObj = JSON.parse(files);

    filesObj.splice(index, 1);
    localStorage.setItem("files", JSON.stringify(filesObj));

    // console.log(localStorage);

    showAddFiles();
}



// let uploadAgain = () => {

//     addBtn.addEventListener("click", (e) => {
        
//         e.preventDefault();
        
//         let files = localStorage.getItem("files");
//         // console.log(files);
        
//         if (getFile.value == 0)
//         return alert("Please select a file")
//         else if (fileText.value == 0) {
//             return alert("Please Enter the file name!")
//         }
//         files === null ? filesObj = [] : filesObj = JSON.parse(files);
//         filesObj.push(getFile.value && fileText.value);
        
//         localStorage.setItem("files", JSON.stringify(filesObj));
//         getFile.value = null;
//         fileText.value = "";
        
//         // console.log(getFile);
//         // console.log(filesObj);
//         // console.log(localStorage);
        
//         showAddFiles();
//     });
//     deleteFiles();
//     showAddFiles();
// }

showAddFiles();
