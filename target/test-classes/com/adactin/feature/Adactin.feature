Feature: Hotel Booking In Adactin Application
@firstscenario
Scenario: User Logs In The Adactin Application
Given user Launches The Adactin Application
When user Enters The Username In The Username TextBox
And user Enters The Password In The Password Textbox
Then user Clicks The Login Button And It Navigates To The Next Page

@secondscenario
Scenario: User Enters Details To Search For Hotels
Given user Gets Navigated To The Hotels Search Page
When user Enters The Location,Hotels,RoomType,No.Of Rooms In Their Respective TextBoxes
And user Enters The Check In Date,Check Out Date,Adults Per Room,Children Per Room In Their Respective TextBoxes
Then user Clicks Search Button And It Navigates To The Next Page 

@thirdscenario
Scenario: User Selects The Prefered Hotel
Given User Gets Navigated To The Hotel Selection Page 
When user Selects The Hotel Cornice
And user Clicks The Checkbox For Hotel Cornice
Then user Clicks Continue Button And It Navigates To The Next Page

@fourthscenario
Scenario: User Enters The Name,Address And Card Details
Given user Gets Navigated To The BookNow Page
When user Enters The First Name,Last Name And Billing Address
And user Enters The Credit Card Number,Credit Card Type,Expiry Date And CVV Number
Then user Clicks BookNow Button And It Navigates To The Next Page

@fifthscenario
Scenario: User Logsout After Checking Booking Confirmation
Given user Gets Navigated To The Booking Confirmation Page
When user Checks The Booking Confirmation Details With Order Number
And user Clicks The Logout Button
Then user Logsout Of The Application



