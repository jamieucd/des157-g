
'use strict';

document.querySelector('#s').addEventListener('click', processForm);

function processForm(evt){

  var name = document.querySelector('#name').value;
  var genre = document.querySelector('#genre').value;
  var lead = document.querySelector('#lead').value;
  var adj = document.querySelector('#adj').value;
  var emo = document.querySelector('#emo').value;
  var favArtist = document.querySelector('#favArtist').value;

    var myMsg=document.querySelector('#myMsg');

    console.log(genre + ':genre')

    if (genre=='horror'){
      myMsg.innerHTML= 'booo!';
    } else {
      myMsg.innerHTML= 'Congratulation on the release of your movie '+name+'! According to New York Times review, it is one of the hottest '+genre+' movies of the year! Starring '+lead +' as the lead character in this '+adj+' movie that will leave audiences feeling '+emo+'! Produced, written, choreographed, and scored by '+favArtist+'.';
    }

msgSection.className='show';
    evt.preventDefault();
    return false;
  }
