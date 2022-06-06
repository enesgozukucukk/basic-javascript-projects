const reviews = [
    {
      id: 1,
      name: "ebru batur",
      job: "mother of two guinea pigs",
      img:
        "ebru2.jpg",
      text:
        "Proud guinea pig mom. A smart and funny woman. Leader of the Gen-Z",
    },
    {
      id: 2,
      name: "muhammed celik",
      job: "bartender",
      img:
        "mami2.jpg",
      text:
        "He describes his music style as 'High-Tech Minimal.' He has performed at clubs and festivals around the world, including Tomorrowland, Timewarp and Exit festival. Smokes a lot. Has 1.95 height.",
    },
    {
      id: 3,
      name: "perit ozen",
      job: "keke",
      img:
        "perit2.jpg",
      text:
        "Obsessed with bodybuilding. Best friend ever.",
    },
    {
      id: 4,
      name: "ege sengezgin",
      job: "father of pascal",
      img: "ege2.jpg",
      text:
        "Always hangs out in his office but nobody knows what he is doing.",
    },
    {
      id: 5,
      name: "simge ingun",
      job: "feminist",
      img: "simge2.jpg",
      text:
      "Silly but the sweetest person in the world."
    },
    {
      id: 6,
      name: "berkay yamaner",
      job: "academician",
      img: "berkay2.jpg",
      text: 
      "He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI."
    },
    {
      id:7,
      name: "yagmur turkmen",
      job: "Professional Protestor",
      img: "yagmur2.jpg",
      text:
      "She is going abroad soon. Loves wrestling."
    }
  ];
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  let currentItem = 0;

  window.addEventListener("DOMContentLoaded", function(){
       
    showPerson();
  });

  function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  nextBtn.addEventListener("click", function(){
      currentItem++;
      if(currentItem > (reviews.length-1)){
          currentItem = 0;
      }
      showPerson();
  });
  prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
});
  randomBtn.addEventListener("click", function(){
      currentItem = Math.floor(Math.random()*reviews.length);
      showPerson();
  })