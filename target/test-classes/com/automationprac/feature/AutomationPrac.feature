Feature: Purchasing Clothing Products In Automation Practice Application
@Firstautoscenario
Scenario: User Opens The Automation Application
Given user Launches The Automation Application
When user Moves To The SignIn Button
And user Clicks The SignN Button
Then user Gets Navigated To The SignIn Page
@Secondautoscenario
Scenario: User Enters The Login Details
Given user Gets Navigated To The Login Page
When user Enters The Email In Email Field
And use Enters The Password In Password Field
Then user Clicks Login And It Navigates To The Next Page

Scenario: User Selects The Required Product 
Given user Gets Navigated To The Product Display Page
When user Scrolls And Moves To The Required Product Panel
And  user Clicks Add To Cart Button
Then user Clicks Proceed To Checkout And It Proceeds To The Next Page

Scenario: User Enters The Desired Quantity Of The Product
Given user Gets Navigated To The Quantity Selection Screen
When user Clears The Quantity TextField
And user Enters The Required Quantity
Then user Clicks Proceed To Checkout And It Navigates To The Next Page

Scenario: User Enters And Selects The User's Address
Given user Gets Navigated To The Address Selection Page
When user Selects The Address
And user Clicks The Correct Address
Then user Clicks Proceed To Checkout And It Navigates To The Next Shipping Page

Scenario: User Checks And Selects The Shipping Option
Given user Gets Navigated To The Shipping Options Page
When user Selects The Required Shipping  Option
And user Clicks The Terms Agreement Button
Then user Clicks The Proceed To Checkout Button And It Navigates To The Next Page

Scenario: User Selects The Payment And Confirms Order
Given user Gets Navigated To The Payments Page
When User Selects The Adequate Payment Method
And User Clicks On The Payment Method
Then user Clicks Confirm My Order

