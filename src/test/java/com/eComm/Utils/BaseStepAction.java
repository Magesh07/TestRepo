package com.eComm.Utils;

import com.eComm.Object.Repository.TodoListRepo;
import com.eComm.PageFunctions.TodoListPage;

public class BaseStepAction {
	// -----------object Repo----------///

	protected TodoListRepo getTodoListRepoInstance() {
		return TodoListRepo.getInstance();

	}
	// --------ToList-Page--------

	protected TodoListPage getTodoListPageInstance() {
		return TodoListPage.getInstance();
	}

	// --------CommonActions--------Create Instance----//
	protected CommonActions getCommonActionsInstance() {
		return CommonActions.getInstance();
	
	}
}
