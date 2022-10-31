$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature");
formatter.feature({
  "line": 1,
  "name": "Purchasing Clothing Products In Automation Practice Application",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Opens The Automation Application",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-opens-the-automation-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Firstautoscenario"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launches The Automation Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Moves To The SignIn Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Clicks The SignN Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Gets Navigated To The SignIn Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Launches_The_Automation_Application()"
});
formatter.result({
  "duration": 364459600,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Launches_The_Automation_Application(Autoprac_Stepdefinition.java:23)\r\n\tat ✽.Given user Launches The Automation Application(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Moves_To_The_SignIn_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_The_SignN_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_SignIn_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "User Enters The Login Details",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-enters-the-login-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Secondautoscenario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Gets Navigated To The Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user Enters The Email In Email Field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "use Enters The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Clicks Login And It Navigates To The Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_Login_Page()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Enters_The_Email_In_Email_Field()"
});
formatter.result({
  "duration": 10467007400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Enters_The_Email_In_Email_Field(Autoprac_Stepdefinition.java:48)\r\n\tat ✽.When user Enters The Email In Email Field(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.use_Enters_The_Password_In_Password_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_Login_And_It_Navigates_To_The_Next_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "User Selects The Required Product",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-selects-the-required-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user Gets Navigated To The Product Display Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user Scrolls And Moves To The Required Product Panel",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user Clicks Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Clicks Proceed To Checkout And It Proceeds To The Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_Product_Display_Page()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Scrolls_And_Moves_To_The_Required_Product_Panel()"
});
formatter.result({
  "duration": 10412448500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div/header/div[3]/div/div/div/a/img}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Scrolls_And_Moves_To_The_Required_Product_Panel(Autoprac_Stepdefinition.java:74)\r\n\tat ✽.When user Scrolls And Moves To The Required Product Panel(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_Add_To_Cart_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_Proceed_To_Checkout_And_It_Proceeds_To_The_Next_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "User Enters The Desired Quantity Of The Product",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-enters-the-desired-quantity-of-the-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user Gets Navigated To The Quantity Selection Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user Clears The Quantity TextField",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user Enters The Required Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Clicks Proceed To Checkout And It Navigates To The Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_Quantity_Selection_Screen()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clears_The_Quantity_TextField()"
});
formatter.result({
  "duration": 10415039300,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\n*** Element info: {Using\u003dname, value\u003dquantity_7_34_0_752719}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Clears_The_Quantity_TextField(Autoprac_Stepdefinition.java:106)\r\n\tat ✽.When user Clears The Quantity TextField(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Enters_The_Required_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_Proceed_To_Checkout_And_It_Navigates_To_The_Next_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "User Enters And Selects The User\u0027s Address",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-enters-and-selects-the-user\u0027s-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user Gets Navigated To The Address Selection Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user Selects The Address",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Clicks The Correct Address",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Clicks Proceed To Checkout And It Navigates To The Next Shipping Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_Address_Selection_Page()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Selects_The_Address()"
});
formatter.result({
  "duration": 8100,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_The_Correct_Address()"
});
formatter.result({
  "duration": 8100,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_Proceed_To_Checkout_And_It_Navigates_To_The_Next_Shipping_Page()"
});
formatter.result({
  "duration": 10399975100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\n*** Element info: {Using\u003dname, value\u003dprocessAddress}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Clicks_Proceed_To_Checkout_And_It_Navigates_To_The_Next_Shipping_Page(Autoprac_Stepdefinition.java:138)\r\n\tat ✽.Then user Clicks Proceed To Checkout And It Navigates To The Next Shipping Page(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:31)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "User Checks And Selects The Shipping Option",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-checks-and-selects-the-shipping-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user Gets Navigated To The Shipping Options Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user Selects The Required Shipping  Option",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user Clicks The Terms Agreement Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Clicks The Proceed To Checkout Button And It Navigates To The Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_Shipping_Options_Page()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Selects_The_Required_Shipping_Option()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_The_Terms_Agreement_Button()"
});
formatter.result({
  "duration": 10450598900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027checkbox\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Clicks_The_Terms_Agreement_Button(Autoprac_Stepdefinition.java:153)\r\n\tat ✽.And user Clicks The Terms Agreement Button(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_The_Proceed_To_Checkout_Button_And_It_Navigates_To_The_Next_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "User Selects The Payment And Confirms Order",
  "description": "",
  "id": "purchasing-clothing-products-in-automation-practice-application;user-selects-the-payment-and-confirms-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user Gets Navigated To The Payments Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Selects The Adequate Payment Method",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User Clicks On The Payment Method",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Clicks Confirm My Order",
  "keyword": "Then "
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Gets_Navigated_To_The_Payments_Page()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Selects_The_Adequate_Payment_Method()"
});
formatter.result({
  "duration": 9500,
  "status": "passed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_On_The_Payment_Method()"
});
formatter.result({
  "duration": 10421454200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEK\u0027, ip: \u0027192.168.29.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\Pratheek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 013d56693dce45628751dbd69bbe945e\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\"http://automationpractice.com/index.php?fc\u003dmodule\u0026module\u003dbankwire\u0026controller\u003dpayment\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationprac.stepdefinition.Autoprac_Stepdefinition.user_Clicks_On_The_Payment_Method(Autoprac_Stepdefinition.java:175)\r\n\tat ✽.And User Clicks On The Payment Method(C:/Users/Pratheek/eclipse-workspace/cucumberproj/src/test/java/com/automationprac/feature/AutomationPrac.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Autoprac_Stepdefinition.user_Clicks_Confirm_My_Order()"
});
formatter.result({
  "status": "skipped"
});
});