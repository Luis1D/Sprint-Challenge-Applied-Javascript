class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;                                             // assign this.tabElement to the tabElement DOM reference
    this.tabData = this.tabElement.dataset.tab;                               // Get the `data-tab` value from this.tabElement and store it here
    
    if (this.tabData == "all"){                         // Check to see if this.tabData is equal to 'all'
      console.log('if: ' + this.tabData);
      this.cards = document.querySelectorAll('.card');                 // If `all` is true, select all cards regardless of their data attribute values
      
    } else {
      console.log('else: ' + this.tabData);
      this.cards = document.querySelectorAll(`.card[data-tab=${this.tabData}]`);   // else if `all` is false, only select the cards with matching this.tabData values
      
    }
    
    this.cards = Array.from(this.cards).map(card => new TabCard(card));   // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.tabElement.addEventListener('click', () => this.selectTab());        // Add a click event that invokes this.selectTab
    
  }

  selectTab(){
    console.log('selectCard clicked');
    const tabs = document.querySelectorAll('.tab');                           // Select all elements with the .tab class on them
    tabs.forEach(tab => tab.classList.remove('active-tab'));           // Iterate through the NodeList removing the .active-tab class from each element

    const cards = document.querySelectorAll('.card');                         // Select all of the elements with the .card class on them
    cards.forEach(card => card.style.display = "none");                       // Iterate through the NodeList setting the display style each one to 'none'

    this.tabElement.classList.add('active-tab');                              // Add a class of ".active-tab" to this.tabElement

    this.cards.forEach(card => card.selectCard());                            // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
  }
}


class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;                                           // Assign this.cardElement to the cardElement DOM reference
  }
  selectCard(){
    console.log('TabCard clicked');
    this.cardElement.style.display = "flex";                                  // Update the style of this.cardElement to display = "flex"
  }

}

/* START HERE: 
- Select all classes named ".tab" and assign that value to the tabs variable
- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
*/

let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new TabLink(tab));
