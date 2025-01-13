// sob section eh amra kichu ekta change korte cai

const section = document.querySelectorAll('section');
//console.log(section);
for(const x of section) {
    // console.log(x);
    // amra ekhan theke sections er moddhe change korte pari.
    x.style.border = '1px solid  blue';
    x.style.marginBottom = '5px';
    x.style.borderRadius = '10px';
    x.style.paddingLeft = '10px';
    x.style.backgroundColor = 'lightgray';

}

const placeContainer = document.getElementById('place-container')

placeContainer.style.backgroundColor = 'yellow';

// const placeContainer = document.getElementsByClassName('.yellow-bg');
// placeContainer.style.backgroundColor = 'green';