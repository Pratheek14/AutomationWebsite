package com.automationprac.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.automationprac.runner.Autoprac_Runner_Class;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Autoprac_Stepdefinition {
	
	public static WebDriver driver= Autoprac_Runner_Class.driver;
	
	@Given("^user Launches The Automation Application$")
	public void user_Launches_The_Automation_Application() throws Throwable {
		driver.get("http://automationpractice.com/index.php");
	}

	@When("^user Moves To The SignIn Button$")
	public void user_Moves_To_The_SignIn_Button() throws Throwable {
	   
	}

	@When("^user Clicks The SignN Button$")
	public void user_Clicks_The_SignN_Button() throws Throwable {
		driver.findElement(By.xpath("//a[@href='http://automationpractice.com/index.php?controller=my-account'][1]")).click();
	}

	@Then("^user Gets Navigated To The SignIn Page$")
	public void user_Gets_Navigated_To_The_SignIn_Page() throws Throwable {
	   
	}

	@Given("^user Gets Navigated To The Login Page$")
	public void user_Gets_Navigated_To_The_Login_Page() throws Throwable {
	    
	}

	@When("^user Enters The Email In Email Field$")
	public void user_Enters_The_Email_In_Email_Field() throws Throwable {
        driver.findElement(By.id("email")).sendKeys("swei316@gmail.com");

	}

	@When("^use Enters The Password In Password Field$")
	public void use_Enters_The_Password_In_Password_Field() throws Throwable {
        driver.findElement(By.id("passwd")).sendKeys("pratv");

	}

	@Then("^user Clicks Login And It Navigates To The Next Page$")
	public void user_Clicks_Login_And_It_Navigates_To_The_Next_Page() throws Throwable {
        driver.findElement(By.id("SubmitLogin")).click();

	    
	}

	@Given("^user Gets Navigated To The Product Display Page$")
	public void user_Gets_Navigated_To_The_Product_Display_Page() throws Throwable {
	   
	}

	@When("^user Scrolls And Moves To The Required Product Panel$")
	public void user_Scrolls_And_Moves_To_The_Required_Product_Panel() throws Throwable {
       Actions act = new Actions(driver);
        
        driver.findElement(By.xpath("/html/body/div/div/header/div[3]/div/div/div/a/img")).click();
        
        JavascriptExecutor js=(JavascriptExecutor)driver;
        
       js.executeScript("window.scrollBy(0,1000)");
       
       WebElement dressimg = driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[7]/div/div[1]/div/a[1]/img"));
       
       act.moveToElement(dressimg).build().perform();
	}

	@When("^user Clicks Add To Cart Button$")
	public void user_Clicks_Add_To_Cart_Button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	       
	       driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div/ul/li[7]/div/div[2]/div[2]/a/span")).click();
	}

	@Then("^user Clicks Proceed To Checkout And It Proceeds To The Next Page$")
	public void user_Clicks_Proceed_To_Checkout_And_It_Proceeds_To_The_Next_Page() throws Throwable {
		
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@class='btn btn-default button button-medium']")).click();
	}

	@Given("^user Gets Navigated To The Quantity Selection Screen$")
	public void user_Gets_Navigated_To_The_Quantity_Selection_Screen() throws Throwable {
		
	}

	@When("^user Clears The Quantity TextField$")
	public void user_Clears_The_Quantity_TextField() throws Throwable {
		driver.findElement(By.name("quantity_7_34_0_752719")).clear();

	}

	@When("^user Enters The Required Quantity$")
	public void user_Enters_The_Required_Quantity() throws Throwable {
		 driver.findElement(By.name("quantity_7_34_0_752719")).sendKeys("8");
	}

	@Then("^user Clicks Proceed To Checkout And It Navigates To The Next Page$")
	public void user_Clicks_Proceed_To_Checkout_And_It_Navigates_To_The_Next_Page() throws Throwable {
	       driver.findElement(By.xpath("//a[@href='http://automationpractice.com/index.php?controller=order&step=1']")).click();

	}

	@Given("^user Gets Navigated To The Address Selection Page$")
	public void user_Gets_Navigated_To_The_Address_Selection_Page() throws Throwable {
	    
	}

	@When("^user Selects The Address$")
	public void user_Selects_The_Address() throws Throwable {
	    
	}

	@When("^user Clicks The Correct Address$")
	public void user_Clicks_The_Correct_Address() throws Throwable {
	    
	}

	@Then("^user Clicks Proceed To Checkout And It Navigates To The Next Shipping Page$")
	public void user_Clicks_Proceed_To_Checkout_And_It_Navigates_To_The_Next_Shipping_Page() throws Throwable {
	       driver.findElement(By.name("processAddress")).click();

	}

	@Given("^user Gets Navigated To The Shipping Options Page$")
	public void user_Gets_Navigated_To_The_Shipping_Options_Page() throws Throwable {
	    
	}

	@When("^user Selects The Required Shipping  Option$")
	public void user_Selects_The_Required_Shipping_Option() throws Throwable {
	}

	@When("^user Clicks The Terms Agreement Button$")
	public void user_Clicks_The_Terms_Agreement_Button() throws Throwable {
		driver.findElement(By.xpath("//input[@type='checkbox']")).click();
	    
	}

	@Then("^user Clicks The Proceed To Checkout Button And It Navigates To The Next Page$")
	public void user_Clicks_The_Proceed_To_Checkout_Button_And_It_Navigates_To_The_Next_Page() throws Throwable {
	       driver.findElement(By.name("processCarrier")).click();

	}

	@Given("^user Gets Navigated To The Payments Page$")
	public void user_Gets_Navigated_To_The_Payments_Page() throws Throwable {
	    
	}

	@When("^User Selects The Adequate Payment Method$")
	public void user_Selects_The_Adequate_Payment_Method() throws Throwable {
	    
	}

	@When("^User Clicks On The Payment Method$")
	public void user_Clicks_On_The_Payment_Method() throws Throwable {
	       driver.findElement(By.xpath("//a[@href=\"http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment\"]")).click();

	}

	@Then("^user Clicks Confirm My Order$")
	public void user_Clicks_Confirm_My_Order() throws Throwable {
	       driver.findElement(By.xpath("//button[@class='button btn btn-default button-medium']")).click(); 

	}
	
	

}
