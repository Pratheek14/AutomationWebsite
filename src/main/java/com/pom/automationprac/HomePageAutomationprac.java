package com.pom.automationprac;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePageAutomationprac{
	
	public static WebDriver driver;
	
	@FindBy(xpath="//a[@href='http://automationpractice.com/index.php?controller=my-account'][1]")
	private WebElement homepage;

	
	public HomePageAutomationprac(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	public WebElement getHomepage() {
		return homepage;
	}
	

}
