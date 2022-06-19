package com.eComm.Object.Repository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.eComm.Utils.DriverClass;

public class TodoListRepo extends DriverClass {
	public static TodoListRepo todoRepo = null;

	// page Intialize
	public TodoListRepo(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	// Create Singelton Class
	public static TodoListRepo getInstance() {
		if (todoRepo == null) {
			todoRepo = new TodoListRepo(DriverClass.driver);
		}
		return todoRepo;
	}

	@FindBy(xpath = "//input[contains(@class , 'new-todo')]")
	public WebElement textBox;

	@FindBy(xpath = "//li[1]/div/label")
	public WebElement firstToDoItem;

	@FindBy(xpath = "//li[1]//input[@type = 'checkbox']")
	public WebElement firstToDoItemCheckBox;

	@FindBy(xpath = "(//div[@class='view'])[1]")
	public WebElement editFirstToDoItem;

	@FindBy(xpath = "(//button[@class='destroy'])[1]")
	public WebElement deleteIcon;

	@FindBy(xpath = "//a[text()='Completed']")
	public WebElement completedTodoFilter;
	@FindBy(xpath = "//a[text()='Active']")
	public WebElement activeTodoFilter;
	@FindBy(xpath = "//li[2]/div/label")
	public WebElement secondToDoItem;
	@FindBy(xpath = "//a[text()='All']")
	public WebElement allTodoFilter;
	@FindBy(xpath = "//button[normalize-space() ='Clear completed']")
	public WebElement clearCompleteTodoFilter;
	@FindBy(xpath = "//span[@class='todo-count']/strong")
	public WebElement activeTaskCount;

}
