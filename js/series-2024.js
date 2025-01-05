let showData = [
  {
    number: "s-001",
    title: "Big Mouth - Season 7",
    season: "",
    status: "new",
    genre: "comedy",
    star: "4.0",
    comment: "This is consistently a good show. And I feel like this season got out of the little slump they were in. Having the kids go off to high school is a good problem to have them all experience. The jokes are insane. I particularly enjoyed the focus on Caleb this season. It manages to make for a sweet yet silly time. It’s insanely self referential at this point but it’s okay for a fan like me."
  },
  {
    number: "s-002",
    title: "Gilmore Girls - Season 6-7",
    season: "",
    status: "new",
    genre: "drama",
    star: "3.0",
    comment: "To me, the show seems like it keeps rehashing the same storylines. Someone is jealous of someone. Someone keeps a little secret and it blows up onto a whole thing. The cycle repeats. I don’t feel like any of the characters have really had compelling arcs, really since Rory has been in college. The show was nice at first, but as it’s gone on, I think it’s just okay. Glad to be done."
  },
  {
    number: "s-003",
    title: "Gilmore Girls: A Year in the Life",
    season: "",
    status: "new",
    genre: "drama",
    star: "3.0",
    comment: "I actually really enjoyed the first two episodes. It was nice to see the characters in some new storylines with new challenges to face. Paris Geller completely stole the show and had some incredibly funny moments. However sweet the nostalgia factor was it also made the storytelling kind of weird. It was very convenient every character in the history of the show happened to be in town. It was convenient that Paris ran a fertility clinic. It was convenient Jess was in town because of some random mom sideline. There were a lot of excuses to get characters on screen and it felt forced. The final two episodes felt pretty clunky to me too. Characters doing a lot of things out of character. There were some surreal bits as well, which were an interesting swing, but ultimately a miss for me. The musical? Failed here and failed in Maisel years later. The 'bad boys' night out? Very silly and wholly cringeworthy. Rory writing Gilmore Girls? Bilbo did it first. Just kidding. It was fun. I’m not mad about it."
  },
  {
    number: "s-004",
    title: "Delicious in Dungeon",
    season: "",
    status: "new",
    genre: "fantasy",
    star: "4.5",
    comment: ""
  },
  {
    number: "s-005",
    title: "Three Body Problem",
    season: "",
    status: "new",
    genre: "sci-fi",
    star: "3.0",
    comment: ""
  },
  {
    number: "s-006",
    title: "Kids on the Slope",
    season: "",
    status: "new",
    genre: "drama",
    star: "4.0",
    comment: ""
  },
  {
    number: "s-007",
    title: "The Beatles: Get Back",
    season: "",
    status: "rewatch",
    genre: "documentary",
    star: "4.0",
    comment: ""
  },
  {
    number: "s-008",
    title: "Fallout",
    season: "",
    status: "new",
    genre: "sci-fi",
    star: "4.0",
    comment: ""
  },
  {
    number: "s-009",
    title: "Disclaimer",
    season: "",
    status: "new",
    genre: "drama",
    star: "3.0",
    comment: ""
  },
  {
    number: "s-010",
    title: "Seinfeld: Seasons 1 - 7",
    season: "",
    status: "new",
    genre: "comedy",
    star: "4.5",
    comment: ""
  },
  {
    number: "s-011",
    title: "Ted Lasso: Season 1",
    season: "",
    status: "new",
    genre: "comedy",
    star: "4.0",
    comment: ""
  }
  
];
  
let numberOfItems = showData.length;

console.log(numberOfItems);

// Access the DOM element where you want to display the number
const container = document.getElementById('numberOfItemsContainer');

// Create a new DOM element to display the number
const numberOfItemsElement = document.createElement('span');
numberOfItemsElement.textContent = `${numberOfItems}`;

// Append the new element to the container
container.appendChild(numberOfItemsElement);
