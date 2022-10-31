package com.sdp;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.pom.automationprac.HomePageAutomationprac;
import com.pom.automationprac.LoginPage;

public class PageObjectManager{
    public static WebDriver driver;
    
    private HomePageAutomationprac hp;
	private LoginPage Lp;
	
	
	public PageObjectManager(WebDriver pomdriver) {
		this.driver=pomdriver;
		PageFactory.initElements(pomdriver,this);
	}
	public HomePageAutomationprac getObjHp() {
		hp =new HomePageAutomationprac(driver);
		return hp;
		}
	public LoginPage getObjLp() {
	  Lp = new LoginPage(driver);
	  return Lp;

	}
}
