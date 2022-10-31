package com.pom.automationprac;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage{
	
	public static WebDriver driver;
	
	@FindBy(id ="email")
	private WebElement email;

	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	public WebElement getEmail() {
		return email;
	}
	
	@FindBy(id="passwd")
	private WebElement password;

	public WebElement getPassword() {
		return password;
	}
	
	

}
