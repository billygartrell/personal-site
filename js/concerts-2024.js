let showData = [
    {number: "c-001", title: "Ovlov", otherActs: "", venue: "Market Hotel", comment: ""},  
    {number: "c-002", title: "Missing June", otherActs: "", venue: "Bowery Electric", comment: ""},  
    {number: "c-003", title: "Computerwife", otherActs: "Slow Hollows", venue: "Berklee", comment: ""},  
    {number: "c-004", title: "Computerwife", otherActs: "Slow Hollows", venue: "Baby's All Right", comment: ""},
    {number: "c-005", title: "Spraynard", otherActs: "", venue: "The First Unitarian Church", comment: ""},
    {number: "c-006", title: "Microwave", otherActs: "Origami Angel", venue: "Brooklyn Steel", comment: ""},
    {number: "c-007", title: "Green Day", otherActs: "Smashing Pumpkins, Rancid, The Linda Lindas", venue: "Citi Field", comment: "I sang every word to American Idiot."},
    {number: "c-008", title: "Holidays in United States", otherActs: "", venue: "Rubulad", comment: ""},
    {number: "c-009", title: "Idles", otherActs: "w/ The Walkmen", venue: "Forest Hills Stadium", comment: ""},
    {number: "c-010", title: "Drug Church", otherActs: "", venue: "Brooklyn Monarch", comment: ""},
    {number: "c-011", title: "Slow Pulp", otherActs: "w/ Free Range", venue: "Webster Hall", comment: ""},
    {number: "c-012", title: "Haley Heynderickx", otherActs: "", venue: "Music Hall of Williamsburg", comment: ""},
    {number: "c-013", title: "Color Temperature", otherActs: "", venue: "Bowery Electric", comment: ""},
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
  