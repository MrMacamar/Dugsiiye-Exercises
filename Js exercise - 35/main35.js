function changeImg(){
    const image = document.querySelector('#image');

    // Url

    const url = prompt("Enter your new photo!");
    const border = prompt("Enter the border measure!")
    const padding = prompt("Enter the padding measure!")
    const bgColor = prompt("Enter your background-color color!")
    const widthImg = prompt("Enter your Width ratio!")
    const heightImg = prompt("Enter your Height ratio!")
    const borderRadius= prompt("Enter your border-radius measure!")
    


    image.src = url;

    // style
    image.style.border = `${border}px solid blue`;
    image.style.backgroundColor = bgColor;
    image.style.padding = `${padding}px`;
    image.style.width = `${widthImg}px`;
    image.style.height = `${heightImg}px`;
    image.style.borderRadius = `${borderRadius}px`;
}