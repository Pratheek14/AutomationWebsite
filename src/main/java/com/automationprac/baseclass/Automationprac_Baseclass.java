package com.automationprac.baseclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Automationprac_Baseclass {
	
			
	public static WebDriver driver;
	
	public static void browserLaunch(String browser) {
		
		if(browser.equalsIgnoreCase("Chrome")) {
			
			System.setProperty("webdriver.chrome.driver","C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\Driver\\chromedriver.exe" );
			
			 driver = new ChromeDriver();
			}
		
		else if (browser.equalsIgnoreCase("FireFox")) {
			
			System.setProperty("webdriver.gecko.driver",".\\firefox.exe");
			
			 driver = new FirefoxDriver();
			}
		  driver.manage().window().maximize();

	}
	
	public static void clickonelement(WebElement element) {
		
		element.click();
		
		}
	
	public static void typeinputvalue(WebElement element,String value) {
		
		element.sendKeys(value);
		
	
	
	
}
}
