$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_todoList.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: mageshkumar07@hotmail.com"
    }
  ],
  "line": 2,
  "name": "Manage Todo List",
  "description": "",
  "id": "manage-todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#@sanity @test"
    },
    {
      "line": 5,
      "value": "#----------------------Launch Browser-------------------------------#"
    }
  ],
  "line": 6,
  "name": "User loads the todomvc portal",
  "description": "",
  "id": "manage-todo-list;user-loads-the-todomvc-portal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User loads the todomvc portal URL \"https://todomvc.com/examples/vue/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://todomvc.com/examples/vue/",
      "offset": 35
    }
  ],
  "location": "ToDoListSteps.user_loads_the_todomvc_portal_URL(String)"
});
formatter.result({
  "duration": 3263759200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "#----------------------Create ToDo Task-------------------------------#"
    },
    {
      "line": 9,
      "value": "#@sanity @test"
    }
  ],
  "line": 10,
  "name": "Check MVC User is able to add Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User entered the todomvc task name \"\u003cToDoTaskName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "todomvc task \"\u003cToDoTaskName\u003e\" successfully added in the list",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName"
      ],
      "line": 15,
      "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;1"
    },
    {
      "cells": [
        "Schedule Interview"
      ],
      "line": 16,
      "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;2"
    },
    {
      "cells": [
        "Meeting with Manager"
      ],
      "line": 17,
      "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;3"
    },
    {
      "cells": [
        "Share Weekly Report"
      ],
      "line": 18,
      "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Check MVC User is able to add Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User entered the todomvc task name \"Schedule Interview\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "todomvc task \"Schedule Interview\" successfully added in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule Interview",
      "offset": 36
    }
  ],
  "location": "ToDoListSteps.user_entered_the_todomvc_task_name(String)"
});
formatter.result({
  "duration": 351823100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule Interview",
      "offset": 14
    }
  ],
  "location": "ToDoListSteps.todomvc_task_successfully_added_in_the_list(String)"
});
formatter.result({
  "duration": 32613000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check MVC User is able to add Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User entered the todomvc task name \"Meeting with Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "todomvc task \"Meeting with Manager\" successfully added in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 36
    }
  ],
  "location": "ToDoListSteps.user_entered_the_todomvc_task_name(String)"
});
formatter.result({
  "duration": 264638600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 14
    }
  ],
  "location": "ToDoListSteps.todomvc_task_successfully_added_in_the_list(String)"
});
formatter.result({
  "duration": 20605400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Check MVC User is able to add Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-add-todo-task;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User entered the todomvc task name \"Share Weekly Report\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "todomvc task \"Share Weekly Report\" successfully added in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Share Weekly Report",
      "offset": 36
    }
  ],
  "location": "ToDoListSteps.user_entered_the_todomvc_task_name(String)"
});
formatter.result({
  "duration": 257180900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Share Weekly Report",
      "offset": 14
    }
  ],
  "location": "ToDoListSteps.todomvc_task_successfully_added_in_the_list(String)"
});
formatter.result({
  "duration": 19087900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#----------------------Compelte Action-------------------------------#"
    }
  ],
  "line": 21,
  "name": "Check MVC User is able to COMPLETE Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-complete-todo-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User select the created todo task name \"\u003cToDoTaskName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify entered task \"\u003cToDoTaskName\u003e\" completed by TodoUser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-complete-todo-task;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName"
      ],
      "line": 26,
      "id": "manage-todo-list;check-mvc-user-is-able-to-complete-todo-task;;1"
    },
    {
      "cells": [
        "Meeting with Manager"
      ],
      "line": 27,
      "id": "manage-todo-list;check-mvc-user-is-able-to-complete-todo-task;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Check MVC User is able to COMPLETE Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-complete-todo-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User select the created todo task name \"Meeting with Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify entered task \"Meeting with Manager\" completed by TodoUser",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 40
    }
  ],
  "location": "ToDoListSteps.user_select_the_created_todo_task_name(String)"
});
formatter.result({
  "duration": 180393800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 21
    }
  ],
  "location": "ToDoListSteps.verify_entered_task_completed_by_TodoUser(String)"
});
formatter.result({
  "duration": 39387200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "#----------------------Apply Compelte FILTER Action-------------------------------#"
    }
  ],
  "line": 30,
  "name": "Check MVC User can view only TODO list using COMPLETED filter option",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-todo-list-using-completed-filter-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User click on COMPLETED option",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "COMPLETED todo task \"\u003cToDoTaskName\u003e\" listed successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-todo-list-using-completed-filter-option;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName"
      ],
      "line": 35,
      "id": "manage-todo-list;check-mvc-user-can-view-only-todo-list-using-completed-filter-option;;1"
    },
    {
      "cells": [
        "Meeting with Manager"
      ],
      "line": 36,
      "id": "manage-todo-list;check-mvc-user-can-view-only-todo-list-using-completed-filter-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Check MVC User can view only TODO list using COMPLETED filter option",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-todo-list-using-completed-filter-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User click on COMPLETED option",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "COMPLETED todo task \"Meeting with Manager\" listed successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_COMPLETED_option()"
});
formatter.result({
  "duration": 146859000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 21
    }
  ],
  "location": "ToDoListSteps.completed_todo_task_listed_successfully(String)"
});
formatter.result({
  "duration": 13241400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 38,
      "value": "#----------------------Apply ACTIVE FILTER Action-------------------------------#"
    }
  ],
  "line": 39,
  "name": "Check MVC User can view only ACTIVE todo list using ACTIVE filter option",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "User click on ACTIVE option",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "ACTIVE todo task \"\u003cToDoTaskName\u003e\" listed successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName"
      ],
      "line": 44,
      "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option;;1"
    },
    {
      "cells": [
        "Schedule Interview"
      ],
      "line": 45,
      "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option;;2"
    },
    {
      "cells": [
        "Share Weekly Report"
      ],
      "line": 46,
      "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Check MVC User can view only ACTIVE todo list using ACTIVE filter option",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "User click on ACTIVE option",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "ACTIVE todo task \"Schedule Interview\" listed successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_ACTIVE_option()"
});
formatter.result({
  "duration": 124143600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule Interview",
      "offset": 18
    }
  ],
  "location": "ToDoListSteps.active_todo_task_listed_successfully(String)"
});
formatter.result({
  "duration": 15673600,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Check MVC User can view only ACTIVE todo list using ACTIVE filter option",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "User click on ACTIVE option",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "ACTIVE todo task \"Share Weekly Report\" listed successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_ACTIVE_option()"
});
formatter.result({
  "duration": 117309500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Share Weekly Report",
      "offset": 18
    }
  ],
  "location": "ToDoListSteps.active_todo_task_listed_successfully(String)"
});
formatter.result({
  "duration": 22876800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 48,
      "value": "#----------------------Apply ALL FILTER Action-------------------------------#"
    }
  ],
  "line": 49,
  "name": "Check MVC User apply ALL filter option to view all the todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "User click on ALL option",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "All the todo task \"\u003cToDoTaskName\u003e\" listed successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName"
      ],
      "line": 54,
      "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;1"
    },
    {
      "cells": [
        "Schedule Interview"
      ],
      "line": 55,
      "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;2"
    },
    {
      "cells": [
        "Meeting with Manager"
      ],
      "line": 56,
      "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;3"
    },
    {
      "cells": [
        "Share Weekly Report"
      ],
      "line": 57,
      "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 55,
  "name": "Check MVC User apply ALL filter option to view all the todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "User click on ALL option",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "All the todo task \"Schedule Interview\" listed successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_ALL_option()"
});
formatter.result({
  "duration": 149519100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule Interview",
      "offset": 19
    }
  ],
  "location": "ToDoListSteps.all_the_todo_task_listed_successfully(String)"
});
formatter.result({
  "duration": 14272100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Check MVC User apply ALL filter option to view all the todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "User click on ALL option",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "All the todo task \"Meeting with Manager\" listed successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_ALL_option()"
});
formatter.result({
  "duration": 126615700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 19
    }
  ],
  "location": "ToDoListSteps.all_the_todo_task_listed_successfully(String)"
});
formatter.result({
  "duration": 11870500,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Check MVC User apply ALL filter option to view all the todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-apply-all-filter-option-to-view-all-the-todo-task;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "User click on ALL option",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "All the todo task \"Share Weekly Report\" listed successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_ALL_option()"
});
formatter.result({
  "duration": 119191000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Share Weekly Report",
      "offset": 19
    }
  ],
  "location": "ToDoListSteps.all_the_todo_task_listed_successfully(String)"
});
formatter.result({
  "duration": 15547200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#----------------------PENDING ACTIVE\u0027s-------------------------------#"
    }
  ],
  "line": 60,
  "name": "Check MVC User can view only ACTIVE todo list using ACTIVE filter option",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-view-only-active-todo-list-using-active-filter-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "Check for number of active task remining",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.Check_for_number_of_active_task_remining()"
});
formatter.result({
  "duration": 21360600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 63,
      "value": "#----------------------CLEAR COMPLETED TASK-------------------------------#"
    }
  ],
  "line": 64,
  "name": "Check MVC User can CLEAR all the completed todo List task using clear completed option.",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-clear-all-the-completed-todo-list-task-using-clear-completed-option.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User click on CLEAR COMPLETED option",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "COMPLETED todo tasks \"\u003cToDoTaskName\u003e\" are cleared successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-clear-all-the-completed-todo-list-task-using-clear-completed-option.;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName"
      ],
      "line": 69,
      "id": "manage-todo-list;check-mvc-user-can-clear-all-the-completed-todo-list-task-using-clear-completed-option.;;1"
    },
    {
      "cells": [
        "Meeting with Manager"
      ],
      "line": 70,
      "id": "manage-todo-list;check-mvc-user-can-clear-all-the-completed-todo-list-task-using-clear-completed-option.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Check MVC User can CLEAR all the completed todo List task using clear completed option.",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-can-clear-all-the-completed-todo-list-task-using-clear-completed-option.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User click on CLEAR COMPLETED option",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "COMPLETED todo tasks \"Meeting with Manager\" are cleared successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.user_click_on_CLEAR_COMPLETED_option()"
});
formatter.result({
  "duration": 143521600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting with Manager",
      "offset": 22
    }
  ],
  "location": "ToDoListSteps.completed_todo_tasks_are_cleared_successfully(String)"
});
formatter.result({
  "duration": 130313100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "#----------------------EDIT TASK-------------------------------#"
    },
    {
      "line": 73,
      "value": "#@sanity @test"
    }
  ],
  "line": 74,
  "name": "Check MVC User is able to UPDATE existing Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-update-existing-todo-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User edit the previously created todo task name \"\u003cToDoTaskName\u003e\" to \"\u003cUpdatedTaskName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "todomvc task \"\u003cUpdatedTaskName\u003e\" successfully UPDATED in the list",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-update-existing-todo-task;",
  "rows": [
    {
      "cells": [
        "ToDoTaskName",
        "UpdatedTaskName"
      ],
      "line": 79,
      "id": "manage-todo-list;check-mvc-user-is-able-to-update-existing-todo-task;;1"
    },
    {
      "cells": [
        "Schedule Interview",
        "HR Discussion"
      ],
      "line": 80,
      "id": "manage-todo-list;check-mvc-user-is-able-to-update-existing-todo-task;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Check MVC User is able to UPDATE existing Todo task",
  "description": "",
  "id": "manage-todo-list;check-mvc-user-is-able-to-update-existing-todo-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User edit the previously created todo task name \"Schedule Interview\" to \"HR Discussion\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "todomvc task \"HR Discussion\" successfully UPDATED in the list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule Interview",
      "offset": 49
    },
    {
      "val": "HR Discussion",
      "offset": 73
    }
  ],
  "location": "ToDoListSteps.user_edit_the_previously_created_todo_task_name(String,String)"
});
formatter.result({
  "duration": 606431700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HR Discussion",
      "offset": 14
    }
  ],
  "location": "ToDoListSteps.todomvc_task_successfully_UPDATED_in_the_list(String)"
});
formatter.result({
  "duration": 20066200,
  "status": "passed"
});
});