let resourcePath = "../../resources"
const avatarNameList = ["bird_main.webp", "bird_girl.webp", "bird_glasses.webp", 
"bird_afro.webp", "bird_french.webp", "dog.webp", "fox.webp", "ghost.webp", "bear.webp", "bee.webp", "cat.webp", "snowman.webp"];

function AvatarList() {
    return avatarNameList;
}

function avatarPath(avatarName){
    return require(`${resourcePath}/Avatars/${avatarName}`);
}

function imagePath(imgName){
    return `${resourcePath}/${imgName}`;
}

function resetResourcePath(){
    resourcePath = "../../resources";
}

function setResourcePath(newPath){
    resourcePath = newPath;
}

export default {AvatarList, avatarPath, imagePath, resetResourcePath, setResourcePath};