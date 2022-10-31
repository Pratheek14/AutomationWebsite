package com.automationprac.runner;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\src\\test\\java\\com\\automationprac\\feature\\AutomationPrac.feature",glue="com.automationprac.stepdefinition",
dryRun=false,monochrome=true,strict=false,
plugin={"html:report/Html_Report_For_Automation_Practice","pretty","json:report/Json_Report_For_Automation_Practice.json","com.cucumber.listener.ExtentCucumberFormatter:report/Extent_Report_For_Automation_Practice.html"})

public class Autoprac_Runner_Class{
		
	
	public static WebDriver driver;

	
	
	@BeforeClass
	public static void starting() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\Driver\\chromedriver.exe");
		
		driver = new ChromeDriver();
				
		driver.manage().window().maximize();
	
		
		}
	
	@AfterClass
	public static void ending() throws Throwable {
		
		TakesScreenshot ts = (TakesScreenshot)driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File dest =new File("C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\Screenshots//autoprac.png");
		FileUtils.copyFile(src,dest);
		
		Thread.sleep(4000);
		
		driver.close();
}
	

	
}
