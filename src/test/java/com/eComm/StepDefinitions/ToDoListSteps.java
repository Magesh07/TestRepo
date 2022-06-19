package com.eComm.StepDefinitions;

import com.eComm.Utils.BaseStepAction;
import com.eComm.Utils.DriverClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToDoListSteps extends BaseStepAction {

	@Given("^User loads the todomvc portal URL \"([^\"]*)\"$")
	public void user_loads_the_todomvc_portal_URL(String URL) throws Throwable {
		DriverClass.getDriver("chrome");
		getTodoListPageInstance().launchTODOPage(URL);
	}

	@When("^User entered the todomvc task name \"([^\"]*)\"$")
	public void user_entered_the_todomvc_task_name(String taskName) throws Throwable {
		getTodoListPageInstance().entertodoTaskName(taskName);
	}

	@Then("^todomvc task \"([^\"]*)\" successfully added in the list$")
	public void todomvc_task_successfully_added_in_the_list(String taskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyCreatedTask(taskName);

	}

	@When("^User select the created todo task name \"([^\"]*)\"$")
	public void user_select_the_created_todo_task_name(String taskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	
		getTodoListPageInstance().completeSpecficTask(taskName);
	}

	@Then("^Verify entered task \"([^\"]*)\" completed by TodoUser$")
	public void verify_entered_task_completed_by_TodoUser(String enteredtodoTaskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyCompletedTask(enteredtodoTaskName);

	}

	@When("^User edit the previously created todo task name \"([^\"]*)\" to \"([^\"]*)\"$")
	public void user_edit_the_previously_created_todo_task_name(String taskName,String updatedTaskName ) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().editToDoSpecificItem(taskName,updatedTaskName);
	}

	@Then("^todomvc task \"([^\"]*)\" successfully UPDATED in the list$")
	public void todomvc_task_successfully_UPDATED_in_the_list(String enteredtodoTaskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyUpdatedTask(enteredtodoTaskName);
	}

	@When("^User DELETE the previously created todo task name \"([^\"]*)\"$")
	public void user_DELETE_the_previously_created_todo_task_name(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().deleteTodoFirstItem();
	}

	@When("^User click on COMPLETED option$")
	public void user_click_on_COMPLETED_option() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().applyCompletedTodoFilter();

	}

	@Then("^COMPLETED todo task \"([^\"]*)\" listed successfully$")
	public void completed_todo_task_listed_successfully(String enteredtodoTaskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyCompletedTaskAfterFilter(enteredtodoTaskName);
	}

	@When("^User click on ACTIVE option$")
	public void user_click_on_ACTIVE_option() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().applyActiveTodoFilter();
	}

	@Then("^ACTIVE todo task \"([^\"]*)\" listed successfully$")
	public void active_todo_task_listed_successfully(String enteredtodoTaskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyActiveTaskAfterFilter(enteredtodoTaskName);
	}

	@When("^User click on ALL option$")
	public void user_click_on_ALL_option() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().applyAllTodoFilter();
	}

	@Then("^All the todo task \"([^\"]*)\" listed successfully$")
	public void all_the_todo_task_listed_successfully(String enteredtodoTaskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyAllTaskAfterFilter(enteredtodoTaskName);
	}

	@When("^User click on CLEAR COMPLETED option$")
	public void user_click_on_CLEAR_COMPLETED_option() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().applyClearCompletedTodoFilter();

	}

	@Then("^COMPLETED todo tasks \"([^\"]*)\" are cleared successfully$")
	public void completed_todo_tasks_are_cleared_successfully(String enteredtodoTaskName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().verifyClearCompleteTaskAfterFilter(enteredtodoTaskName);
	}

	@Then("^Check for number of active task remining$")
	public void Check_for_number_of_active_task_remining() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		getTodoListPageInstance().getActiveToDoTaskCount();

	}

}
