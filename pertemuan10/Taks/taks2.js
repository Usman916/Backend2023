//Refactored code with Promise and ES6 features

const showDownload = (result) => {
    console.log(`Download selesai. Hasil Download: ${result}`);
};

const download = async () => {
await new Promise((resolve) => {
    setTimeout(() => {
        resolve("windows-10.exe");
    }, 3000);
    });

    showDownload("windows-10.exe");
};

download();
