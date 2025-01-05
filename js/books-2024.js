let showData = [
    {number: "b-001", title: "Atomic Habits", author: "James Clear", year: "2018", status: "new", genre: "Non-fiction", star: "5.0", comment: ""},
    {number: "b-002", title: "A Personal Matter", author: "Kenzaburō Ōe", year: "1964", status: "new", genre: "Fiction", star: "4.0", comment: "This might be a 4.5. I haven’t determined yet. The language in this book is some of the best I’ve read in a long time. It’s incredibly detailed in just the right way. There are tons of unique and imaginative similes. They’re almost oppressive in how frequent they are, but I almost always found them clever. Bird is incredibly unlikeable and as he dives deeper into his darkness, it is a compelling read. I felt as though the ending felt abrupt. His about face to acceptance didn’t really seem like it was earned, particularly with how low he was sinking. It’s a book all about running away from your fears into the deepest and darkest betrayals a human is willing to commit. But then there’s an about face and I’m not sure if the imagery is lost on me. Maybe another read will shed light. The first chapter is incredibly captivating and so are many others. I thoroughly enjoyed this and will try to give it another read before the year is up."},
    {number: "b-003", title: "Someone Who Isn’t Me", author: "Geoff Rickley", year: "2023", status: "new", genre: "Fiction", star: "4.5", comment: ""},
    {number: "b-004", title: "Hear the Wind Sing", author: "Haruki Murakami", year: "1979", status: "reread", genre: "Fiction", star: "3.0", comment: "Technically a re-read because I breezed through it pretty unfocused the first time. It’s okay. The imagery of the wind and its relationship of being this thing that ushers memories of youth is a good idea. The way the wind speaks in abstract ways is cool. The author of the man on Mars story is cool. Our first appearances of wells. It definitely plants the seeds for his future work. A lot of it is sloppy or meandering."},
    {number: "b-005", title: "Pinball, 1973", author: "Haruki Murakami", year: "1973", status: "new", genre: "Fiction", star: "3.5", comment: ""},
    {number: "b-006", title: "Perks of Being a Wallflower", author: "Stephen Chbosky", year: "1999", status: "reread", genre: "Fiction", star: "4.5", comment: ""},
    {number: "b-007", title: "Black Ivy: A Revolt in Style", author: "Graham Marsh and Jason Jules", year: "2021", status: "new", genre: "Non-fiction", star: "4.0", comment: ""},
    {number: "b-008", title: "1964: Eyes of the Storm", author: "Paul McCartney", year: "2023", status: "new", genre: "Non-fiction", star: "3.5", comment: ""},
    {number: "b-009", title: "Meet Me In The Bathroom", author: "Lizzy Goodman", year: "2017", status: "new", genre: "Non-fiction", star: "4.0", comment: ""},
    {number: "b-010", title: "Final Fantasy Ultimania Archive I", author: "Square Enix", year: "2018", status: "new", genre: "Non-fiction", star: "3.0", comment: ""},
    {number: "b-011", title: "A Wild Sheep Chase", author: "Haruki Murakami", year: "1982", status: "new", genre: "Fiction", star: "3.5", comment: ""},
    {number: "b-012", title: "The Lyrics: 1956 to the Present", author: "Paul McCartney", year: "2021", status: "new", genre: "Non-fiction", star: "4.0", comment: ""},
    {number: "b-013", title: "Mistborn", author: "Brandon Sanderson", year: "2006", status: "new", genre: "Fiction", star: "4.0", comment: ""},
    
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
