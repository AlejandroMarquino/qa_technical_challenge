# FCM Digital - QA Technical challenge
Welcome to the FCM Digital QA team technical challenge, the objective of this challenge is to learn more about the way you work. There is no single solution, so don't worry, just do the best you can. 

## Challenge information
You will have to create a fork of this repository on which you will work. Once you complete the challenge, you will contact us via email and we will proceed to review it.

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

	** Products Page (https://www.saucedemo.com/inventory.html)	**
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


	**Product Detail Page (https://www.saucedemo.com/inventory-item.html?id=X)	**

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

	**Checkout Information User Page (https://www.saucedemo.com/checkout-step-one.html)	**

Common elements: Hamburger, Swat Labs, Cart, Social Links, Copy text

User Information box
First Name (text field - mandatory)
Last Name (text field - mandatory)
Zip / Postal Code (text field - mandatory)

Cancel (button > redirects to Cart Page)
Continue (button > redirects to Checkout Page Step Two) 


	**Checkout Overwiev Page (https://www.saucedemo.com/checkout-step-two.html)	**

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


	**Checkout Confirmation Page (https://www.saucedemo.com/checkout-complete.html)	**

Green Check Icon
Text: 
Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!
Back Home (button > redirects to Home Screen Page)


	**BUGS:	**
Privacy Policy in the footer - Missing Link 
Reset App State after adding a product to cart cellars the cart but the button ‘Remove’ against the product stays
The user can proceed to checkout step one page without a product

	**Questions to PM or dev team:	**
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

 ```

## User Story 2
As a Swag Labs standard_user, I need to open the products detail page in the Swag Labs ordering platform so that get more information about the products

## Acceptance Criterias 2
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to access to the products details view

 ```

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

 ```

## User Story 5
As a Swag Labs standard_user, I need to sort products in the Swag Labs ordering platform so that I can find what I'm looking for easily

## Acceptance Criterias 5
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to sort product(s) in different ways

 ```

 ```

## User Story 6
As a Swag Labs standard_user, I need to reset the app status in the Swag Labs ordering platform so that I can reset the app to its initial settings

## Acceptance Criterias 6
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the menu page
3. Able to reset app state

 ```

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

 ```

## User Story 9
As a Swag Labs standard_user, I need to see all the product added to the shopping cart in the Swag Labs ordering platform so that I can to know what I am going to buy

## Acceptance Criterias 9
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to see all the products information what I am going to buy (qty, name, description, price)

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

 ```


# Git Commands
I'm assuming the following tools are avialables in the system: Terminal (Powershell in my case), git, yarn and node. Btw, these are the instrucctions to run the project.
`git clone https://github.com/AlejandroMarquino/qa_technical_challenge.git ` >  first download repository
Go to the repository folder
yarn > install dependencies

# How to Run the Tests
To run Cypress use the comand: `yarn cypress`

# Problems
The main problem I faced was defining too many tests that later became difficult to implement. I kept them in the test definition because I believe that, even if they are not automated, it's good to have them defined and take them into account. In case of real project, we would have time to evaluate which of these tests are worth automating or which ones to execute manually, and which tests are not necessary.

Another issue was using Examples when defining tests for brevity because later I found it difficult to implement it in the code.

This is not a problem, is a commentary i want to do: My code and automated tests are simpler than the entire test definition for a time management reason. I preferred to divide the time between analysis and test definition and automation. Automated tests have room for improvement considering the previously defined tests.

In the automation of some tests, I had difficulty finding a way to access certain elements. There was also a detail where I spent time; initially, I didn't realize that the URL of the articles was not ordered in the same way as the articles are displayed. For example, the first product displayed is not product 1 in the URL. When I defined the dataset in the JSON, I ordered the products according to the display order. So when executing some tests, the information displayed did not correspond to the product. Finally, I realized the issue and correctly ordered the products in the .json.

In AC10, I noticed that it was case-sensitive and distinguished between uppercase and lowercase, even after defining in the dataset the information displayed on the confirmation page without considering this. After realizing the error, I defined the information in the dataset with the same characters (both uppercase and lowercase) as the page, although it could be improved with a function that converts the text.
