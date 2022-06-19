#Author: mageshkumar07@hotmail.com
Feature: Manage Todo List

  #@sanity @test
#----------------------Launch Browser-------------------------------#
  Scenario: User loads the todomvc portal
    Given User loads the todomvc portal URL "https://todomvc.com/examples/vue/"
#----------------------Create ToDo Task-------------------------------#
  #@sanity @test
  Scenario Outline: Check MVC User is able to add Todo task
    When User entered the todomvc task name "<ToDoTaskName>"
    Then todomvc task "<ToDoTaskName>" successfully added in the list

    Examples: 
      | ToDoTaskName         |
      | Schedule Interview   |
      | Meeting with Manager |
      | Share Weekly Report  |

  #----------------------Compelte Action-------------------------------#
  Scenario Outline: Check MVC User is able to COMPLETE Todo task
    When User select the created todo task name "<ToDoTaskName>"
    Then Verify entered task "<ToDoTaskName>" completed by TodoUser

    Examples: 
      | ToDoTaskName         |
      | Meeting with Manager |

  #----------------------Apply Compelte FILTER Action-------------------------------#
  Scenario Outline: Check MVC User can view only TODO list using COMPLETED filter option
    When User click on COMPLETED option
    Then COMPLETED todo task "<ToDoTaskName>" listed successfully

    Examples: 
      | ToDoTaskName         |
      | Meeting with Manager |

  #----------------------Apply ACTIVE FILTER Action-------------------------------#
  Scenario Outline: Check MVC User can view only ACTIVE todo list using ACTIVE filter option
    When User click on ACTIVE option
    Then ACTIVE todo task "<ToDoTaskName>" listed successfully

    Examples: 
      | ToDoTaskName        |
      | Schedule Interview  |
      | Share Weekly Report |

  #----------------------Apply ALL FILTER Action-------------------------------#
  Scenario Outline: Check MVC User apply ALL filter option to view all the todo task
    When User click on ALL option
    Then All the todo task "<ToDoTaskName>" listed successfully

    Examples: 
      | ToDoTaskName         |
      | Schedule Interview   |
      | Meeting with Manager |
      | Share Weekly Report  |

  #----------------------PENDING ACTIVE's-------------------------------#
  Scenario: Check MVC User can view only ACTIVE todo list using ACTIVE filter option
    Then Check for number of active task remining

  #----------------------CLEAR COMPLETED TASK-------------------------------#
  Scenario Outline: Check MVC User can CLEAR all the completed todo List task using clear completed option.
    When User click on CLEAR COMPLETED option
    Then COMPLETED todo tasks "<ToDoTaskName>" are cleared successfully

    Examples: 
      | ToDoTaskName         |
      | Meeting with Manager |

  #----------------------EDIT TASK-------------------------------#
  #@sanity @test
  Scenario Outline: Check MVC User is able to UPDATE existing Todo task
    When User edit the previously created todo task name "<ToDoTaskName>" to "<UpdatedTaskName>"
    Then todomvc task "<UpdatedTaskName>" successfully UPDATED in the list

    Examples: 
      | ToDoTaskName       | UpdatedTaskName |
      | Schedule Interview | HR Discussion   |
