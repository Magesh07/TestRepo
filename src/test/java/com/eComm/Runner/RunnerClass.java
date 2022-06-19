package com.eComm.Runner;

import java.io.File;
import java.sql.Driver;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import com.eComm.Utils.DriverClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@Test
@CucumberOptions(features = "src/test/resources/Features/", glue = { "com.eComm.StepDefinitions" }, plugin = {
		"pretty:src\\Reports\\PrettyReport\\STDOUT", "html:src\\Reports\\PrettyReport\\install",
		"json:src\\Reports\\JSONReport\\cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:" }, monochrome = true)
//, tags = { "@sanity", "@test" }
//, tags = { "@sanity,@test"}
public class RunnerClass extends AbstractTestNGCucumberTests {

	@BeforeClass
	public static void initializeReport() {
		System.out.println("+++++++++++++BeforeClass started Running+++++++++++++");
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		String timeStamp = new SimpleDateFormat("yyyy_MM_dd HH.mm").format(new Date(System.currentTimeMillis()));
		extentProperties
				.setReportPath("src/Reports/ExtendReports/" + "Automation Report For Singtel - ToDo Web Application"
						+ "-" + "Singapore" + "-" + timeStamp + ".html");
		extentProperties.setProjectName("Singtel ToDo Task Manage Portal");
		System.out.println("+++++++++++++BeforeClass started Running+++++++++++++");

	}

	@AfterClass
	public static void afterClass() {
		System.out.println("+++++++++++++afterClass started Running+++++++++++++");
		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		System.out.println("Report being generated");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("64 Bit", "Windows 10");
		Reporter.setSystemInfo("3.14.0", "Selenium");
		Reporter.setSystemInfo("3.3.3", "Maven");
		Reporter.setSystemInfo("11.0.15.1", "Java Version");
		Reporter.setTestRunnerOutput("Cucumber TestNG Test Runner");
		System.out.println("Launch driver after class");
		System.out.println("Report generation completed");
		// System.out.print("Stop service");
	}

	@AfterClass
	public static void quitBrowser() {
		DriverClass.quitdriver();
	}

}
