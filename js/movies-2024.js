let showData = [
  {
    number: "m-001",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "fantasy",
    status: "rewatch",
    director: "Peter Jackson",
    star: "5.0",
    comment: "An all time favorite. This movie, despite it’s insane run time, keeps me entirely captivated. The arc is perfect. Filled with action, world-building, foreboding stakes, heart, and plenty of tearful moments. It’s fantastic.",
    year: "2001"
  },
  {
    number: "m-002",
    title: "The Lord of the Rings: The Two Towers",
    genre: "fantasy",
    status: "rewatch",
    director: "Peter Jackson",
    star: "3.5",
    comment: "Perhaps it’s the fault of the Extended Edition. The pacing in this movie is terrible. The characters feel like they are meandering. The plot is slow. New characters are not as compelling as the first film. Gollum can be very annoying. The Rohan characters unfortunately don’t feel like they get their due. Helms Deep is cool but is it worth it? Not really. You need this movie to set up the trilogy but this one feels the sloppiest of the bunch.",
    year: "2002"
  },
  {
    number: "m-003",
    title: "The Lord of the Rings: The Return of the King",
    genre: "fantasy",
    status: "rewatch",
    director: "Peter Jackson",
    star: "4.5",
    comment: "Some clumsy moments. Saurman is handled poorly. But the second half of this movie is fantastic. The weight of the journey is so large. The return home is bittersweet and wonderful. Lots of tears. This is the one.",
    year: "2003"
  },
  {
    number: "m-004",
    title: "Rushmore",
    genre: "comedy",
    status: "new",
    director: "Wes Anderson",
    star: "3.5",
    comment: "The jump from Bottle Rocket to this is so significant. All of a sudden the Wes Anderson vibe is here. The close ups. The use of clean type and single, packed with information, shots. The symmetry. It was enjoyable. Two jerks fighting over a grieving girl. Great style. Some good dry jokes. I found the characters to be pretty unlikable even if that was the joke. But it was good. I’d like to see it again. Jason Schwartzman was fantastic.",
    year: "1998"
  },
  {
    number: "m-005",
    title: "Frances Ha",
    genre: "drama",
    status: "rewatch",
    director: "Noah Baumbach",
    star: "5.0",
    comment: "",
    year: "2012"
  },
  {
    number: "m-006",
    title: "Manhattan",
    genre: "drama",
    status: "new",
    director: "Woody Allen",
    star: "3.0",
    comment: "",
    year: "1979"
  },
  {
    number: "m-007",
    title: "Saltburn",
    genre: "thriller",
    status: "new",
    director: "Emerald Fennell",
    star: "2.0",
    comment: "Boy, this movie is a mess. Let’s start with the positive: the visuals are quite nice. The graphic design is also quite nice. However, the individual visual elements, while might be nice, do not mesh together at all. I found them to be at odds and not contributing to the overall feeling of the story. The shots were incredibly dark, for no discernible reason, often. The plot is a mess. The twists are just fine and not worth the pay off. You want me to think this kid is some kind of mastermind skulking and moping around the castle? Get the fuck out of here. Additionally, the movie so badly wants you to believe it’s 2006 for no reason at all. What does it matter that this story took place then? It’s completely irrelevant but every 15 minutes they’re making sure you hear MGMT or showing you Superbad. It’s incredibly unconvincing. Everything about this feels like a modern film. Contrast this with something like The Holdovers and it’s so glaring. Anyway, this was shockingly bad, not even interestingly provocative, and visually inconsistent. I don’t understand the hype.",
    year: "2023"
  },
  {
    number: "m-008",
    title: "Blank City",
    genre: "documentary",
    status: "new",
    director: "Celine Danhier",
    star: "3.0",
    comment: "",
    year: "2010"
  },
  {
    number: "m-009",
    title: "The Favourite",
    genre: "drama",
    status: "new",
    director: "Yorgos Lanthimos",
    star: "4.5",
    comment: "",
    year: "2018"
  },
  {
    number: "m-010",
    title: "127 Hours",
    genre: "drama",
    status: "rewatch",
    director: "Danny Boyle",
    star: "4.0",
    comment: "",
    year: "2010"
  },
  {
    number: "m-011",
    title: "Steve Jobs",
    genre: "drama",
    status: "rewatch",
    director: "Danny Boyle",
    star: "4.0",
    comment: "",
    year: "2015"
  },
  {
    number: "m-012",
    title: "T2: Trainspotting",
    genre: "drama",
    status: "rewatch",
    director: "Danny Boyle",
    star: "3.0",
    comment: "",
    year: "2017"
  },
  {
    number: "m-013",
    title: "The Royal Tennenbaums",
    genre: "drama",
    status: "rewatch",
    director: "Wes Anderson",
    star: "4.5",
    comment: "I used to really love this film. Perhaps I just wasn’t in the mood for it today or perhaps my opinion of it has changed. Seriously dark for Wes, too. The color palatte is great. The cartoony nature of each character is great. The racist comments feel really unwarranted and out of nowhere. The exploration of dark topics, while maybe not the most nuanced are appreciated, I guess. I feel like I need to watch this again and soon.",
    year: "2001"
  },
  {
    number: "m-014",
    title: "Yesterday",
    genre: "fantasy",
    status: "rewatch",
    director: "Danny Boyle",
    star: "4.0",
    comment: "Is it corny? Yeah, definitely. Are there plot holes? Absolutely. Is there too much Ed Sheeran? Yeah. But it’s cute and a fun exploration of fun concept. One of Danny’s better films of magical realism or fantasy or whatever. It’s sweet, a simple romance story within a decent question. I laughed and enjoyed myself during this one and sometimes that’s enough!",
    year: "2019"
  },
  {
    number: "m-015",
    title: "Trainspotting",
    genre: "drama",
    status: "rewatch",
    director: "Danny Boyle",
    star: "5.0",
    comment: "Commentary version",
    year: "1997"
  },
  {
    number: "m-016",
    title: "Juno",
    genre: "drama",
    status: "rewatch",
    director: "Jason Reitman",
    star: "4.5",
    comment: "The dialog captures a moment in time so well, however it absolutely feels like a caricature of the time. However, the movie still has a lot of heart and the acting is quite fantastic. Everyone feels like a real person. The relationships make sense. The soundtrack is fantastic.",
    year: ""
  },
  {
    number: "m-017",
    title: "The Life Acquatic with Steve Zissou",
    genre: "comedy",
    status: "rewatch",
    director: "Wes Anderson",
    star: "2.5",
    comment: "",
    year: "2004"
  },
  {
    number: "m-018",
    title: "The Dreamers",
    genre: "drama",
    status: "new",
    director: "Bernardo Bertolucci",
    star: "3.0",
    comment: "",
    year: "2004"
  },
  {
    number: "m-019",
    title: "Roma",
    genre: "drama",
    status: "rewatch",
    director: "Alfonso Cuarón",
    star: "5.0",
    comment: "Perhaps one of my favorite films, ever. Deeply personal. Takes its time. Portrays two very clear stories. One about Leo and one about the mother in the family. Also has so much cultural emphasis in the backdrop of the film. Beautifully filmed. Makes me want to cry. In fact, I do. I think I cried like 3 times watching this a second time. It’s beautiful.",
    year: "2018"
  },
  
  {
    number: "m-020",
    title: "The Boy and the Heron",
    genre: "drama",
    status: "new",
    director: "Hayao Miyazaki",
    star: "4.5",
    comment: "So visually stunning. The fire scene in the beginning had me in tears in it’s beauty, confusion, and intensity. I think the movie’s plot was pretty incomprehensible, but I still felt a lot while watching it. The strange passage of time. The strange interrelatedness of family. The strange relationship we experience with grief. And Miyazaki’s sense of the world full of tricksters, folklore, alternate worlds is a way that we should look at the mysteries of the world. Great movie.",
    year: "2023"
  },
  {
    number: "m-021",
    title: "Y tu mamá también",
    genre: "drama",
    status: "new",
    director: "Alfonso Cuarón",
    star: "4.0",
    comment: "Fantastic film. The cinematography feels uniquely like a Curaón film for the first time. Long pans to the background as characters are talking. Giving context without the characters need to comment on it. It’s one of my favorite tricks of his. I think it’s naturally shows the growth of teenagers well. I think the parallel story of the woman roots the whole thing in an adultness that otherwise would not have been there. The relationship between the three characters felt real. There are some moments in Curaón films where he breaks the fourth wall or perhaps steps into a small amount of surrealism. The moment when she is dancing and looks directly into the camera creates a really exaggerated and intense effect. It’s really amazing. Good movie. Perhaps need to bump it up to a 4.5. It’s one that has stayed with me since watching in an unexpected way.",
    year: "2001"
  },
  {
    number: "m-021",
    title: "Sólo con tu pareja",
    genre: "comedy",
    status: "new",
    director: "Alfonso Cuarón",
    star: "3.0",
    comment: "The second half is very darkly funny. The first half feels derivative, slow, and over the top. It’s wacky. And the extremes it goes to are out of this world. But it’s a funny story at points. No need to watch again for me.",
    year: ""
  },
  {
    number: "m-023",
    title: "Gravity",
    genre: "sci-fi",
    status: "rewatch",
    director: "Alfonso Cuarón",
    star: "3.5",
    comment: "Visually stunning. I actually couldn’t believe that so much of it was CG. It’s some of the best looking CG I’ve perhaps ever seen. It feels realistic and I couldn’t wait to see how they figured it out. So to see how much of the movie was CG was really wild. The story is simple. But I do like how rooted in science it feels. The debris cloud is not your standard antagonist in a film like this but it feels like a real problem. The scenes floating around in the space station are fantastic. George Clooney looking at the Ganges is a wonderful moment as well. Good movie.",
    year: "2013"
  },
  {
    number: "m-024",
    title: "The Eras Tour",
    genre: "documentary",
    status: "new",
    director: "Sam Wrench",
    star: "3.5",
    comment: "She killed it. Cool set design. Watched relatively passively. It was cool. Not my thing from many perspective but I definitely appreciate the execution and theatre of it all. Watched for Laura, really.",
    year: "2023"
  },
  {
    number: "m-025",
    title: "Breathless",
    genre: "drama",
    status: "new",
    director: "Jean-Luc Godard",
    star: "3.5",
    comment: "",
    year: "1960"
  },
  {
    number: "m-026",
    title: "Monty Python’s Meaning of Life",
    genre: "comedy",
    status: "new",
    director: "Terry Jones",
    star: "4.5",
    comment: "",
    year: "1983"
  },
  {
    number: "m-027",
    title: "Civil War",
    genre: "drama",
    status: "new",
    director: "Alex Garland",
    star: "4.0",
    comment: "",
    year: "2024"
  },
  {
    number: "m-028",
    title: "Children of Men",
    genre: "drama",
    status: "rewatch",
    director: "Alfonso Cuarón",
    star: "4.0",
    comment: "",
    year: "2006"
  },
  {
    number: "m-029",
    title: "The Force Awakens",
    genre: "sci-fi",
    status: "rewatch",
    director: "J. J. Abrams",
    star: "3.5",
    comment: "",
    year: "2015"
  },
  {
    number: "m-030",
    title: "The Last Jedi",
    genre: "sci-fi",
    status: "rewatch",
    director: "Rian Johnson",
    star: "4.0",
    comment: "",
    year: "2017"
  },
  {
    number: "m-031",
    title: "The Rise of Skywalker",
    genre: "sci-fi",
    status: "rewatch",
    director: "J. J. Abrams",
    star: "2.0",
    comment: "",
    year: "2019"
  },
  {
    number: "m-032",
    title: "Very Ralph",
    genre: "documentary",
    status: "new",
    director: "Susan Lacy",
    star: "4.0",
    comment: "",
    year: "2019"
  },
  {
    number: "m-033",
    title: "Moonage Daydream",
    genre: "documentary",
    status: "new",
    director: "Brett Morgen",
    star: "4.0",
    comment: "",
    year: "2022"
  },
  {
    number: "m-034",
    title: "Your Name",
    genre: "drama",
    status: "new",
    director: "Makoto Shinkai",
    star: "4.0",
    comment: "",
    year: "2017"
  },
  {
    number: "m-035",
    title: "The Zone of Interest",
    genre: "drama",
    status: "new",
    director: "Jonathan Glazer",
    star: "5.0",
    comment: "",
    year: "2023"
  },
  {
    number: "m-036",
    title: "Dune Part 2",
    genre: "sci-fi",
    status: "new",
    director: "Denis Villeneuve",
    star: "3.5",
    comment: "It was better than the first, which was cool. I still don’t love it. Visually gorgeous though.",
    year: "2024"
  },
  {
    number: "m-037",
    title: "Road House",
    genre: "action",
    status: "new",
    director: "Rowdy Herrington",
    star: "3.0",
    comment: "",
    year: "1989"
  },
  {
    number: "m-038",
    title: "Hell or High Water",
    genre: "drama",
    status: "new",
    director: "David Mackenzie",
    star: "3.5",
    comment: "",
    year: "2016"
  },
  {
    number: "m-039",
    title: "Ocean’s Eleven",
    genre: "drama",
    status: "rewatch",
    director: "Steven Soderbergh",
    star: "4.0",
    comment: "",
    year: "2001"
  },
  {
    number: "m-040",
    title: "There Will Be Blood",
    genre: "drama",
    status: "new",
    director: "Paul Thomas Anderson",
    star: "4.0",
    comment: "Visually, looks like it came out last year. Gorgeous cinematography.",
    year: "2007"
  },
  {
    number: "m-041",
    title: "The Thing",
    genre: "horror",
    status: "new",
    director: "John Carpenter",
    star: "4.5",
    comment: "",
    year: "1982"
  },
  {
    number: "m-042",
    title: "A Hard Days Night",
    genre: "music",
    status: "new",
    director: "Richard Lester",
    star: "3.5",
    comment: "",
    year: "1964"
  },
  {
    number: "m-043",
    title: "Will & Harper",
    genre: "documentary",
    status: "new",
    director: "Josh Greenbaum",
    star: "3.0",
    comment: "",
    year: "2024"
  },

  {
    number: "m-044",
    title: "The Wickerman",
    genre: "horror",
    status: "new",
    director: "Robin Hardy",
    star: "4.5",
    comment: "",
    year: "1974"
  },
  

  {
    number: "m-045",
    title: "Bram Stoker’s Dracula",
    genre: "drama",
    status: "new",
    director: "Frances Ford Coppola",
    star: "3.0",
    comment: "This movie is batshit",
    year: "1992"
  },
  {
    number: "m-046",
    title: "Misery",
    genre: "horror",
    status: "new",
    director: "Rob Reiner",
    star: "3.0",
    comment: "",
    year: "1990"
  },
  {
    number: "m-047",
    title: "Little Princess",
    genre: "fantasy",
    status: "new",
    director: "Alfonso Cuarón",
    star: "3.5",
    comment: "",
    year: "1995"
  },
  {
    number: "m-048",
    title: "Great Expectations",
    genre: "drama",
    status: "new",
    director: "Alfonso Cuarón",
    star: "2.5",
    comment: "",
    year: "1998"
  },
  {
    number: "m-049",
    title: "Children of Men",
    genre: "drama",
    status: "rewatch",
    director: "Alfonso Cuarón",
    star: "4.5",
    comment: "",
    year: "2006"
  },
  {
    number: "m-050",
    title: "I Am Trying To Break Your Heart",
    genre: "documentary",
    status: "rewatch",
    director: "Sam Jones",
    star: "4.0",
    comment: "",
    year: "2002"
  },
  {
    number: "m-051",
    title: "Complete Unknown",
    genre: "drama",
    status: "new",
    director: "James Mangold",
    star: "4.0",
    comment: "",
    year: "2024"
  },
  {
    number: "m-052",
    title: "1917",
    genre: "drama",
    status: "rewatch",
    director: "Sam Mendes",
    star: "4.0",
    comment: "",
    year: "2019"
  },
  {
    number: "m-053",
    title: "American Psycho",
    genre: "comedy",
    status: "rewatch",
    director: "Mary Harron",
    star: "5.0",
    comment: "",
    year: "2000"
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
