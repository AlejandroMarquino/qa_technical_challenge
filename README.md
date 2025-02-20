# QA Technical challenge

## Goals
Given some user stories witch their acceptance criterias:
- [x] Extra: Analysis of elements and pages
- [x] 1. Write the test cases in the README.md file, [Test Cases](#test-cases) section.
- [x] 2. Create a project using YARN.
- [x] 3. Install Cypress using YARN.
- [x] 4. Implement in Cypress as many tests as test cases have been defined to be validated automatically. Upload to your fork all the code structure needed to run the tests as well as the instructions so that they can be easily executed (write the instructions on the README.md file, [How to Run the Tests](#how-to-run-the-tests) section).
- [x] 5. Write the git commands used during the challenge in the README.md file, [Git Commands](#git-commands) section.
- [x] 6. Write down the problems you have encountered during the challenge in the README.md file, [Problems](#problems) section.


# Challenge
## Challenge URL
https://www.saucedemo.com


# Analysis of elements and pages

The first step has been to analyze all the components and pages that we are going to have to test and automate. 

This way, I have both an overall and detailed view of the product, as well as the redirects, components, and information that the website displays. (It also allows me to name the elements and pages that I will use when defining the tests.)

This initial analysis, although it requires a time investment, helps in the future to be able to formulate test cases with better definition.

It also enables the detection of some bugs through exploratory means (as described later) or questions that may be raised during a refinement.


 ```
	** Home Screen Page (https://www.saucedemo.com)	**
Username (text field)
Password (text field)
Login (button component) 
Information (text box)
Accepted usernames
Password for all users


	** Products Page (https://www.saucedemo.com/inventory.html) **
Hamburger icon (top-left corner)
Close icon
All Items (Inventory)
About (Redirects to https://saucelabs.com/)
Logout (Redirects to https://www.saucedemo.com/)
Reset App State

Swag Labs (top text)

Cart Icon (link)

Products (text)

Filter icon (Sort dropdown menu)
Name (A to Z - default)
Name (Z to A)
Price (low to high)
Price (high to low)

Product Cards
Name of the product (link)
Image (link)
Description (text)
Price (text)
Add to cart (button component)


Social Media Link Icons
Twitter (redirects to https://twitter.com/saucelabs)
Facebook (redirects to https://www.facebook.com/saucelabs)
LinkedIn (redirects to https://www.linkedin.com/company/sauce-labs/)

Copyright Text (footer)


	** Product Detail Page (https://www.saucedemo.com/inventory-item.html?id=X) **
Common elements: Hamburger, Swat Labs, Cart, Social Links, Copy text

Back to products (back arrow icon) 
Image of the product
Product Name
Description
Price
Add to cart (button) > Remove (text, color and button)


Cart Detail Page (https://www.saucedemo.com/cart.html)

Common elements: Hamburger, Swat Labs, Cart, Social Links, Copy text

Your cart (text)
QTY
Drescription
Qty box (only info, non-editable)
Procut Name (link to the product page)
Description (text)
Price (text)
Remove (button)
Continue Shopping (button > redirects to Inventory Page)
Checkout (button > redirects to Checkout page)


	** Checkout Information User Page (https://www.saucedemo.com/checkout-step-one.html) **
Common elements: Hamburger, Swat Labs, Cart, Social Links, Copy text

User Information box
First Name (text field - mandatory)
Last Name (text field - mandatory)
Zip / Postal Code (text field - mandatory)

Cancel (button > redirects to Cart Page)
Continue (button > redirects to Checkout Page Step Two) 


	** Checkout Overwiev Page (https://www.saucedemo.com/checkout-step-two.html) **
Checkout: Overview
QTY
Drescription
Qty box (only info, non-editable)
Procut Name (link to the product page)
Description (text)
Price (text)

Payment Information (text)
SauceCard #numbers
Shipping Information
Free Pony Express Delivery! (text)
Price Total
Item total: $ + Numbers 
Tax: $ + Number
Totat: $ + Amount of Item total + Tax

Cancel (button > redirects to Inventory Page)
Continue (button > redirects to Checkout-complete) 


	** Checkout Confirmation Page (https://www.saucedemo.com/checkout-complete.html) **
Green Check Icon
Text:
Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!
Back Home (button > redirects to Home Screen Page)


	** BUGS: **
Privacy Policy in the footer - Missing Link 
Reset App State after adding a product to cart cellars the cart but the button ‘Remove’ against the product stays
The user can proceed to checkout step one page without a product


	** Questions to PM or dev team:	**
What is the session timeout for logging out?

 ```

# Test Cases
Section where the different test cases of the challenge will be defined.

## User Story 1
As a Swag Labs admin, I need to access/logout the platform with the 4 different user types.

## Acceptance Criterias 1
Ensure the Swag Labs admins are able to:
1. Log in/Log out to Swag Labs (standard_user)
2. Not logging in to Swag Labs and getting an error (locked_out_user)
3. Log in/Log out to Swag Labs (problem_user)
4. Log in/Log out to Swag Labs (performance_glitch_user)

 ```
Scenario: Log in / Log out to Swag Labs (standar_user)
	Given a user
	And the user is in Home Screen page
	When the user fills the user name fill with a valid user
	And the user fills the password with the correct password
	And the user clicks the Login button
	Then the user logs in correctly 
	And the user is redirected to the Products page


Scenario: Not logging in to Swat Labs and getting an error (locked_out_user)
	Given a user
	And the user is in Home Screen page
	When the user fills the user name fill with a locked user
	And the user fills the password with the correct password
	And the user clicks the Login button
	Then the user can’t logs in 
	And a warning message appear


Scenario: Log in / Log out to Swat Labs (problem_user)
	Given a user
	And the user is in Home Screen page
	When the user fills the user name fill with the problem_user data
	And the user fills the password with the correct password
	And the user clicks the Login button
	Then the user logs in correctly 
	And the user is redirected to the Products pager


Scenario: Log in / Log out to Swat Labs (performance_glitch_user)
	Given a user
	And the user is in Home Screen page
	When the user fills the user name fill with the performance_glitch_user data
	And the user fills the password fill with the correct password
	And the user clicks the Login button
	Then the user logs in correctly 
	And the user is redirected to the Products pager

Due to this, we can do the 1, 3, and 4 scenarios with examples to simplify the test case

Scenario: Log in with a available user
	Given a user
	And the user is in Home Screen page
	When the user fills the user name fill with the <user> user
	And the user fills the password with the correct password
	And the user clicks the Login button
	Then the user logs in correctly 
	And the user is redirected to the Products page

	Examples:
	| user |
	| standard_user |
	| problem_user |
	| performance_glitch_user |


Scenario: Log out when the user is logged in.
	Given a user
	And the user is logs in 
	When the user logs out
	Then the user is redirected to Home Screen page

 ```

## User Story 2
As a Swag Labs standard_user, I need to open the products detail page in the Swag Labs ordering platform so that get more information about the products

## Acceptance Criterias 2
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to access to the products details view

 ```
Scenario: User can access to the Product page
	Given a user
	And the user is logs in 
	And the user is in the Products page
	And the products are displayed 
	When the user clicks on the |element|
	Then the Product Detail page is displayed

	Examples:	
	| element |
	| name of the product |
	| image of the product |

 ```

## User Story 3
As a Swag Labs standard_user, I need to add to cart products in the Swag Labs ordering platform so that I can buy it

## Acceptance Criterias 3
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to add to cart product(s) to buy
4. Navigate into the Products details page
5. Able to add to cart product(s) to buy

 ```

Scenario: User can add products to the cart	
	Given a user
	And the user is logs in 
	And the user is in the |page| page
	When the user clicks on the Add to cart button of one product
	Then the product is added to the cart
	And the user can see the product in the Cart Detail page

	Examples:
	|page|
	|Products page|
	|Product Detail page|
 ```

## User Story 4
As a Swag Labs standard_user, I need to review my previous added to cart products in the Swag Labs ordering platform so that I can remove it

## Acceptance Criterias 4
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to add to cart product(s) to buy
3. Able to remove product(s)
4. Navigate into the Products details page
5. Able to remove product(s)
6. Navigate into the shopping cart
7. Able to remove product(s)

 ```
Scenario: User can remove a product from the cart
	Given a user
	And the user is logs in 
	And the user is in the |page| page 
	And the user has at least one product in the cart
	When the user clicks on the Remove button
	Then the product disappear from the Cart Page
	And the number in the cart icon decrease one number
	And the number indicates the correct number of products in the cart

	Examples:
	|page|
	|Products page|
	|Product detail page|
	|Cart detail page|

 ```

## User Story 5
As a Swag Labs standard_user, I need to sort products in the Swag Labs ordering platform so that I can find what I'm looking for easily

## Acceptance Criterias 5
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to sort product(s) in different ways

 ```
Scenario: User can see the filters menu
	Given a user
	And the user is logs in 
	And the user is in the Products page
	And the products are displayed 
	When the user clicks in the Sort Dropdown Menu
	Then the sort menu is displayed
	And the |filter| filter is displayed

	Examples:
	|filter|
	|Name (A to Z)|
	|Name (Z to A)|
	|Price (low to high)|
	|Price (high to low)|


Scenario: User can sort products by filter
	Given a user
	And the user is logs in 
	And the user is in the Products page
	And the products are displayed 
	When the user clicks in the Sort Dropdown Menu
	And the user selects the |filter| filter
	Then the products are displayed ordered correctly

	Examples:
	|filter|
	|Name (A to Z)|
	|Name (Z to A)|
	|Price (low to high)|
	|Price (high to low)|

 ```

## User Story 6
As a Swag Labs standard_user, I need to reset the app status in the Swag Labs ordering platform so that I can reset the app to its initial settings

## Acceptance Criterias 6
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the menu page
3. Able to reset app state

 ```
Scenario: User can see the Reset App State Button 
	Given a user
	And the user is logs in 
	When the user clicks on the Hamburger menu
	Then the Reset App State button appears


Scenario: User can reset the App
	Given a user
	And the user is logs in 
	And the user clicks on the Hamburger menu
	And the user clicks on Reset App State button
	Then the cart is empty
	And no number is displayed in the cart icon

 ```

## User Story 7
As a Swag Labs standard_user, I need to see the product information in the product page and product details page in the Swag Labs ordering platform so that I can know what I'm buying

## Acceptance Criterias 7
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see all the product information (image, title, description, price)
4. Navigate into the Products details page
5. Able to see all the product information (image, title, description, price)

 ```
Scenario: User can see the information of a product
	Given a user
	And the user is logs in 
	And the user is in the Products Details page
	And the products are displayed 
	When the user clicks on the |element|
	Then the Product Detail page is displayed
	And the name  is correctly displayed
	And the image is correctly displayed
	And the description of the product is correctly displayed
	And the price is correctly displayed

	Examples:	
	| element |
	| name of the product |
	| image of the product |

 ```

## User Story 8
As a Swag Labs standard_user, I need to see the shopping cart with the number of products added in the Swag Labs ordering platform so that I can to know the status of the same

## Acceptance Criterias 8
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see the shopping cart with the number of products added
4. Navigate into the Products details page
5. Able to see the shopping cart with the number of products added
6. Navigate into the shopping cart
7. Able to see the shopping cart with the number of products added

 ```
Scenario: User can see the numbers of products in the cart icon
	Given a user
	And the user is logs in 
	When the user clicks on the Add to cart button of one product
	Then a number appears in the cart icon
	And the numbers display the amount of products in the cart 
	And the cart icon is displayed in the |page| page with de correctly number

	Examples:
	|page|
	|Products page|
	|Product detail page|
	|Cart detail page|
 ```

## User Story 9
As a Swag Labs standard_user, I need to see all the product added to the shopping cart in the Swag Labs ordering platform so that I can to know what I am going to buy

## Acceptance Criterias 9
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to see all the products information what I am going to buy (qty, name, description, price)

 ```
Scenario: User can see all the details of the products in the Cart Page
	Given a user
	And the user is logs in
	And the user has a product in the cart 
	When the user are in the Cart Detail page
	Then the product in de cart are displayed
	And the Qty is correctly displayed
	And the name is correctly displayed
	And the description is correctly displayed
	And the price is correctly displayed


 ```

## User Story 10
As a Swag Labs standard_user, I need to buy all the product added to the shopping cart in the Swag Labs ordering platform

## Acceptance Criterias 10
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to Checkout
4. Able to complete a form with my personal data
5. Able to see an overview about my order (qty, name, description, unit price, payment information, shipping information, item total price, tax, total price)
6. Able to see a confirmation page

 ```
Scenario: User can acces to the Chekout page
	Given a user
	And the user is logs in
	And the user has a product in the cart 
	And the user are in the Cart Detail page
	When the user clicks on Checkout button
	Then the Information Checkout User page is displayed
	
Scenario: User can acces to the Chekout Overview page
	Given a user
	And the user is logs in
	And the user has a product in the cart 
	And the user are in the Checkout User page is displayed
	When the user fills the information
	And the user clicks on Continue button
	Then the Information Checkout Overview page is displayed
	And the Qty is displayed
	And the name is displayed
	And the description is displayed
	And the price is displayed 
	And the payment information is displayed
	And the shipping information is displayed
	And the price total is displayed
	And the total is displayed

Scenario: User can finish de checkout process
	Given a user
	And the user is logs in
	And the user has a product in the cart 
	And the user are in the Checkout Overview page is displayed
	When the clicks on Finish button
	Then the Checkout Confirmation page is displayed
	And the message is displayed
	And the Back Home button is displayed


Scenario: User can back to the Products Page from Chekout Confirmation page
	Given a user
	And the user is logs in
	And the user has a product in the cart 
	And the user are in the Checkout Confirmation page is displayed
	When the clicks on Back Home button
	Then the Products page is displayed
 ```


# Git Commands
I'm assuming the following tools are avialables in the system: Terminal (Powershell in my case), git, yarn and node. Btw, these are the instrucctions to run the project.
`git clone https://github.com/AlejandroMarquino/qa_technical_challenge.git ` >  first download repository
Go to the repository folder
yarn > install dependencies

# How to Run the Tests
To run Cypress use the comand: `yarn cypress` > 
When Cypress runs, select the browser (in my case, Chrome). > 
Access the Specs menu. > 
Run the test.


https://github.com/AlejandroMarquino/qa_technical_challenge/assets/90139066/d7beedbb-87be-41d8-bd07-5564cbebf675



# Problems
The main problem I faced was defining too many tests that later became difficult to implement. I kept them in the test definition because I believe that, even if they are not automated, it's good to have them defined and take them into account. In case of real project, we would have time to evaluate which of these tests are worth automating or which ones to execute manually, and which tests are not necessary.

Another issue I had, and I would have liked to handle better, is password management. Despite the password being public and, in this specific case, it doesn't matter if it's in data.json, it would be appropriate for the password to be in an environment variable and accessed through Cypress's own methods for that purpose. However, it gave me a lot of trouble, and I couldn't resolve it. Although I acknowledge it and keep in mind that it should be a point for improvement.

This is not a problem, is a commentary i want to do: My code and automated tests are simpler than the entire test definition for a time management reason. I preferred to divide the time between analysis and test definition and automation. Automated tests have room for improvement considering the previously defined tests. Using Examples when defining tests for brevity because later I found it difficult to implement it in the code.

In the automation of some tests, I had difficulty finding a way to access certain elements. There was also a detail where I spent time; initially, I didn't realize that the URL of the articles was not ordered in the same way as the articles are displayed. For example, the first product displayed is not product 1 in the URL. When I defined the dataset in the JSON, I ordered the products according to the display order. So when executing some tests, the information displayed did not correspond to the product. Finally, I realized the issue and correctly ordered the products in the .json.

In AC10, I noticed that it was case-sensitive and distinguished between uppercase and lowercase, even after defining in the dataset the information displayed on the confirmation page without considering this. After realizing the error, I defined the information in the dataset with the same characters (both uppercase and lowercase) as the page, although it could be improved with a function that converts the text.
