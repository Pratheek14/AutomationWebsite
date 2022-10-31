package com.adactin.runner;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\src\\test\\java\\com\\adactin\\feature\\Adactin.feature",
glue="com.adactin.stepdefinition",
monochrome=true,dryRun=false,strict=true,
plugin= {"html:report/Html_Report_For_Adactin","pretty","json:report/Json_Report_For_Adactin.json","com.cucumber.listener.ExtentCucumberFormatter:report/Extent_Report_For_Adactin.html"})//tags-if we want to run or not run a particular scenario

public class RunnerClass {
	
	public static WebDriver driver;

	@BeforeClass
	public static void launching() {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Pratheek\\eclipse-workspace\\cucumberproj\\Driver\\chromedriver.exe") ;
		
       driver = new ChromeDriver();	
       
       driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
       
       driver.manage().window().maximize();
       
       }
	
       
    @AfterClass
    public static void closing() throws Throwable {
    	
    	Thread.sleep(3000);
    	
    	driver.close();
	
		
		}
	
	

}
