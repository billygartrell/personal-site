let showData = [
  {number: "1", title: "Old Enough", season: "Season 2", status: "new", genre: "Reality", star:"5.0", comment: "Love this show. The new “flash-forward” scenes in some episodes are incredible. Absolutely touching. Nothing achieves the high of the fish-kid episode last season but they’re all wonderful."},
  {number: "2", title: "Abbot Elementary", season: "Season 1", status: "new", genre: "Comedy", star:"4.0", comment: "Really cute show that’s growing on me quite a bit. The teachers are wonderful. There are some really solid jokes. My favorite character is the principal. Every scene that she is in, I know is going to be good. I think some of the characters are pretty one dimensional - especially Greg who is supposed to be the love interest. But he’s not particularly likable right now and doesn’t have much depth. The main character is so, so good. She’s adorable in every scene. I’m enjoying it."},
  {number: "3", title: "Cunk on Earth", season: "", status: "new", genre: "Comedy", star:"5.0", comment: "I’m giving this five stars for now. I think it’s perfect at what it’s trying to do. So stupid but so funny. The medieval soundscape scene, the trip and fall down the desert dune, the nuclear bomb crying/abba bit, the constant jokes of how boring history is. It’s just so supremely well done as a parody and the host, played by Diane Morgan is absolutely perfect. I enjoyed the entire thing thoroughly and honestly would just love more. But only as long as it stays this high quality."},
  {number: "4", title: "The Last of Us", season: "", status: "new", genre: "Horror", star:"4.0", comment: "Not bad. I really liked some of their creative changes. Episode 3 is obviously a standout. The two brothers were a massive standout. The flashbacks were fun little additions. Overall it was a faithful adaptation. Ultimately, I wish the world felt more perilous. I want to feel the danger they are in. It seemed like it really wasn’t so bad half of the time. I think that Joel’s conversion to loving guy happens a little too quickly in the show as well. All of a sudden he’s very likable and ready to be Ellie’s friend. A few more episodes would have helped us love the characters and their relationship more which would make the final lie all that more painful."},
  {number: "5", title: "Fleabag", season: "Full Series", status: "rewatch", genre: "Comedy", star:"4.0", comment: "Season 2 is perfect."},
  {number: "6", title: "Abbot Elementary", season: "Season 2", status: "new", genre: "Comedy", star:"3.5", comment: "Really nice light and fun TV. Can be very touching. Can be very enjoyable. Can be a little boring sometimes. But I’ll 100% be watching it more in the future."},
  {number: "7", title: "FLCL", season: "", status: "rewatch", genre: "Fantasy", star:"5.0", comment: "Unbeatable. Must watch it once a year. I love it every time, still."},
  {number: "8", title: "Waco", season: "", status: "new", genre: "Documentary", star:"2.5", comment: "Pretty crazy doc about the cult in Waco, Texas. It was mostly about the siege of the compound rather than the cult details. I wish there was a little bit more background of the cult and how it came to be compared to the siege but there might not be enough. The interviews were pretty stark. Some of the cult members who survived the experience are still quite radical and it’s pretty wild to see. That’s was probably the best part."},
  {number: "9", title: "Beef", season: "", status: "new", genre: "Comedy", star:"5.0", comment: "Favorite show of the year so far. So much empathy. So much humor. Very clever writing and escalation. Sometimes surreal? Made me really feel for each character. I thought it was a great show. Fast paced. Always raising stakes. Complicated and bad people trying to do their best. Great acting. I loved it."},
  {number: "10", title: "Neon Genesis Evangelion", season: "", status: "rewatch", genre: "Fantasy", star:"4.0", comment: "I never know how I feel about this show. Some parts of it are so very interesting. Some are unintelligible. There are some moments in this that are totally striking. The brutality of some of the Eva’s kills are shocking. They create a great atmosphere of mystery and fear. It always feels like there’s something lurking in this show. I think on second watch, I understand the plot a little bit more but it’s still insanely complicated. I like that the show is ultimately about grief and coming to terms with ourselves. Shinzo is trying to have autonomy and confidence. Asuka is feigning confidence because she wants closeness. The religious imagery is cool. The vibes? They’re cool. The big type? It’s great. The character designs are great. But ultimately the plot is just so complicated that I don’t know if I love it. There are some scenes that I dislike. Some of the battles are annoying. Most of the characters are quite annoying. I feel like there’s a lot of filler and buildup just to lose it all in the super crazy ending. I love learning about the strange human creatures that the Eva’s are. But like I don’t think the “reveal” which is barely a reveal feels good. I guess I prefer that they went totally crazy with it compared to just being mediocre. It’s weird. Idk. I’m conflicted. I don’t love it but I do find it captivating."},
  {number: "11", title: "Queer Eye", season: "Season 7", status: "new", genre: "Reality", star:"4.0", comment: "n/a"},
  {number: "12", title: "Succession", season: "Season 4", status: "new", genre: "Drama", star:"4.0", comment: "n/a"},
  {number: "13", title: "The Bear", season: "Season 2", status: "new", genre: "Drama", star:"4.5", comment: "n/a"},
  {number: "14", title: "Marvelous Mrs. Maisel", season: "Season 5", status: "new", genre: "Drama", star:"3.5", comment: "n/a"},
  {number: "15", title: "Death Note", season: "Full Series", status: "new", genre: "Fantasy", star:"3.5", comment: "n/a"},
  {number: "16", title: "Over the Garden Wall", season: "", status: "rewatch", genre: "Fantasy", star:"5.0", comment: "n/a"},
  {number: "17", title: "What We Do In The Shadows", season: "Seasons 1 - 3", status: "new", genre: "Comedy", star:"3.5", comment: "n/a"},
  {number: "18", title: "The Golden Bachelor", season: "", status: "new", genre: "Reality", star:"3.0", comment: "n/a"},
  {number: "19", title: "I Think You Should Leave", season: "Season 3", status: "new", genre: "Comedy", star:"4.5", comment: "n/a"},

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
