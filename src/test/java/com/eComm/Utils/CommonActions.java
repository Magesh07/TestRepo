package com.eComm.Utils;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.listener.Reporter;

public class CommonActions {
	public static WebDriver driver;
	public static CommonActions actionItem = null;

	public CommonActions(WebDriver driver) {
		this.driver = driver;
	}

	public static CommonActions getInstance() {
		if (actionItem == null) {
			actionItem = new CommonActions(DriverClass.driver);
		}
		return actionItem;
	}

	public void launchURL(String URL) {
		driver.get(URL);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	// Navigate URL
	public void navigatetoURL(String URL) throws InterruptedException {
		driver.navigate().to(URL);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		add_Log_With_ScreenShot("mvcTODO portal is launched Successfully!");
	}

	// Click Action
	public void clickAction(WebElement element) throws InterruptedException {
		element.click();

	}
	// Send Action

	public void sendAction(WebElement element, String arg) {
		element.sendKeys(arg);
	}

	// Clear Action

	public void clearAction(WebElement element) {
		element.clear();
	}

	// get text by attribute
	public String getTextAttribute(WebElement element) {
		String text = element.getAttribute("value");
		return text;
	}

	// Send Action
	public void sendKeysAndPressEnter(WebElement element, String arg) {
		element.sendKeys(arg, Keys.ENTER);
	}

	// SendKeys Action
	public void sendKeys(WebElement element, String arg) {

		element.sendKeys(arg);
	}

	// Press Enter using SendKeys
	public void pressEnterUsingSendKeys(WebElement element, String arg) {

		element.sendKeys(Keys.ENTER);
	}

	// get text of the element
	public String getText(WebElement element) {
		String text = element.getText();
		return text;
	}

	public void doubleClickAction(WebElement element) {
		Actions action = new Actions(driver);
		action.doubleClick(element).perform();
	}

	public void movetoElementAction(WebElement element) {
		Actions action = new Actions(driver);
		action.moveToElement(element).build().perform();
	}

	public void waitUntilElementClickable(String locator) {
		new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.xpath(locator)));
	}

	public String getAttribute(WebElement element, String attribute)

	{
		String attributeValue = element.getAttribute(attribute);
		return attributeValue;
	}

	// Attach screenshot
	public void get_Screenshot(WebDriver driver) {
		String dateName = new SimpleDateFormat("yyyyMMdd").format(new Date()) + generateRandomHexToken(7);
		// String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		String destination = System.getProperty("user.dir") + "/test-output/" + "screenshot" + dateName + ".png";
		File finalDestination = new File(destination);
		try {
			FileUtils.copyFile(source, finalDestination);
			Reporter.addScreenCaptureFromPath(
					System.getProperty("user.dir") + "/test-output/" + "screenshot" + dateName + ".png");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static String generateRandomHexToken(int byeLength) {
		SecureRandom secureRandom = new SecureRandom();
		byte[] token = new byte[byeLength];
		secureRandom.nextBytes(token);
		return new BigInteger(1, token).toString(16);
	}

	// Step log
	public void report_Setp_Log(String message) throws InterruptedException {
		// Thread.sleep(1000);
		Reporter.addStepLog(message);
	}

	// Report log with screen shot
	public void add_Log_With_ScreenShot(String message) throws InterruptedException {
		// Thread.sleep(1000);
		Reporter.addStepLog(message);
		get_Screenshot(DriverClass.driver);
	}

	// Page referesh
	public void refreshPage() {

		driver.navigate().refresh();
	}

	public void sendKeysbyJS(WebElement element, String text) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].value=arguments[1];", element, text);
	}

	public void sendKeyByRobotAction(String text) throws InterruptedException, AWTException {

		StringSelection stringSelection = new StringSelection(text);
		Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
		clipboard.setContents(stringSelection, null);

		Robot robot = null;
		robot = new Robot();
		robot.delay(250);
		// Thread.sleep(2000);
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_A);
		robot.keyRelease(KeyEvent.VK_A);
		robot.keyRelease(KeyEvent.VK_CONTROL);
		/*
		 * robot.keyPress(KeyEvent.VK_ENTER); robot.keyRelease(KeyEvent.VK_ENTER);
		 */
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_ENTER);
		robot.keyRelease(KeyEvent.VK_ENTER);
	}

}
