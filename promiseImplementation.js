//task(do not use promises)
// 1.  write a function to download a file from a url.
//2.  write a function to save that downloaded data in a file and return thet filename 
//3   write a function to uoload the file written in prev step to new url;

function downloadFile(url){
    
   return new Promise(function exec(resolve, reject){
    console.log("started downloading data from",url);
        setTimeout(function download(){
            console.log("downlaoding of content completed");
            let content="abcdef"
           
            resolve(content);

        },5000);
   });
}

function writeFile(data){
    
    return new Promise(function exec(resolve, reject){
        console.log("started writing file",data);
        setTimeout(function write(){
            console.log("writing of the file completed ");
            let fileName="file.txt";
            

            resolve(fileName);
            

        },5000);
    });
}


function uploadFile(url,fileName){
    
    return new Promise(function exec(resolve,reject){
        console.log("started uploading file",fileName,"on",url);
        setTimeout(function upload(){
            console.log("uploading  of file   is done.");
            let response="SUCCESS";
            resolve(response);
        },5000 );

    });
}

downloadFile("www.xyz.com")
.then(function processDownload(value){
    console.log("file has already been downloaded with content", value);
    return writeFile(value);
})
.then(function processWrite(value){
    console.log("writing of file is done and its name is",value)
    return uploadFile("www.upload.com",value);
})
.then( function processUpload(value){
    console.log("we have uploaded with",value);
})