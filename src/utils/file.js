import fs from 'fs';
import path from 'path';

export const FilterFiles = (filePath, validate)=>{
    const fileNames = [];
    
    const files = fs.readdirSync(filePath);
    // if(validate && typeof(validate) != 'function') validate = ()=>validate;
    // files.map(fileName=>{
    //     var filedir = path.join(filePath, fileName);
    //     states = fs.statSync(filedir)
    //     if(states.isDirectory()) fileNames = fileNames.concat(FilterFiles(filedir, validate));
    //     else if(validate(filedir)) fileNames.push(filedir)
    // });
    return fileNames
}
