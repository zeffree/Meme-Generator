let img = document.getElementsByTagName('img');
let form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    //Create New Meme Elements on Click
    let newMeme = document.createElement('div');
    let topTxt = document.createElement('div');
    let btmTxt = document.createElement('div');
    let memeImg = document.createElement('img');
    let btn = document.createElement("button");
    btn.innerText = "Remove This Meme";
    


    //Retrieve Values from Input
    memeImg.src = document.getElementById('imgurl').value;
    topTxt.innerText = document.getElementById('toptext').value;
    btmTxt.innerText = document.getElementById('btmtext').value;

    //Assign CSS ID to Text, Img, and Container
    topTxt.classList.add('toptxt');
    btmTxt.classList.add('btmtxt');
    memeImg.classList.add('memeimg');
    newMeme.classList.add('meme');

    //Add Remove Feature on Button
    btn.addEventListener("click", function(event) {
        event.target.parentElement.remove();
      });

    //Append Top and Btm Text to Meme
    newMeme.appendChild(topTxt);
    newMeme.appendChild(btmTxt);
    newMeme.appendChild(memeImg);
    newMeme.appendChild(btn);


    //Append Output to Show New Meme
    let memeOutput = document.getElementById('memeoutput');
    memeOutput.appendChild(newMeme);
    
    //Clear inputs after user submit form
    form.reset();
})