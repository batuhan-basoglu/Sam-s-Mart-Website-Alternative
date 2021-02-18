// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
	s2.appendChild(document.createElement("br"));
	s2.appendChild(document.createElement("br"));
		
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, s1.value);

  //add to the filtered array 
  filtered = optionArray; 
  console.log("hello", filtered);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		var itemPrice = getItemPrice(productName);
		label.appendChild(document.createTextNode(productName + " $" + itemPrice));

		// //get price of an item 
		// var itemPrice = getItemPrice(productName);
		// label.appendChild(document.createTextNode(" $" + itemPrice));

		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));   
		
		//create <img src="">
		var prodImg = document.createElement("img");
		prodImg.src = getProductImg(productName);
		// prodImg = document.getElementById("displayProduct");
		// console.log("trial", prodImg.src);
		s2.appendChild(prodImg);

		//use this to space the images 
		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));

	}
}
	

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {
  var ele = document.getElementsByName('product')
  var chosenProducts = []

  var c = document.getElementById('displayCart')
  c.innerHTML = ''

  // build list of selected item
  var para = document.createElement('P')
  para.innerHTML = 'You have selected : '
  para.appendChild(document.createElement('br'))
  para.appendChild(document.createElement('br'))

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      para.appendChild(
        document.createTextNode(
          ele[i].value + '     $' + getItemPrice(ele[i].value),
        ),
      )
      para.appendChild(document.createElement('br'))
      //adding the image
      console.log(getProductImg(ele[i].value))
      var cartImg = para.appendChild(document.createElement('img'))
      cartImg.src = getProductImg(ele[i].value)
      // para.appendChild(cartImg);
      para.appendChild(document.createElement('br'))
      chosenProducts.push(ele[i].value)
    }
  }

  // add paragraph and total price
  c.appendChild(para)
  c.appendChild(
    document.createTextNode('Total Price is $' + getTotalPrice(chosenProducts)),
  )
}

function filterProducts(sel1, sel2) {
  var s1 = document.getElementById(sel1)
  var s2 = document.getElementById(sel2)



  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = ''
  s2.appendChild(document.createElement('br'))
  s2.appendChild(document.createElement('br'))


  //var restrictProd = restrictListProducts(filtered, );

  // obtain a reduced list of products based on restrictions

  var optionArray = filterProduct(filtered, s1.value);
  //var optionArray = filterProduct()
 
  


  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>

  for (i = 0; i < optionArray.length; i++) {
    var productName = optionArray[i]
    // create the checkbox and add in HTML DOM
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'product'
    checkbox.value = productName
    s2.appendChild(checkbox)

    // create a label for the checkbox, and also add in HTML DOM
    var label = document.createElement('label')
    label.htmlFor = productName
    var itemPrice = getItemPrice(productName)
    label.appendChild(document.createTextNode(productName + ' $' + itemPrice))

    // //get price of an item
    // var itemPrice = getItemPrice(productName);
    // label.appendChild(document.createTextNode(" $" + itemPrice));

    s2.appendChild(label)

    // create a breakline node and add in HTML DOM
    s2.appendChild(document.createElement('br'))

    //create <img src="">
    var prodImg = document.createElement('img')
    prodImg.src = getProductImg(productName)
    // prodImg = document.getElementById("displayProduct");
    // console.log("trial", prodImg.src);
    s2.appendChild(prodImg)

    //use this to space the images
    s2.appendChild(document.createElement('br'))
    s2.appendChild(document.createElement('br'))
  }
}
