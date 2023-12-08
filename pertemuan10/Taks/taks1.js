
function showDownload(result){
    console.log("Download selesai");
    console.log("hasil download"+ result);
}

function dowonload(callShowDownload) {
    setTimeout(function(){
        const result= "windows-11.exe";
        callShowDownload(result);
    },3000);
};

dowonload(showDownload);


