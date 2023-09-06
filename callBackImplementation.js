//task
// 1.  write a function to download a file from a url.
//2.  write a function to save that downloaded data in a file and return thet filename 
//3   write a function to uoload the file written in prev step to new url;



function download(url, callBack){
    // dummy downloader function it will download content from given url.
    console.log("starting downloading from",url);
    setTimeout(function down(){
        console.log("download complete after 5 second from",url);
        let content="ABCDEF"; // dummy downloaded data
        callBack(content);
        
    },5000);
}

function writeFile(data,cb){
    // writes the given data into a new file;
    console.log("started writing file name",data);
    setTimeout(function write(){
        console.log("writing file completed");
        let fileName="file.txt";
        cb(fileName);
    },5000);
}

function uploadFile( url,data,cb){
    // upload the data from a file to a given url;
    console.log("started file upload",data, "on",url);
    setTimeout(function upload(){
        console.log("uploading of file completed");

        const response="success";
        cb(response);
        

    },5000);
}

download("www.xyz.com", function processDownload(content){
    console.log("we are now going to process the downloaded content",content);
    writeFile(content, function processWrite(fileName){
        console.log("we have downloaded and written the content, now will upload");
        uploadFile("www.upload.com",fileName,function  processUpload(response){
            console.log("uploading status", response);
        
        });

    })
});

// here we can see the call back hell. 
/**
 * In the call back of download function we have written writeFile function and 
 * In the call Back of the writeFile function we have written the uploadFile function.
 * This is a classical example of call Back Hell;
 */

/**
 * We can also see the inversion of control here. because always a call back function is called in function decleration.
 * what if they don't call the call back or they call the call back twice or thrice.
 * 
 * So, here we are giving control of our call back function to someone else. 
 * And we dont know how they will use the our call back function
 */



