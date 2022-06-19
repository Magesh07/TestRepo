package com.eComm.PageFunctions;

import java.awt.AWTException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.eComm.Utils.BaseStepAction;
import com.eComm.Utils.DriverClass;

public class TodoListPage extends BaseStepAction {
	// public static WebDriver driver;
	public static TodoListPage todoListPage;


	public static TodoListPage getInstance() {
		if (todoListPage == null)
			todoListPage = new TodoListPage();
		return todoListPage;

	}
	

	public void entertodoTaskName(String todoTaskName) throws InterruptedException {

		
		getCommonActionsInstance().sendKeys(getTodoListRepoInstance().textBox, todoTaskName);
		getCommonActionsInstance()
				.add_Log_With_ScreenShot("User KEYED in taskName '" + todoTaskName + "' in mvcToDoPortal!");
		
		getCommonActionsInstance().pressEnterUsingSendKeys(getTodoListRepoInstance().textBox, todoTaskName);
		getCommonActionsInstance().add_Log_With_ScreenShot(
				"Task '" + todoTaskName + "' has been created Successfully in mvcToDo Portal!");
	}

	public void verifyCreatedTask(String enteredtodoTaskName) throws InterruptedException {
		
		WebElement element = DriverClass.driver.findElement(By.xpath("//label[text()='" + enteredtodoTaskName + "']"));
		String actualTaskName = getCommonActionsInstance().getText(element);
		Assert.assertEquals(actualTaskName, enteredtodoTaskName);
		getCommonActionsInstance().report_Setp_Log("User created task " + actualTaskName + " listed in the TODO List");
	}

	public void launchTODOPage(String URL) throws InterruptedException {
		getCommonActionsInstance().navigatetoURL(URL);

	}

	public void completeToDoFirstItem() throws InterruptedException {
		getCommonActionsInstance().clickAction(getTodoListRepoInstance().firstToDoItemCheckBox);
	}

	public void editToDoSpecificItem(String todoTaskName, String updatedTaskName)
			throws InterruptedException, AWTException {

		WebElement element = DriverClass.driver.findElement(By.xpath("//label[text()='" + todoTaskName + "']"));
		getCommonActionsInstance().doubleClickAction(element);
		getCommonActionsInstance().sendKeyByRobotAction(updatedTaskName);
		getCommonActionsInstance().add_Log_With_ScreenShot("User updated the TODO task!");
	}

	public void verifyUpdatedTask(String todoTaskName) throws InterruptedException {

		WebElement element = DriverClass.driver.findElement(By.xpath("//label[text()='" + todoTaskName + "']"));
		String actualTaskName = getCommonActionsInstance().getText(element);
		Assert.assertEquals(actualTaskName, todoTaskName);
		getCommonActionsInstance()
				.report_Setp_Log("User UPDATED task '" + todoTaskName + "' is displayed in the ToDo List ");
	}

	public void deleteTodoFirstItem() throws InterruptedException {

		getCommonActionsInstance().movetoElementAction(getTodoListRepoInstance().firstToDoItem);
		getCommonActionsInstance().clickAction(getTodoListRepoInstance().deleteIcon);
	}

	public void applyCompletedTodoFilter() throws InterruptedException {

		getCommonActionsInstance().clickAction(getTodoListRepoInstance().completedTodoFilter);
		getCommonActionsInstance().add_Log_With_ScreenShot("User clicked the 'COMPLETE' todo filter option");
		
	}

	public void verifyCompletedTaskAfterFilter(String enteredtodoTaskName) throws InterruptedException {
		WebElement element = DriverClass.driver.findElement(By.xpath("//label[text()='" + enteredtodoTaskName + "']"));
		String actualTaskName = getCommonActionsInstance().getText(element);
		Assert.assertEquals(actualTaskName, enteredtodoTaskName);
		getCommonActionsInstance().report_Setp_Log(
				"User COMPLETED task(s) '" + enteredtodoTaskName + "' are displayed in the ToDo List ");
	}

	public void verifyCompletedTask(String enteredtodoTaskName) throws InterruptedException {

		WebElement element = DriverClass.driver
				.findElement(By.xpath("//label[text()='" + enteredtodoTaskName + "']/../.."));
		String className = getCommonActionsInstance().getAttribute(element, "class");
		Assert.assertTrue(className.contains("completed"));
		getCommonActionsInstance()
				.report_Setp_Log("User COMPLETED task '" + enteredtodoTaskName + "' listed in the TODO List");
	}

	public void applyActiveTodoFilter() throws InterruptedException {

		getCommonActionsInstance().clickAction(getTodoListRepoInstance().activeTodoFilter);
		getCommonActionsInstance().add_Log_With_ScreenShot("User clicked the 'ACTIVE' todo filter option");

	}

	public void verifyActiveTaskAfterFilter(String enteredtodoTaskName) throws InterruptedException {
		
		WebElement element = DriverClass.driver.findElement(By.xpath("//label[text()='" + enteredtodoTaskName + "']"));

		String actualTaskName = getCommonActionsInstance().getText(element);
		Assert.assertEquals(actualTaskName, enteredtodoTaskName);
		getCommonActionsInstance()
				.report_Setp_Log("User's ACTIVE task '" + enteredtodoTaskName + "' is displayed in the ToDo List ");
	}

	public void applyAllTodoFilter() throws InterruptedException {

		getCommonActionsInstance().clickAction(getTodoListRepoInstance().allTodoFilter);
		getCommonActionsInstance().add_Log_With_ScreenShot("User clicked the 'ALL' todo filter option");
	}

	public void verifyAllTaskAfterFilter(String enteredtodoTaskName) throws InterruptedException {
		
		WebElement element = DriverClass.driver.findElement(By.xpath("//label[text()='" + enteredtodoTaskName + "']"));
		String actualTaskName = getCommonActionsInstance().getText(element);
		Assert.assertEquals(actualTaskName, enteredtodoTaskName);
		getCommonActionsInstance()
				.report_Setp_Log("User's task '" + enteredtodoTaskName + "' is displayed in the ToDo List ");
	}

	public void applyClearCompletedTodoFilter() throws InterruptedException {

		getCommonActionsInstance().clickAction(getTodoListRepoInstance().clearCompleteTodoFilter);
		getCommonActionsInstance().add_Log_With_ScreenShot("User clicked the 'CLEAR COMPLETED' todo filter option");

	}

	public void verifyClearCompleteTaskAfterFilter(String enteredtodoTaskName) throws InterruptedException {
	

		try {
			System.out.println("<---------Before-Excpetion--CLEARTASK----->>>>>>>");
			getCommonActionsInstance().refreshPage();
			DriverClass.driver.manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS);
			// Thread.sleep(1000);
			WebElement element = DriverClass.driver
					.findElement(By.xpath("//label[text()='" + enteredtodoTaskName + "']"));
			getCommonActionsInstance().report_Setp_Log(
					"User completed task '" + enteredtodoTaskName + "' is NOT CLEARED from the ToDo List ");
			Assert.assertTrue(false);
			System.out.println("<---------After-Excpetion--CLEARTASK----->>>>>>>");

		} catch (NoSuchElementException exception) {
			// TODO Auto-generated catch block
			// Output expected NoSuchElementExceptions.
			System.out.println("<<<<<----verifyClearCompleteTaskAfterFilter->>>>>" + enteredtodoTaskName);
			Assert.assertTrue(true);
			getCommonActionsInstance().report_Setp_Log(
					"User completed task '" + enteredtodoTaskName + "' is CLEARED from the ToDo List ");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		}

	}

	public void completeSpecficTask(String enteredtodoTaskName) throws InterruptedException {

		WebElement element = DriverClass.driver
				.findElement(By.xpath("// label[text()='" + enteredtodoTaskName + "']/../input"));
		getCommonActionsInstance().clickAction(element);
		getCommonActionsInstance().add_Log_With_ScreenShot(
				"User marked mvcToDo Task " + enteredtodoTaskName + " is displayed as COMPLETED in Portal!");

	}

	public void getActiveToDoTaskCount() throws InterruptedException {

		// activeTaskCount
		String activeTaskCount = getCommonActionsInstance().getText(getTodoListRepoInstance().activeTaskCount);
		System.out.println("activeTaskCount->>>>>>>" + activeTaskCount);
		getCommonActionsInstance().report_Setp_Log("'" + activeTaskCount + "' ACTIVE task's are pending for user ");
	}
}
