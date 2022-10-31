package com.adactin.stepdefinition;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
public static WebDriver driver=RunnerClass.driver;
	
	@Given("^user Launches The Adactin Application$")
	public void user_Launches_The_Adactin_Application() throws Throwable {
		driver.get("https://adactinhotelapp.com/");
		
	   }

	@When("^user Enters The Username In The Username TextBox$")
	public void user_Enters_The_Username_In_The_Username_TextBox() throws Throwable {
		
		WebElement LoginUser = driver.findElement(By.id("username"));
		
		LoginUser.sendKeys("PratheekV");
	}

	@When("^user Enters The Password In The Password Textbox$")
	public void user_Enters_The_Password_In_The_Password_Textbox() throws Throwable {
		
		WebElement LoginPass = driver.findElement(By.id("password"));

		LoginPass.sendKeys("Pratheek");
	}

	@Then("^user Clicks The Login Button And It Navigates To The Next Page$")
	public void user_Clicks_The_Login_Button_And_It_Navigates_To_The_Next_Page() throws Throwable {
		
		driver.findElement(By.xpath("//input[@type='Submit']")).click();	   
	    
	}

	@Given("^user Gets Navigated To The Hotels Search Page$")
	public void user_Gets_Navigated_To_The_Hotels_Search_Page() throws Throwable {
	}

	@When("^user Enters The Location,Hotels,RoomType,No\\.Of Rooms In Their Respective TextBoxes$")
	public void user_Enters_The_Location_Hotels_RoomType_No_Of_Rooms_In_Their_Respective_TextBoxes() throws Throwable {
		WebElement Location = driver.findElement(By.name("location"));

		Select se = new Select(Location);

		se.selectByValue("Los Angeles");

		WebElement Hotels = driver.findElement(By.id("hotels"));

		Select se1 = new Select(Hotels);

		se1.selectByIndex(4);

		WebElement RoomType = driver.findElement(By.id("room_type"));

		Select se2 = new Select(RoomType);

		se2.selectByVisibleText("Deluxe");

		WebElement RoomNum = driver.findElement(By.name("room_nos"));

		Select se3 = new Select(RoomNum);

		se3.selectByIndex(1);
	    
		
	}

	@When("^user Enters The Check In Date,Check Out Date,Adults Per Room,Children Per Room In Their Respective TextBoxes$")
	public void user_Enters_The_Check_In_Date_Check_Out_Date_Adults_Per_Room_Children_Per_Room_In_Their_Respective_TextBoxes() throws Throwable {
	    
		WebElement checkin = driver.findElement(By.name("datepick_in"));
		checkin.clear();
		checkin.sendKeys("01/10/2022");


		WebElement checkout = driver.findElement(By.name("datepick_out"));
		checkout.clear();
		checkout.sendKeys("05/10/2022");


		WebElement adultroom = driver.findElement(By.id("adult_room"));
		Select se4 = new Select(adultroom);
		se4.selectByIndex(1);
	}

	@Then("^user Clicks Search Button And It Navigates To The Next Page$")
	public void user_Clicks_Search_Button_And_It_Navigates_To_The_Next_Page() throws Throwable {
	    
		driver.findElement(By.id("Submit")).click();
	}

	@Given("^User Gets Navigated To The Hotel Selection Page$")
	public void user_Gets_Navigated_To_The_Hotel_Selection_Page() throws Throwable {
	}

	@When("^user Selects The Hotel Cornice$")
	public void user_Selects_The_Hotel_Cornice() throws Throwable {
	    
		driver.findElement(By.name("radiobutton_0")).click();
	}

	@When("^user Clicks The Checkbox For Hotel Cornice$")
	public void user_Clicks_The_Checkbox_For_Hotel_Cornice() throws Throwable {
		
		driver.findElement(By.name("radiobutton_0")).click();
	}

	@Then("^user Clicks Continue Button And It Navigates To The Next Page$")
	public void user_Clicks_Continue_Button_And_It_Navigates_To_The_Next_Page() throws Throwable {
		
		driver.findElement(By.id("continue")).click();
	}

	@Given("^user Gets Navigated To The BookNow Page$")
	public void user_Gets_Navigated_To_The_BookNow_Page() throws Throwable {
	}

	@When("^user Enters The First Name,Last Name And Billing Address$")
	public void user_Enters_The_First_Name_Last_Name_And_Billing_Address() throws Throwable {
	    
		driver.findElement(By.name("first_name")).sendKeys("Pratheek");
		driver.findElement(By.name("last_name")).sendKeys("V");
		driver.findElement(By.name("address")).sendKeys(" Chennai,Tamilnadu");   	
	}

	@When("^user Enters The Credit Card Number,Credit Card Type,Expiry Date And CVV Number$")
	public void user_Enters_The_Credit_Card_Number_Credit_Card_Type_Expiry_Date_And_CVV_Number() throws Throwable {
	    
		driver.findElement(By.name("cc_num")).sendKeys("1234567890123456");

		WebElement credtype = driver.findElement(By.name("cc_type"));
		Select se5 = new Select(credtype);
		se5.selectByVisibleText("Master Card");

		WebElement expimon = driver.findElement(By.name("cc_exp_month"));
		Select se6 = new Select(expimon);
		se6.selectByIndex(1);

		WebElement expiyear = driver.findElement(By.name("cc_exp_year"));
		Select se7 = new Select(expiyear);
		se7.selectByIndex(12);
		driver.findElement(By.id("cc_cvv")).sendKeys("123");	
	}

	@Then("^user Clicks BookNow Button And It Navigates To The Next Page$")
	public void user_Clicks_BookNow_Button_And_It_Navigates_To_The_Next_Page() throws Throwable {
	
		driver.findElement(By.name("book_now")).click();
	}

	@Given("^user Gets Navigated To The Booking Confirmation Page$")
	public void user_Gets_Navigated_To_The_Booking_Confirmation_Page() throws Throwable {
	}

	@When("^user Checks The Booking Confirmation Details With Order Number$")
	public void user_Checks_The_Booking_Confirmation_Details_With_Order_Number() throws Throwable {
		
		
		
	    
	}

	@When("^user Clicks The Logout Button$")
	public void user_Clicks_The_Logout_Button() throws Throwable {
	
		Thread.sleep(8000);
		TakesScreenshot ts =(TakesScreenshot)driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File destination = new File("C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\Screenshots//OrderNumberConfirmation.png");
		FileUtils.copyFile(source,destination);
		driver.findElement(By.xpath("/html/body/table[2]/tbody/tr[2]/td/form/table/tbody/tr[19]/td[2]/input[3]")).click();
		
	}

	@Then("^user Logsout Of The Application$")
	public void user_Logsout_Of_The_Application() throws Throwable {
		
		
	    }


	

}
