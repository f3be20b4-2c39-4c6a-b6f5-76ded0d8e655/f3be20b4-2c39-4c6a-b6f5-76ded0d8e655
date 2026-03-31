export const GETDATA=(LINK,NAME,CALLBACK)=>{

    const DATA={
        "spreadsheetUrl":LINK,
        "sheetName":NAME
    };

    FETCH(GETDATABASELINK,DATA,(data)=>{

        CALLBACK(data);

    });

};