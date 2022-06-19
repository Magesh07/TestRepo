package com.eComm.Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverClass {

	public static WebDriver driver;

	public static WebDriver getDriver(String browser) {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		return driver;
	}

	public static void quitdriver() {
		driver.close();
	}
}
