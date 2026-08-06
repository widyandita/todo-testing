# TodoMVC Test Cases
## Test Environment

| Item            | Value                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------- |
| Application     | TodoMVC (React)                                                                          |
| URL             | [https://todomvc.com/examples/react/dist/#/](https://todomvc.com/examples/react/dist/#/) |
| Browser         | Chromium                                                                                 |
| Testing Type    | Functional Testing                                                                       |
| Automation Tool | Playwright                                                                               |

## TC001 - Verify Application Loads Successfully

| Field            | Description                                |
| ---------------- | ------------------------------------------ |
| **Test Case ID** | TC001                                      |
| **Feature**      | Homepage                                   |
| **Title**        | Verify TodoMVC homepage loads successfully |
| **Precondition** | Browser is open                            |
| **Priority**     | High                                       |

| Step | Action           | Expected Result             |
| ---- | ---------------- | --------------------------- |
| 1    | Open TodoMVC URL | Homepage loads successfully |
| 2    | Check page title | Title is **TodoMVC: React** |

## TC002 - Create Todo Items

| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC002           |
| **Feature**      | Todo Management |
| **Priority**     | High            |

| Step | Action                 | Expected Result      |
| ---- | ---------------------- | -------------------- |
| 1    | Open TodoMVC           | Homepage displayed   |
| 2    | Add "sort videos"      | Todo appears in list |
| 3    | Add "edit photos"    | Todo appears in list |
| 4    | Add "post photos"    | Todo appears in list |
| 5    | Add "design packaging" | Todo appears in list |

## TC003 - Complete a Todo
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC003           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action              | Expected Result          |
| ---- | ------------------- | ------------------------ |
| 1    | Create four todos   | Four todos displayed     |
| 2    | Verify task count |  Four tasks verified   |
| 3    | Check "sort videos"  | Task marked completed |
| 4    | Verify completed task count | One task verified |
| 4    | Verify remaining tasks count | Three tasks verified |

## TC004 - Edit Todo
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC004           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                                          | Expected Result        |
| ---- | ----------------------------------------------- | ---------------------- |
| 1    | Create todos                                    | Todos displayed        |
| 2    | Double-click "design packaging"                 | Edit mode activated    |
| 3    | Change text to "design floorplan and packaging" | Updated text displayed |
| 4    | Validate "design floorplan and packaging" text | Text validated |

## TC005 - Delete Todo
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC005           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                     | Expected Result     |
| ---- | -------------------------- | ------------------- |
| 1    | Hover over "post pictures" | Delete icon appears |
| 2    | Click Delete               | Todo removed        |
| 3    | Verify Deletion               | Deletion verified       |

## TC006 - Clear Completed Todos
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC006           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                | Expected Result        |
| ---- | --------------------- | ---------------------- |
| 1    | Click Clear completed | Completed todo removed |
| 2    | Verify clear completion | Clear completion verified |

## TC007 - Verify Remaining Todo Count
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC007           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                 | Expected Result           |
| ---- | ---------------------- | ------------------------- |
| 1    | Verify remaining tasks count      | Two tasks verified     |

## TC008 - Demo Failing Test
| Field            | Description |
| ---------------- | ----------- |
| **Test Case ID** | TC008       |
| **Feature**      | Reporting   |
| **Priority**     | Low         |

| Step | Action                    | Expected Result  |
| ---- | ------------------------- | ---------------- |
| 1    | Perform CRUD operations   | Two todos remain |
| 2    | Assert three todos remain | Test fails       |
