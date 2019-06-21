class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;                                             // assign this.tabElement to the tabElement DOM reference
    this.tabData = this.tabElement.dataset.tab;                               // Get the `data-tab` value from this.tabElement and store it here
    
    if (this.tabData == 'all'){                                               // Check to see if this.tabData is equal to 'all'
      return this.cards = document.querySelectorAll('.card');                 // If `all` is true, select all cards regardless of their data attribute values

    } else {
      return this.cards = this.tabData;                                       // else if `all` is false, only select the cards with matching this.tabData values
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.tabElement.addEventListener('click', () => this.selectTab());        // Add a click event that invokes this.selectTab
  }

  selectTab(){

  //   // Select all elements with the .tab class on them
  //   // const tabs = document.querySelectorAll();
    
  //   // Iterate through the NodeList removing the .active-tab class from each element
  //   // tabs.forEach()

  //   // Select all of the elements with the .card class on them
  //   // const cards = ;

  //   // Iterate through the NodeList setting the display style each one to 'none'
  //   // cards.forEach()
    
  //   // Add a class of ".active-tab" to this.tabElement
  //   // this.tabElement;
  
  //   // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
  //   // this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
  }

}

/* START HERE: 
- Select all classes named ".tab" and assign that value to the tabs variable
- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
*/

let tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => new TabLink(tab));
